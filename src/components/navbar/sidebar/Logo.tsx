import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LuBuilding2 } from "react-icons/lu";

const LogoWrapper = styled.div`
width: 100%;
padding: 0 20px;
display: flex;
align-items: center;
> a {
    width: 100%;
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
    >svg {
        width: 2rem;
        height: 2rem;
        fill: #135846;
    }
    > div {
        display: flex;
        flex-direction: column;
        justify-content: center;

        > h4 {
            color: #000;
            margin: 0;
            font-family: 'Poppins', sans-serif;
            font-weight: 900;
            font-size: 1.8rem;
            line-height: 2rem;
            letter-spacing: -0.0625rem;
        }
        >h5 {
            text-align: left;
            font: normal normal 300 12px/18px 'Poppins';
            letter-spacing: 0px;
            color: #5D5449;
            opacity: 1;
            margin: 0;
        }
    }
}
`;

const Logo: React.FC = () => {
    return (
        <LogoWrapper>
            <Link to="dashboard">
                <LuBuilding2 />
                <div>
                    <h4>travl</h4>
                    <h5>Hotel Admin Dashboard</h5>
                </div>
            </Link>
        </LogoWrapper>
    )
}

export default Logo