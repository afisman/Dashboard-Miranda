import React, { useState } from 'react';
import { StyledTable, StyledTableHeader } from '../../components/reusable/StyledTable';
import data from '../../data/bookings.json';
import { StyledContainer } from '../../components/layout/StyledLayout';
import BookingsTable from './BookingsTable';




const BookingsPage = () => {
    const [bookingsList, setBookingsList] = useState(data)
    const [pageNumber, setPageNumber] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);



    return (
        <>
            <StyledTable>
                <thead>
                    <tr>
                        <StyledTableHeader>Guest</StyledTableHeader>
                        <StyledTableHeader>Order Date</StyledTableHeader>
                        <StyledTableHeader>Check In</StyledTableHeader>
                        <StyledTableHeader>Check Out</StyledTableHeader>
                        <StyledTableHeader>Special Request</StyledTableHeader>
                        <StyledTableHeader>Room Type</StyledTableHeader>
                        <StyledTableHeader>Status</StyledTableHeader>
                        <StyledTableHeader></StyledTableHeader>
                    </tr>
                </thead>
                <tbody>
                    <BookingsTable
                        data={bookingsList}
                        pageNumber={pageNumber}
                    />
                </tbody>
            </StyledTable>
        </>
    )
}

export default BookingsPage