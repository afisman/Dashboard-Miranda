import { StyledCardRight } from '../../components/reusable/StyledDataCard';
import { StyledCardSwiper, SwiperSliderImg } from '../../components/reusable/StyledSwiper';
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SwiperSlide } from 'swiper/react'; interface RoomSwiperProps {
    images: string[]
}

const RoomPageSwiper = ({ images }: RoomSwiperProps) => {
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

export default RoomPageSwiper