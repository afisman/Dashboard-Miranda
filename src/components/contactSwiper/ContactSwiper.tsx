import React, { useEffect, useState } from 'react';
import { StyledSwiper, StyledSwiperSlide, StyledSwiperSliderText } from '../reusable/StyledSwiper';
import { Navigation, Keyboard } from 'swiper/modules';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { StyledCheckIcon, StyledCrossIcon } from '../reusable/StyledIcons';
import { ContactInterface } from '../../interfaces/contact/contactInterface';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { getContactList } from '../../features/contact/contactSlice';
import { fetchContacts } from '../../features/contact/contactThunk';


const ContactSwiper = () => {
    const dispatch = useAppDispatch();
    const contactsData = useAppSelector(getContactList);

    const initialFetch = async (): Promise<void> => {
        try {
            await dispatch(fetchContacts());
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        initialFetch();
    }, []);

    const formatDate = (date: number) => {
        let msToMinutes = 1000 * 60 * 60 * 24;
        let minutes = Math.floor((Date.now() - date) / msToMinutes);
        let hours = (minutes - (minutes % 60)) / 60
        return [hours, minutes - (hours * 60)]
    }

    return (
        <>
            <StyledSwiper
                modules={[Keyboard, Navigation]}
                slidesPerView={3}
                spaceBetween={20}
                keyboard={{
                    enabled: true,
                }}
                navigation={true}
            >
                {
                    contactsData.map((el: ContactInterface) => (
                        <StyledSwiperSlide
                            key={el._id}
                        >
                            <StyledSwiperSliderText $name='comment'>{el.message.split(' ').slice(0, 12).join(' ')} ...</StyledSwiperSliderText>
                            <div>
                                <div className="swiperIcons">
                                    <img src={el.image} alt={el.full_name} />
                                    <div>
                                        <StyledSwiperSliderText $name='bold'>{el.full_name}</StyledSwiperSliderText>
                                        <StyledSwiperSliderText $name='date'>{formatDate(el.date)[0]} hours and {formatDate(el.date)[1]} min ago</StyledSwiperSliderText>
                                    </div>
                                </div>
                                <div className='swiperIcons'>
                                    <StyledCheckIcon />
                                    <StyledCrossIcon />
                                </div>
                            </div>
                        </StyledSwiperSlide>

                    ))
                }

            </StyledSwiper>
        </>
    )
}

export default ContactSwiper