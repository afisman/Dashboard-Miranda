import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';

export const StyledSwiper = styled(Swiper)`
    width: 90%;
    margin: 20em auto 2em auto;
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
   

    >div {
        display: flex;
        align-items: center;
        gap: 1em;
        > img {
            width:3.5em;
            height: 3.5em;
            border-radius: 0.5em;
            object-fit: cover;
        }
    }




    
`;

export const StyledSwiperSlideText = styled.p`

    font-size: 1rem;
    line-height: 1.5rem;

    ${(props) =>
        props.$name === "paragraph" &&
        `
        color: #4E4E4E;
        `}
        ${(props) =>
        props.$name === "name" &&
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


