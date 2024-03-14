import React, { useState } from 'react';
import UserForm from './UserForm';



const NewUserPage = () => {
    const [form, setForm] = useState({});

    const handleFormChange = (e) => {
        const { name, value } = e.target;

        setForm((prevData) => {
            if (name === 'amenities') {
                return {
                    ...prevData,
                    [name]: value.split("\n")
                }
            } else {
                return {
                    ...prevData,
                    [name]: value
                }
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, value } = e.target;

        setForm((prevData) => {
            if (name === 'amenities') {
                return {
                    ...prevData,
                    [name]: value.split("\n")
                }
            } else {
                return {
                    ...prevData,
                    [name]: value
                }
            }
        })
    }

    return (
        <>
            <UserForm />
        </>
    )
}

export default NewUserPage