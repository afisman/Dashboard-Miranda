import React, { useState, useEffect } from 'react';
import { StyledFormContainer, StyledFormInput, StyledFormWrapper, StyledTextArea } from '../../components/reusable/StyledForm';
import { StyledButton } from '../../components/reusable/StyledButton';
import { useNavigate } from 'react-router-dom';
import { fetchRooms } from '../../features/rooms/roomsThunk';
import { RoomInterface } from '../../interfaces/room/roomInterface';
import { useAppDispatch } from '../../hooks/useStore';
import Select from 'react-select';
import { amenities_list } from '../../utils/constants';

interface RoomFormProps {
    singleRoom: RoomInterface
    type: string
    submitFormFunction: (formData: RoomInterface, amenities: string[]) => Promise<void>
}

const RoomForm = ({ singleRoom, type, submitFormFunction }: RoomFormProps) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [formData, setFormData] = useState({ ...singleRoom });
    const [roomAmenities, setRoomAmenities] = useState<any[]>([])

    const initialFetch = async () => {
        await dispatch(fetchRooms()).unwrap();
        let amenitiesArray = [];
        for (let i = 0; i < formData.amenities.length; i++) {
            amenitiesArray.push({ value: formData.amenities[i], label: formData.amenities[i] });
        }
        setRoomAmenities(amenitiesArray);
    }

    useEffect(() => {
        initialFetch();
    }, []);

    const handleAmenitiesChange = (e: any) => {
        setRoomAmenities(e);
    }

    const handleFormChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prevData) => {
            if (name === 'photos') {
                return {
                    ...prevData,
                    [name]: value.split('\n')
                }
            } else if (name === 'rate') {
                return {
                    ...prevData,
                    [name]: Number(value)
                }
            } else if (name === 'discount' && Number(value) > 0 && Number(value) < 100) {
                return {
                    ...prevData,
                    [name]: Number(value),
                    offer: 'Yes'
                }
            } else {
                return {
                    ...prevData,
                    [name]: value
                }
            }
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let amenitiesToUpdate = [];

        for (let amenity of roomAmenities) {
            let amenityExists = amenitiesToUpdate.indexOf(amenity.value);
            if (amenityExists === -1) {
                amenitiesToUpdate.push(amenity.value);
            } else {
                amenitiesToUpdate.splice(amenityExists, 1)
            }
        }

        console.log(formData);

        submitFormFunction(formData, amenitiesToUpdate);
        navigate('/rooms');
    }

    return (
        <>
            <>
                <StyledButton $name='goBack' onClick={() => { navigate('/rooms') }}>
                    Go back
                </StyledButton>
                <StyledFormWrapper>
                    <StyledFormContainer onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
                        <label htmlFor='room_number'>Room number</label>
                        <StyledFormInput
                            placeholder='Room Number'
                            name='room_number'
                            id='room_number'
                            type='string'
                            value={formData.room_number}
                            onChange={(e) => handleFormChange(e)}
                            required
                        ></StyledFormInput>
                        <label htmlFor='photos'>Images</label>
                        <StyledTextArea
                            placeholder='Photos, enter each in a different line'
                            name='photos'
                            id='photos'
                            value={formData.photos?.join('\n')}
                            onChange={(e) => handleFormChange(e)}
                            required
                            rows={6}
                        ></StyledTextArea>
                        <label htmlFor='room_type'>Room type</label>
                        <StyledFormInput
                            placeholder='Description'
                            name='room_type'
                            id='room_type'
                            type='string'
                            value={formData.room_type}
                            onChange={(e) => handleFormChange(e)}
                            required
                        ></StyledFormInput>
                        <label htmlFor='room_type'>Room floor</label>
                        <StyledFormInput
                            placeholder='Room floor'
                            name='room_floor'
                            id='room_floor'
                            type='string'
                            value={formData.room_floor}
                            onChange={(e) => handleFormChange(e)}
                            required
                        ></StyledFormInput>
                        <label htmlFor='description'>Description</label>
                        <StyledFormInput
                            placeholder='Description'
                            name='description'
                            id='description'
                            type='string'
                            value={formData.description}
                            onChange={(e) => handleFormChange(e)}
                            required
                        ></StyledFormInput>
                        <label htmlFor='rate'>Rate</label>
                        <StyledFormInput
                            placeholder='Price per night'
                            name='rate'
                            id='rate'
                            type='text'
                            value={String(formData.rate)}
                            onChange={(e) => handleFormChange(e)}
                            required
                        ></StyledFormInput>
                        <label htmlFor='discount'>Discount</label>
                        <StyledFormInput
                            placeholder='discount'
                            name='discount'
                            id='discount'
                            type='text'
                            value={formData.discount}
                            onChange={(e) => handleFormChange(e)}
                            required
                        ></StyledFormInput>
                        <label htmlFor='amenities'>Amenities</label>
                        <Select
                            openMenuOnFocus={true}
                            isMulti
                            options={amenities_list}
                            value={roomAmenities}
                            onChange={(e) => handleAmenitiesChange(e)}
                            required
                            name='amenities'
                            id='amenities' />
                        <br />
                        <StyledButton $name='login' type='submit'>
                            {type} Room
                        </StyledButton>
                    </StyledFormContainer>
                </StyledFormWrapper>
            </>
        </>
    )
}

export default RoomForm