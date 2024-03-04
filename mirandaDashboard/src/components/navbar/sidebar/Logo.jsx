import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


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
    > div {
       
       > h4 {
           color: #000;
           margin-bottom: 0;
       }
       >h5 {
           text-align: left;
           font: normal normal 300 12px/18px Poppins;
           letter-spacing: 0px;
           color: #5D5449;
           opacity: 1;
           margin: 0;
       }
    }
}
`;

const Logo = () => {
    return (
        <LogoWrapper>
            <Link to="dashboard/home">
                <div>
                    <h4>Travl</h4>
                    <h5>Hotel Admin Dashboard</h5>
                </div>
            </Link>
        </LogoWrapper>
    )
}

export default Logo