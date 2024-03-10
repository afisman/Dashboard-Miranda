import React, { useMemo, useState } from 'react';
import { StyledTable, StyledTableHeader, StyledTableRow } from '../../components/reusable/StyledTable';
import data from '../../data/bookings.json';
import BookingsTable from './BookingsTable';
import { StyledMenu, StyledMenuText, StyledSelect, StyledMenuWrapper, StyledMenuButtons } from '../../components/reusable/StyledMenu';
import { StyledButton } from '../../components/reusable/StyledButton';


const BookingsPage = () => {
    const [bookingsList, setBookingsList] = useState(data)
    const [pageNumber, setPageNumber] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [selection, setSelection] = useState('all');
    const [order, setOrder] = useState('newest');



    const totalPages = Math.ceil(data.length / 10);
    const firstBooking = (currentPage - 1) * 10;
    const lastBooking = firstBooking + 10;
    const displayedBookings = bookingsList.slice(firstBooking, lastBooking)

    const processData = (data) => {

    }
    // const [bookingsList, setBookingsList] = useMemo(() => processData(data, order, selection, currentPage), [data, order, selection, currentPage])



    const handleMenuClick = (option) => {
        setSelection(option);
    }

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage)
    }



    return (
        <>
            <StyledMenuWrapper>
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
                <StyledSelect name="order" id="order">
                    <option value='newest'>Newest</option>
                    <option value='checkin'>Check in</option>
                    <option value='checkout'>Check out</option>
                    <option value='guest'>Guest</option>
                </StyledSelect>
            </StyledMenuWrapper>
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
                        data={displayedBookings}
                        pageNumber={pageNumber}
                    />
                </tbody>
            </StyledTable>
            <StyledMenuButtons $type='pagination'>
                <StyledButton $name='pagination' onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </StyledButton>
                <StyledButton $name='pagination' onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </StyledButton>
            </StyledMenuButtons>
        </>
    )
}

export default BookingsPage