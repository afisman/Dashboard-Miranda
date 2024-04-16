import React, { useState, useEffect, useMemo } from 'react';
import { StyledFormContainer, StyledFormInput, StyledFormWrapper, StyledTextArea } from '../../components/reusable/StyledForm';
import { StyledButton } from '../../components/reusable/StyledButton';
import { useNavigate } from 'react-router-dom';
import { getRoomsList } from '../../features/rooms/roomsSlice';
import { fetchRooms } from '../../features/rooms/roomsThunk';
import { fetchCreateBooking, fetchUpdateBooking } from '../../features/bookings/bookingsThunk';
import { StyledSelect } from '../../components/reusable/StyledMenu';
import { BookingInterface } from '../../interfaces/booking/bookingInterface';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { RoomInterface } from '../../interfaces/room/RoomInterface';

interface BookingFormProps {
    singleBooking: BookingInterface
    type: string
}


const BookingForm = ({ singleBooking, type }: BookingFormProps) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const roomsList: RoomInterface[] = useAppSelector(getRoomsList);
    const [formData, setFormData] = useState<BookingInterface>(singleBooking);

    const availableRooms = useMemo(() => {
        return [...roomsList].filter((room) => room.status === 'Available');
    }, [roomsList])

    const initialFetch = async (): Promise<void> => {
        await dispatch(fetchRooms()).unwrap();
    }

    useEffect(() => {
        initialFetch();
    }, [])

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
                            defaultValue={formData?.name}
                            onChange={(e) => handleFormChange(e)}
                        ></StyledFormInput>
                        <StyledFormInput
                            placeholder='Check in'
                            name='check_in'
                            type='date'
                            defaultValue={new Date(formData?.check_out).toISOString().slice(0, 10)}
                            // defaultValue={!isNaN(new Date(formData.check_in).getTime()) ? new Date(formData.check_in)?.toISOString().slice(0, 10) : formData.check_in}
                            onChange={(e) => handleFormChange(e)}
                        ></StyledFormInput>
                        <StyledFormInput
                            placeholder='Check out'
                            name='check_out'
                            type='date'
                            defaultValue={new Date(formData?.check_in).toISOString().slice(0, 10)}
                            // defaultValue={!isNaN(new Date(formData.check_out).getTime()) ? new Date(formData.check_out).toISOString().slice(0, 10) : formData.check_out}
                            onChange={(e) => handleFormChange(e)}
                        ></StyledFormInput>
                        <StyledFormInput
                            placeholder='Hour in'
                            name='hour_check_in'
                            type='time'
                            defaultValue={formData?.hour_check_in}
                            onChange={(e) => handleFormChange(e)}
                        ></StyledFormInput>
                        <StyledFormInput
                            placeholder='Hour out'
                            name='hour_check_out'
                            type='time'
                            defaultValue={formData?.hour_check_out}
                            onChange={(e) => handleFormChange(e)}
                        ></StyledFormInput>
                        <StyledTextArea
                            placeholder='Special request'
                            name='special_request'
                            defaultValue={formData?.special_request}
                            onChange={(e) => handleFormChange(e)}
                        ></StyledTextArea>
                        <StyledSelect name="room_id" id="room_id" onChange={(e) => handleFormChange(e)}>
                            {availableRooms?.map((room) => (
                                <option defaultValue={room._id} key={room._id}>{room.room_number}</option>
                            ))}
                        </StyledSelect>
                        <StyledButton $name="login" type="submit">
                            {type} Booking
                        </StyledButton>
                    </StyledFormContainer>
                </StyledFormWrapper>
            </>
        </>
    )
}

export default BookingForm