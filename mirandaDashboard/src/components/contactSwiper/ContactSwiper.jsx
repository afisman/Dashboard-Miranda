import React, { useState } from 'react';
import { StyledSwiper, StyledSwiperSlide } from '../reusable/StyledSwiper';
import { Navigation, Keyboard } from 'swiper/modules';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import data from '../../data/contact.json';


const ContactSwiper = () => {
    const [contacts, setContacts] = useState(data)

    const formatDate = (date) => {
        return Math.floor(((Date.now() - new Date(date).getTime()) / 1000 / 60 / 60) % 60)
    }

    console.log(formatDate(contacts[0].date))
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
                            <p>{el.message}</p>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={el.image} alt={el.full_name} />
                                <div>
                                    <p>{el.full_name}</p>
                                    <p>{formatDate(el.date)} min ago</p>
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