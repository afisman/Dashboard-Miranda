import React, { useState } from 'react';
import { StyledTable, StyledTableHeader, StyledTableRow } from '../../components/reusable/StyledTable';
import data from '../../data/bookings.json';
import BookingsTable from './BookingsTable';
import { StyledMenu, StyledMenuText } from '../../components/reusable/StyledMenu';


const BookingsPage = () => {
    const [bookingsList, setBookingsList] = useState(data)
    const [pageNumber, setPageNumber] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [selection, setSelection] = useState('all');

    const handleMenuClick = (option) => {
        setSelection(option);
    }



    return (
        <>
            <StyledMenu>
                <StyledMenuText
                    onClick={() => handleMenuClick('all')}
                    $selected={selection === 'all'}
                >
                    All Guest
                </StyledMenuText>
                <StyledMenuText
                    onClick={() => handleMenuClick('pending')}
                    $selected={selection === 'pending'}
                >
                    Pending
                </StyledMenuText>
                <StyledMenuText
                    onClick={() => handleMenuClick('booked')}
                    $selected={selection === 'booked'}
                >
                    Booked
                </StyledMenuText>
                <StyledMenuText
                    onClick={() => handleMenuClick('canceled')}
                    $selected={selection === 'canceled'}
                >
                    Canceled
                </StyledMenuText>
                <StyledMenuText
                    onClick={() => handleMenuClick('refund')}
                    $selected={selection === 'refund'}
                >
                    Refund
                </StyledMenuText>
            </StyledMenu>
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