import styled from 'styled-components';
import { NavLink } from 'react-router-dom';



export const SidebarWrapper = styled.div`
position: fixed;
top:0;
left:0;
width:17%;
height: 100vh;
display:block;
z-index:2;
transition: transform 0.3s ease-in-out;
background-color: #fff;
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
    width: 70%;
    height: auto;
    margin: 0 auto;
    padding: 0.8em;
    box-shadow: 0px 20px 30px #00000014;
    border-radius: .6em;

    >div {
        text-align: center;
        > img {
            width: 5em;
            height: 5em;
            object-fit: cover;
            border-radius: 0.5em;
        }

        > h4 {
            text-align: center;
            font-family: "Poppins", sans-serif;
            font-size: 1.2em;
            line-height: 1.6em;
            color: #393939;
            opacity: 1;

        }
        >p {
            font-family: "Poppins", sans-serif;
            font-size: 1em;
            line-height:1.2em;
            font-weight: 300;
            color: #B2B2B2;
            opacity: 1;
        }
        >button {
            border-radius: 0.5em;
            background: #EBF1EF 0% 0% no-repeat padding-box;
            opacity: 1;
            font-family: "Poppins", sans-serif;
            font-size:1em;
            line-height: 1.5em;
            font-weight: 600;
            color: #135846;
            border: none;
            padding: 0.5em 1em;
            cursor: pointer;
        }
    }

`;

export const SideFooter = styled.div`
padding: 1em;
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    /* gap: 1em; */

    p{
        font-size: 1.2em;
        font-weight:400;
        color:#799283;
        line-height: 2em;
    }

    h2{
        font-size: 1.4em;
        font-weight: 600;
        line-height: 2em;
        color: #000
    }
`
