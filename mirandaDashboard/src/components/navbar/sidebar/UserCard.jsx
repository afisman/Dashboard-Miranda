import React from 'react';
import { CardWrapper } from './SidebarStyles';
import userImg from "../../../assets/Img/selfie.jpg";



const UserCard = () => {
    return (
        <CardWrapper>
            <div>
                <img src={userImg} alt="" />
                <h4>Alef Tau</h4>
                <p>alephtau42@gmail.com</p>
                <button>Edit</button>
            </div>
        </CardWrapper>)
}

export default UserCard