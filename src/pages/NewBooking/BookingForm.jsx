import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { StyledFormContainer, StyledFormInput, StyledFormWrapper, StyledTextArea } from '../../components/reusable/StyledForm';
import { StyledButton } from '../../components/reusable/StyledButton';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getRoomStatus, getRoomsList } from '../../features/rooms/roomsSlice';
import { fetchRooms } from '../../features/rooms/roomsThunk';
import { fetchBookings, fetchCreateBooking, fetchSingleBooking, fetchUpdateBooking } from '../../features/bookings/bookingsThunk';
import { StyledSelect } from '../../components/reusable/StyledMenu';
import { getBookingsList, getBookingsError, getBookingsStatus, getSingleBooking } from '../../features/bookings/bookingsSlice';
import { StyledSpinner } from '../../components/reusable/StyledSpinner';



const BookingForm = ({ id = null }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const bookingsList = useSelector(getBookingsList);
    const bookingsListError = useSelector(getBookingsError);
    const bookingsListStatus = useSelector(getBookingsStatus);
    const roomsList = useSelector(getRoomsList);
    const roomsListStatus = useSelector(getRoomStatus);
    const singleBooking = useSelector(getSingleBooking);



    const [spinner, setSpinner] = useState(true)
    const moment = new Date();

    const [formData, setFormData] = useState(
        {
            id: 1,
            name: "",
            order_date: "",
            check_in: "",
            hour_check_in: "",
            check_out: "",
            hour_check_out: "",
            special_request: "",
            room_id: "",
        }
    );

    const availableRooms = useMemo(() => {
        return [...roomsList].filter((room) => room.status === 'Available')

    }, [roomsList])



    const initialFetch = useCallback(async () => {
        await dispatch(fetchRooms()).unwrap();
        await dispatch(fetchBookings()).unwrap();
        if (id) {
            await dispatch(fetchSingleBooking(id));
        }
    }, [id, dispatch])

    const updateFormData = () => {
        setFormData(singleBooking)
        setSpinner(false)

    }

    useEffect(() => {
        initialFetch();
    }, [initialFetch])

    useEffect(() => {
        updateFormData()
    }, [singleBooking])

    const handleFormChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({ ...prevData, [name]: value }))
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchUpdateBooking(formData));
    }

    return (
        <>
            {
                singleBooking ?


                    <>
                        <StyledButton $name='goBack' onClick={() => { navigate('/bookings') }}>
                            Go back
                        </StyledButton>
                        <StyledFormWrapper>
                            <StyledFormContainer onSubmit={(e) => handleSubmit(e)}>
                                <StyledFormInput
                                    placeholder='Full name'
                                    name='name'
                                    type='text'
                                    value={formData?.name}
                                    onChange={(e) => handleFormChange(e)}
                                ></StyledFormInput>
                                <StyledFormInput
                                    placeholder='Check in'
                                    name='check_in'
                                    type='date'
                                    value={""}
                                    onChange={(e) => handleFormChange(e)}
                                ></StyledFormInput>
                                <StyledFormInput
                                    placeholder='Check out'
                                    name='check_out'
                                    type='date'
                                    value={""}
                                    onChange={(e) => handleFormChange(e)}
                                ></StyledFormInput>
                                <StyledFormInput
                                    placeholder='Hour in'
                                    name='hour_check_in'
                                    type='time'
                                    value={formData?.hour_check_in}
                                    onChange={(e) => handleFormChange(e)}
                                ></StyledFormInput>
                                <StyledFormInput
                                    placeholder='Hour out'
                                    name='hour_check_out'
                                    type='time'
                                    value={formData?.hour_check_out}
                                    onChange={(e) => handleFormChange(e)}
                                ></StyledFormInput>
                                <StyledTextArea
                                    placeholder='Special request'
                                    name='special_request'
                                    type='text'
                                    value={formData?.special_request}
                                    onChange={(e) => handleFormChange(e)}
                                ></StyledTextArea>
                                <StyledSelect name="room_id" id="room_id" onChange={(e) => handleFormChange(e)}>
                                    {availableRooms?.map((room) => (
                                        <option value={room.id} key={room.id}>{room.room_number}</option>
                                    ))}
                                </StyledSelect>
                                <StyledButton $name="login" type="submit">
                                    {id ? 'Edit' : 'Create'} Booking
                                </StyledButton>
                            </StyledFormContainer>
                        </StyledFormWrapper>
                    </>
                    :
                    <StyledSpinner />

            }
        </>
    )
}

export default BookingForm