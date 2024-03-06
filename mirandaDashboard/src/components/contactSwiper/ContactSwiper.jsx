import React, { useState } from 'react';
import { StyledSwiper, StyledSwiperSlide, StyledSwiperSliderText } from '../reusable/StyledSwiper';
import { Navigation, Keyboard } from 'swiper/modules';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import data from '../../data/contact.json';
import { StyledCheckIcon, StyledCrossIcon } from '../reusable/StyledIcons';


const ContactSwiper = () => {
    const [contacts, setContacts] = useState(data)

    const formatDate = (date) => {
        return Math.floor(((Date.now() - new Date(date).getTime()) / 1000 / 60 / 60) % 60)
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
                    contacts.map((el) => (
                        <StyledSwiperSlide
                            key={el.id}
                        >
                            <StyledSwiperSliderText $name='comment'>{el.message}</StyledSwiperSliderText>
                            <div>
                                <div className="swiperIcons">
                                    <img src={el.image} alt={el.full_name} />
                                    <div>
                                        <StyledSwiperSliderText $name='bold'>{el.full_name}</StyledSwiperSliderText>
                                        <StyledSwiperSliderText $name='date'>{formatDate(el.date)} min ago</StyledSwiperSliderText>
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