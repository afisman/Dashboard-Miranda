import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinks = styled(NavLink)`
position: relative;
color: #fff;
padding: 15px 20px;
text-decoration: none;
display: flex;
align-items: center;
justify-content: left;
margin: 2px 10px;
border-radius: 10px;
&:hover{
    background: #ffffff24;
}
&.active {
    background: #fff;
    color: #4297ff;
    transition: all 0.4s ease;
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