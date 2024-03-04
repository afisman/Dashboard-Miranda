import styled from 'styled-components';
import { NavLink } from 'react-router-dom';



export const SidebarWrapper = styled.div`
position: fixed;
top:0;
left:0;
width:250px;
height: 100vh;
display:block;
z-index:2;
transition: transform 0.3s ease-in-out;
`;

export const SidebarBody = styled.div`
height: 100vh;
overflow: hidden;
`;

export const UnorderList = styled.ul`
    position: relative;
    list-style: none;
    padding: 0;
    display: block;
    transition: all 0.5s ease;
`;

export const NavLinks = styled(NavLink)`
position: relative;
text-align: center;
font-family: "Poppins", sans-serif;
letter-spacing: 0px;
opacity: 1;
padding: 10px 15px;
text-decoration: none;
display: flex;
align-items: center;
justify-content: left;
margin: 0 10px;
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

export const Icon = styled.div`
margin-right: 14px;
font-size: 20px;
`;

export const CardWrapper = styled.div`
    width: 183px;
    height: 221px;
    margin: 0 auto;
    padding: 10px;
    box-shadow: 0px 20px 30px #00000014;
    border-radius: 10px;

    >div {
        text-align: center;
        > img {
            width: 70px;
            height: 70px;
            object-fit: cover;
            border-radius: 5px;
        }

        > h4 {
            text-align: center;
            font-family: "Poppins", sans-serif;
            font-size: 16px;
            line-height: 25px;
            letter-spacing: 0px;
            color: #393939;
            opacity: 1;

        }
        >p {
            font-family: "Poppins", sans-serif;
            font-size: 12px;
            line-height: 18px;
            font-weight: 300;
            letter-spacing: 0px;
            color: #B2B2B2;
            opacity: 1;
        }
        >button {
            border-radius: 8px;
            background: #EBF1EF 0% 0% no-repeat padding-box;
            opacity: 1;
            font-family: "Poppins", sans-serif;
            font-size: 14px;
            line-height: 21px;
            font-weight: 600;
            letter-spacing: 0px;
            color: #135846;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
        }
    }

`;
