import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { StyledFormContainer, StyledFormInput, StyledFormWrapper, StyledTextArea } from '../../components/reusable/StyledForm';
import { StyledButton } from '../../components/reusable/StyledButton';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getRoomStatus, getRoomsList } from '../../features/rooms/roomsSlice';
import { fetchRooms } from '../../features/rooms/roomsThunk';
import { fetchBookings, fetchCreateBooking, fetchSingleBooking } from '../../features/bookings/bookingsThunk';
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
    const dateNow = moment.toISOString().slice(0, 16).replace("T", " ");

    const [formData, setFormData] = useState({
        id: 1,
        name: "",
        order_date: dateNow,
        check_in: "",
        hour_check_in: "",
        check_out: "",
        hour_check_out: "",
        special_request: "",
        room: { id: "" },
    });

    const availableRooms = useMemo(() => {
        return [...roomsList].filter((room) => room.status === 'Available')

    }, [roomsList])



    const initialFetch = useCallback(async () => {
        await dispatch(fetchRooms()).unwrap();
        if (id) {
            await dispatch(fetchSingleBooking(id));
        }

        setSpinner(false)
    }, [id, dispatch])

    useEffect(() => {
        initialFetch();
    }, [initialFetch])



    // useEffect(
    //     () => {

    //         if (roomsListStatus === "idle") {
    //             dispatch(fetchRooms());
    //         } else if (roomsListStatus === "pending") {
    //             setSpinner(true);
    //         } else if (roomsListStatus === "fulfilled") {
    //             setSpinner(false)
    //         }
    //     }, [
    //     dispatch,
    //     roomsList,
    //     roomsListStatus]
    // );

    // useEffect(
    //     () => {

    //         if (roomsListStatus === "idle") {
    //             dispatch(fetchBookings());
    //         } else if (roomsListStatus === "pending") {
    //             setSpinner(true);
    //         } else if (roomsListStatus === "fulfilled") {
    //             setSpinner(false)
    //         }
    //     }, [
    //     dispatch,
    //     bookingsList,
    //     bookingsListStatus]
    // );

    const handleFormChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => {
            if (name === 'room_id') {
                return {
                    ...prevData,
                    room: { id: value }
                }
            } else {
                return {
                    ...prevData,
                    [name]: value
                }
            }
        })
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchCreateBooking(formData));
    }

    return (
        <>
            {
                singleBooking ?
                    <StyledFormWrapper>
                        <StyledFormContainer onSubmit={(e) => handleSubmit(e)}>
                            <StyledFormInput
                                placeholder='Full name'
                                name='name'
                                type='text'
                                value={singleBooking.name}
                                onChange={handleFormChange}
                            ></StyledFormInput>
                            <StyledFormInput
                                placeholder='Check in'
                                name='check_in'
                                type='date'
                                value={new Date(singleBooking.check_in).toISOString().slice(0, 10)}
                                onChange={handleFormChange}
                            ></StyledFormInput>
                            <StyledFormInput
                                placeholder='Check out'
                                name='check_out'
                                type='date'
                                value={new Date(singleBooking.check_out).toISOString().slice(0, 10)}
                                onChange={handleFormChange}
                            ></StyledFormInput>
                            <StyledFormInput
                                placeholder='Hour in'
                                name='hour_check_in'
                                type='time'
                                value={singleBooking.hour_check_in}
                                onChange={handleFormChange}
                            ></StyledFormInput>
                            <StyledFormInput
                                placeholder='Hour out'
                                name='hour_check_out'
                                type='time'
                                value={singleBooking.hour_check_out}
                                onChange={handleFormChange}
                            ></StyledFormInput>
                            <StyledTextArea
                                placeholder='Special request'
                                name='special_request'
                                type='text'
                                value={singleBooking.special_request}
                                onChange={handleFormChange}
                            ></StyledTextArea>
                            <StyledSelect name="room_id" id="room_id" onChange={(e) => handleFormChange(e)}>
                                {availableRooms?.map((room) => (
                                    <option value={room.id} key={room.id}>{room.room_number}</option>
                                ))}
                            </StyledSelect>
                            <StyledButton $name="login" type="submit">
                                Create Booking
                            </StyledButton>
                        </StyledFormContainer>
                    </StyledFormWrapper>
                    :
                    <StyledSpinner />
            }
        </>
    )
}

export default BookingForm