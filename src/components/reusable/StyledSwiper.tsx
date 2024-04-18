import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';

export const StyledSwiper = styled(Swiper)`
    width: 90%;
    margin: 0 auto;
    padding: 2em;

    & .swiper-button-prev, .swiper-button-next {
        color: #fff;
        background: #135846;
        width: 2em;
        height: 2em;
        border-radius: 0.3em;
        &::after {
            font-size: 1rem;
        }
    }

    & .swiper-button-disabled {
        display: none;
    }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
    border-radius: 1em;
    background-color: #fff;
    padding: 1.5em;
    max-width: 25%;
    margin: 1em; 
    height: auto;

    >div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        

        & .swiperIcons {
            display: flex;
            gap: 1em;

            > img {
            width:3.5em;
            height: 3.5em;
            border-radius: 0.5em;
            object-fit: cover;
        }
        }
    }  
`;

export const StyledSwiperSliderText = styled.p<{ $name?: string }>`

    font-size: .8rem;
    line-height: 1.5rem;
    margin: 0;

    ${(props) =>
        props.$name === "comment" &&
        `
        color: #4E4E4E;
        `}
        ${(props) =>
        props.$name === "bold" &&
        `
        font-weight: 600;
        color: #262626;
        `}
        ${(props) =>
        props.$name === "date" &&
        `
        line-height: 1.25rem;
        color: #799283;
        `}
`;

export const StyledCardSwiper = styled(Swiper)`  
    /* width: 100% ; */
    height: 100%;
    border-top-right-radius: 1em;
    border-bottom-right-radius: 1em;

    & .swiper-button-prev, .swiper-button-next {
        color: #fff;
        background: #bdbabad1;
        width: 2em;
        height: 2em;
        border-radius: 0.3em;
        &::after {
            font-size: 1rem;
        }
    }  
`;

export const SwiperSliderImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`


