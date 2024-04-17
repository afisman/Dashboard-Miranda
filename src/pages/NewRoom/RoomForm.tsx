import React, { useState, useEffect, useMemo } from 'react';
import { StyledFormContainer, StyledFormInput, StyledFormWrapper, StyledTextArea } from '../../components/reusable/StyledForm';
import { StyledButton } from '../../components/reusable/StyledButton';
import { useNavigate } from 'react-router-dom';
import { fetchCreateRoom, fetchRooms, fetchUpdateRoom } from '../../features/rooms/roomsThunk';
import { RoomInterface } from '../../interfaces/room/roomInterface';
import { useAppDispatch } from '../../hooks/useStore';
import Select from 'react-select';

interface RoomFormProps {
    singleRoom: RoomInterface
    type: string
}

const RoomForm = ({ singleRoom, type }: RoomFormProps) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [formData, setFormData] = useState({ ...singleRoom });
    const [roomAmenities, setRoomAmenities] = useState<any[]>([])

    const initialFetch = async () => {
        await dispatch(fetchRooms()).unwrap();
    }

    useEffect(() => {
        initialFetch();
    }, []);

    const amenities_list = [
        { value: 'Breakfast', label: 'Breakfast' },
        { value: 'Smart Security', label: 'Smart Security' },
        { value: 'Locker', label: 'Locker' },
        { value: 'Shower', label: 'Shower' },
        { value: '24/7 Online Support', label: '24/7 Online Support' },
        { value: 'Kitchen', label: 'Kitchen' },
        { value: 'Cleaning', label: 'Cleaning' },
        { value: 'High Speed Wifi', label: 'High Speed Wifi' },
        { value: 'Air Conditioner', label: 'Air Conditioner' },
        { value: 'Towels', label: 'Towels' },
        { value: 'Grocery', label: 'Grocery' },
        { value: 'Shop Near', label: 'Shop Near' },
        { value: 'Grocery', label: 'Grocery' },
        { value: 'Terrace', label: 'Terrace' },
        { value: 'Room Service', label: 'Room Service' },
    ];

    const handleAmenitiesChange = (e: any) => {
        console.log(e)


        setRoomAmenities(e)

    }

    const handleFormChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = e.target;

        // let amenitiesToUpdate = []

        // for (let amenity of roomAmenities) {
        //     let amenityExists = amenitiesToUpdate.indexOf(amenity.value)
        //     if (amenityExists === -1) {
        //         amenitiesToUpdate.push(amenity.value)
        //     } else {
        //         amenitiesToUpdate.splice(amenityExists, 1)
        //     }
        // }

        // console.log(amenitiesToUpdate)

        setFormData((prevData) => {
            if (name === 'photos') {
                return {
                    ...prevData,
                    [name]: value.split("\n"),
                    // amenities: amenitiesToUpdate
                }
            } else if (name === 'rate') {
                return {
                    ...prevData,
                    [name]: Number(value),
                    // amenities: amenitiesToUpdate

                }
            } else if (name === 'discount' && Number(value) > 0 && Number(value) < 100) {
                return {
                    ...prevData,
                    [name]: Number(value),
                    offer: 'Yes',
                    // amenities: amenitiesToUpdate

                }
            } else {
                return {
                    ...prevData,
                    [name]: value,
                    // amenities: amenitiesToUpdate
                }
            }
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let amenitiesToUpdate = []

        for (let amenity of roomAmenities) {
            let amenityExists = amenitiesToUpdate.indexOf(amenity.value)
            if (amenityExists === -1) {
                amenitiesToUpdate.push(amenity.value)
            } else {
                amenitiesToUpdate.splice(amenityExists, 1)
            }
        }


        if (type === 'Edit') {
            try {
                await dispatch(fetchUpdateRoom({ ...formData, amenities: amenitiesToUpdate }));
                navigate('/rooms');

            } catch (error) {
                console.log(error);
            }
        }

        if (type === 'New') {
            try {
                await dispatch(fetchCreateRoom({ ...formData, amenities: amenitiesToUpdate }))
                    ;
                navigate('/rooms');

            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <>
            <>
                <StyledButton $name='goBack' onClick={() => { navigate('/rooms') }}>
                    Go back
                </StyledButton>
                <StyledFormWrapper>
                    <StyledFormContainer onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
                        <label htmlFor="room_number">Room number</label>
                        <StyledFormInput
                            placeholder='Room Number'
                            name='room_number'
                            type='string'
                            value={formData.room_number}
                            onChange={(e) => handleFormChange(e)}
                        ></StyledFormInput>
                        <label htmlFor="photos">Images</label>
                        <StyledTextArea
                            placeholder='Photos, enter each in a different line'
                            name='photos'
                            value={formData.photos?.join("\n")}
                            onChange={(e) => handleFormChange(e)}
                            rows={6}
                        ></StyledTextArea>
                        <label htmlFor="room_type">Room type</label>
                        <StyledFormInput
                            placeholder='Description'
                            name='room_type'
                            type='string'
                            value={formData.room_type}
                            onChange={(e) => handleFormChange(e)}
                        ></StyledFormInput>
                        <label htmlFor="room_type">Room floor</label>
                        <StyledFormInput
                            placeholder='Room floor'
                            name='room_floor'
                            type='string'
                            value={formData.room_floor}
                            onChange={(e) => handleFormChange(e)}
                        ></StyledFormInput>
                        <label htmlFor="description">Description</label>
                        <StyledFormInput
                            placeholder='Description'
                            name='description'
                            type='string'
                            value={formData.description}
                            onChange={(e) => handleFormChange(e)}
                        ></StyledFormInput>
                        <label htmlFor="rate">Rate</label>
                        <StyledFormInput
                            placeholder='Price per night'
                            name='rate'
                            type='text'
                            value={String(formData.rate)}
                            onChange={(e) => handleFormChange(e)}
                        ></StyledFormInput>
                        <label htmlFor="discount">Discount</label>
                        <StyledFormInput
                            placeholder='discount'
                            name='discount'
                            type='text'
                            value={formData.discount}
                            onChange={(e) => handleFormChange(e)}
                        ></StyledFormInput>
                        {/* <StyledFormInput
                                placeholder='Cancelation'
                                name='cancelation'
                                type='text'
                                value={formData.cancelation}
                                onChange={(e) => handleFormChange(e)}
                            ></StyledFormInput> */}
                        <label htmlFor="amenities">Amenities</label>
                        <Select isMulti options={amenities_list} value={roomAmenities} onChange={(e) => handleAmenitiesChange(e)} name='amenities' />
                        {/* <StyledTextArea
                            placeholder='Amenities, enter each in a different line'
                            name='amenities'
                            value={formData.amenities?.join("\n")}
                            onChange={(e) => handleFormChange(e)}
                            rows={6}
                        ></StyledTextArea> */}
                        <StyledButton $name="login" type="submit">
                            {type} Room
                        </StyledButton>
                    </StyledFormContainer>
                </StyledFormWrapper>
            </>
        </>
    )
}

export default RoomForm