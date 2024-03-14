import React from 'react';
import UserForm from './UserForm';



const NewUserPage = () => {

    const singleUser = {
        id: 0,
        full_name: "",
        contact: "",
        email: "",
        photo: "",
        start_date: "",
        description: "",
        status: "Active"
    }

    return (
        <>
            <UserForm singleUser={singleUser} type={"New"} />
        </>
    )
}

export default NewUserPage