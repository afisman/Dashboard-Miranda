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
import { RoomInterface } from '../../interfaces/room/roomInterface';
import swal from 'sweetalert';
import { toast } from 'react-toastify';




interface BookingFormProps {
    singleBooking: BookingInterface
    type: string
    submitBookingForm: (formData: BookingInterface) => Promise<void>
}


const BookingForm = ({ singleBooking, type, submitBookingForm }: BookingFormProps) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const roomsList: RoomInterface[] = useAppSelector(getRoomsList);

    const availableRooms = useMemo(() => {
        return [...roomsList].filter((room) => room.status === 'Available');
    }, [roomsList])

    const [formData, setFormData] = useState<BookingInterface>(singleBooking);

    const initialFetch = async (): Promise<void> => {
        await dispatch(fetchRooms()).unwrap();
    }

    useEffect(() => {
        initialFetch();
    }, [])

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        e.preventDefault()
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        submitBookingForm(formData);
        navigate('/bookings');
    }

    return (
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
                        required
                    ></StyledFormInput>
                    <StyledFormInput
                        placeholder='Check in'
                        name='check_in'
                        type='date'
                        defaultValue={new Date(formData?.check_out).toISOString().slice(0, 10)}
                        onChange={(e) => handleFormChange(e)}
                        required
                    ></StyledFormInput>
                    <StyledFormInput
                        placeholder='Check out'
                        name='check_out'
                        type='date'
                        defaultValue={new Date(formData?.check_in).toISOString().slice(0, 10)}
                        onChange={(e) => handleFormChange(e)}
                        required
                    ></StyledFormInput>
                    <StyledFormInput
                        placeholder='Hour in'
                        name='hour_check_in'
                        type='time'
                        defaultValue={formData?.hour_check_in}
                        onChange={(e) => handleFormChange(e)}
                        required
                    ></StyledFormInput>
                    <StyledFormInput
                        placeholder='Hour out'
                        name='hour_check_out'
                        type='time'
                        defaultValue={formData?.hour_check_out}
                        onChange={(e) => handleFormChange(e)}
                        required
                    ></StyledFormInput>
                    <StyledFormInput
                        placeholder='Discount'
                        name='discount'
                        type='number'
                        min='0'
                        max='99'
                        defaultValue={formData?.discount}
                        onChange={(e) => handleFormChange(e)}
                        required
                    ></StyledFormInput>
                    <StyledTextArea
                        placeholder='Special request'
                        name='special_request'
                        defaultValue={formData?.special_request}
                        onChange={(e) => handleFormChange(e)}
                        required
                    ></StyledTextArea>
                    <StyledSelect name="room" id="room" onChange={(e) => handleFormChange(e)}>
                        {availableRooms?.map((room) => (
                            <option value={room._id} key={room._id}>{room.room_number}</option>
                        ))}
                    </StyledSelect>
                    <StyledButton $name="login" type="submit" >
                        {type} Booking
                    </StyledButton>
                </StyledFormContainer>
            </StyledFormWrapper>
        </>
    )
}

export default BookingForm