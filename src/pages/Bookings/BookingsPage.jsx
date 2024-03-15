import React, { useMemo, useState, useEffect } from 'react';
import { StyledTable, StyledTableHeader } from '../../components/reusable/StyledTable';
import BookingsTable from './BookingsTable';
import { StyledMenu, StyledMenuText, StyledSelect, StyledMenuWrapper, StyledMenuButtons } from '../../components/reusable/StyledMenu';
import { StyledButton } from '../../components/reusable/StyledButton';
import { useDispatch, useSelector } from 'react-redux';
import { getBookingsList } from '../../features/bookings/bookingsSlice';
import { fetchBookings } from '../../features/bookings/bookingsThunk';
import ModalComponent from '../../components/modal/Modal';
import { Link } from 'react-router-dom';




const BookingsPage = () => {
    const bookingsPerPage = 10;

    const [currentPage, setCurrentPage] = useState(1);
    const [selection, setSelection] = useState('all');
    const [order, setOrder] = useState('order_date');
    const [specialRequest, setSpecialRequest] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

    const dispatch = useDispatch()
    const bookingsData = useSelector(getBookingsList);

    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);

    const bookingsList = useMemo(() => {
        const orderedBookings = bookingsData.filter(booking => (selection === 'all' ? true : booking.status === selection))

        orderedBookings.sort((a, b) => {
            switch (order) {
                case 'check_in':
                    return new Date(a.check_in) - new Date(b.check_in);
                case 'check_out':
                    return new Date(a.check_out) - new Date(b.check_out);
                case 'name':
                    const nameA = a.name.toUpperCase();
                    const nameB = b.name.toUpperCase();
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                default:
                    return new Date(b.order_date) - new Date(a.order_date);
            }
        }
        )

        return orderedBookings
    }
        , [bookingsData, order, selection, currentPage])

    const totalPages = Math.ceil(bookingsList.length / bookingsPerPage);
    const firstBooking = (currentPage - 1) * bookingsPerPage;
    const lastBooking = firstBooking + bookingsPerPage;

    let displayedBookings = bookingsList?.slice(firstBooking, lastBooking);

    const handleMenuClick = (option) => {
        setSelection(option);
    }

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    }

    const handleOrderChange = (e) => {
        e.preventDefault();

        setOrder(e.target.value)

    }

    const initialFetch = async () => {
        try {
            await dispatch(fetchBookings());
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        initialFetch();
    }, [initialFetch]);


    return (
        <>
            <ModalComponent open={modalOpen} handleclose={handleClose} description={specialRequest}></ModalComponent>

            <StyledMenuWrapper>
                <StyledMenu>
                    <StyledMenuText
                        onClick={() => handleMenuClick('all')}
                        $selected={selection === 'all'}
                    >
                        All Guest
                    </StyledMenuText>
                    <StyledMenuText
                        onClick={() => handleMenuClick('Check in')}
                        $selected={selection === 'Check in'}
                    >
                        Check in
                    </StyledMenuText>
                    <StyledMenuText
                        onClick={() => handleMenuClick('Check out')}
                        $selected={selection === 'Check out'}
                    >
                        Check out
                    </StyledMenuText>
                    <StyledMenuText
                        onClick={() => handleMenuClick('In progress')}
                        $selected={selection === 'In progress'}
                    >
                        In progress
                    </StyledMenuText>
                </StyledMenu>
                <StyledMenuButtons>
                    <StyledButton as={Link} to='/bookings/newbooking' $name='new'>
                        + New Booking
                    </StyledButton>
                    <StyledSelect name="order" id="order" onChange={(e) => handleOrderChange(e)}>
                        <option value='order_date'>Newest</option>
                        <option value='check_in'>Check in</option>
                        <option value='check_out'>Check out</option>
                        <option value='name'>Guest</option>
                    </StyledSelect>
                </StyledMenuButtons>
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
                        <StyledTableHeader>Action</StyledTableHeader>
                    </tr>
                </thead>
                <tbody>
                    <BookingsTable
                        data={displayedBookings}
                        setSpecialRequest={setSpecialRequest}
                        handleOpen={handleOpen}
                        dispatch={dispatch}
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