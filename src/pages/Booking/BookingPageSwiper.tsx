import { StyledCardRight } from '../../components/reusable/StyledDataCard';
import { StyledCardSwiper, SwiperSliderImg } from '../../components/reusable/StyledSwiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { SwiperSlide } from 'swiper/react';

interface BookingSwiperProps {
    images: string[]
}

const BookingPageSwiper = ({ images }: BookingSwiperProps) => {
    return (
        <>
            <StyledCardRight>
                <StyledCardSwiper
                    slidesPerView={1}
                    spaceBetween={10}
                    navigation={true}
                    modules={[Navigation]}
                >
                    {images.map((el, i) => (
                        <SwiperSlide key={i}><SwiperSliderImg src={el} /></SwiperSlide>
                    ))}
                </StyledCardSwiper>
            </StyledCardRight>
        </>
    )
}

export default BookingPageSwiper