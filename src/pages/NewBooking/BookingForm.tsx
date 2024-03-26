import React, { useState, useEffect, useMemo } from 'react';
import { StyledFormContainer, StyledFormInput, StyledFormWrapper, StyledTextArea } from '../../components/reusable/StyledForm';
import { StyledButton } from '../../components/reusable/StyledButton';
import { useNavigate } from 'react-router-dom';
import { getRoomsList } from '../../features/rooms/roomsSlice';
import { fetchRooms } from '../../features/rooms/roomsThunk';
import { fetchCreateBooking, fetchUpdateBooking } from '../../features/bookings/bookingsThunk';
import { StyledSelect } from '../../components/reusable/StyledMenu';
import { StyledSpinner } from '../../components/reusable/StyledSpinner';
import { BookingInterface } from '../../interfaces/booking/bookingInterface';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';

interface BookingFormProps {
    singleBooking: BookingInterface
    type: string
}


const BookingForm = ({ singleBooking, type }: BookingFormProps) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const roomsList = useAppSelector(getRoomsList);
    const [spinner, setSpinner] = useState<boolean>(true);
    const [formData, setFormData] = useState<BookingInterface>(singleBooking);

    const availableRooms = useMemo(() => {
        return [...roomsList].filter((room) => room.status === 'Available');
    }, [roomsList])

    const initialFetch = async (): Promise<void> => {
        await dispatch(fetchRooms()).unwrap();
        setSpinner(false);
    }

    useEffect(() => {
        initialFetch();
    }, [initialFetch])

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({ ...prevData, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (type === 'Edit') {
            dispatch(fetchUpdateBooking(formData));
            navigate('/bookings')
        }

        if (type === 'New') {
            dispatch(fetchCreateBooking(formData))
            navigate('/bookings')

        }
    }

    return (
        <>
            {
                spinner ?


                    <StyledSpinner />
                    :
                    <>
                        <StyledButton $name='goBack' onClick={() => { navigate('/bookings') }}>
                            Go back
                        </StyledButton>
                        <StyledFormWrapper>
                            <StyledFormContainer onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
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
                                    value={formData.check_in != "" ? new Date(formData.check_in).toISOString().slice(0, 10) : formData.check_in}
                                    onChange={(e) => handleFormChange(e)}
                                ></StyledFormInput>
                                <StyledFormInput
                                    placeholder='Check out'
                                    name='check_out'
                                    type='date'
                                    value={formData.check_out != "" ? new Date(formData.check_out).toISOString().slice(0, 10) : formData.check_out}
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
                                    value={formData?.special_request}
                                    onChange={(e) => handleFormChange(e)}
                                ></StyledTextArea>
                                <StyledSelect name="room_id" id="room_id" onChange={(e) => handleFormChange(e)}>
                                    {availableRooms?.map((room) => (
                                        <option value={room.id} key={room.id}>{room.room_number}</option>
                                    ))}
                                </StyledSelect>
                                <StyledButton $name="login" type="submit">
                                    {type} Booking
                                </StyledButton>
                            </StyledFormContainer>
                        </StyledFormWrapper>
                    </>


            }
        </>
    )
}

export default BookingForm