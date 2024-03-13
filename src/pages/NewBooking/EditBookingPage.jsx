import React from 'react'
import BookingForm from './BookingForm'
import { useParams } from 'react-router-dom'

const EditBookingPage = () => {
    const { id } = useParams();
    return (
        <BookingForm id={id} />
    )
}

export default EditBookingPage