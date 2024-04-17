import React from 'react';
import UserForm from './UserForm';
import { UserInterface } from '../../interfaces/user/userInterface';

const NewUserPage = () => {

    const singleUser: UserInterface = {
        full_name: "",
        contact: "",
        email: "",
        photo: "",
        start_date: Date.now(),
        description: "",
        status: "Active",
        position: "",
        password: ""
    }

    return (
        <>
            <UserForm singleUser={singleUser} type={"New"} />
        </>
    )
}

export default NewUserPage