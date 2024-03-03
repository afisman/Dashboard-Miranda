import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinks = styled(NavLink)`
position: relative;
text-align: left;
font-family: Poppins, sans-serif;
letter-spacing: 0px;
opacity: 1;
padding: 15px 20px;
text-decoration: none;
display: flex;
align-items: center;
justify-content: left;
margin: 2px 10px;
color: #799283;

&:hover{
    background: #ffffff24;
}
&.active {
    background: #fff;
    color: #E23428;
    transition: all 0.4s ease;
    border-left: 4px solid #E23428;
    font-weight: 600;

    > div > svg {
            color: #E23428;

    }
}
`;

const Icon = styled.div`
margin-right: 14px;
font-size: 20px;
`;



const SidebarButton = ({ to, icon, title }) => {
    return (
        <li>
            <NavLinks
                strict="true"
                to={{
                    pathname: to
                }}
            >
                <Icon>{icon}</Icon>
                {title}
            </NavLinks>
        </li>
    )
}

export default SidebarButton