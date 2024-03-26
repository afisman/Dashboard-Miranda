import React from 'react';
import UserForm from './UserForm';
import { UserInterface } from '../../interfaces/user/userInterface';



const NewUserPage = () => {

    const singleUser: UserInterface = {
        id: 0,
        full_name: "",
        contact: "",
        email: "",
        photo: "",
        start_date: "",
        description: "",
        status: "Active",
        position: ""
    }

    return (
        <>
            <UserForm singleUser={singleUser} type={"New"} />
        </>
    )
}

export default NewUserPage