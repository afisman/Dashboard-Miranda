import React, { useMemo, useState, useEffect, useCallback } from 'react';
import { StyledTable, StyledTableHeader, StyledTableRow } from '../../components/reusable/StyledTable';
import data from '../../data/bookings.json';
import BookingsTable from './BookingsTable';
import { StyledMenu, StyledMenuText, StyledSelect, StyledMenuWrapper, StyledMenuButtons } from '../../components/reusable/StyledMenu';
import { StyledButton } from '../../components/reusable/StyledButton';
import { useDispatch, useSelector } from 'react-redux';
import { getBookingsList, getBookingsStatus, getBookingsError, getSingleBooking } from '../../features/bookings/bookingsSlice';
import { fetchBookings } from '../../features/bookings/bookingsThunk';
import ModalComponent from '../../components/modal/Modal';
import { getRoomsList } from '../../features/rooms/roomsSlice';



const BookingsPage = () => {
    const [pageNumber, setPageNumber] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [selection, setSelection] = useState('all');
    const [order, setOrder] = useState('order_date');
    const [specialRequest, setSpecialRequest] = useState('');
    const [modalOpen, setModalOpen] = useState(false);




    const dispatch = useDispatch()
    const bookingsData = useSelector(getBookingsList);
    const bookingsStatus = useSelector(getBookingsStatus);
    const bookingsError = useSelector(getBookingsError);

    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);


    // const initialFetch = useCallback(async () => {
    //     await dispatch(getRoomsList()).unwrap();
    //     if (id) {
    //         await dispatch(getSingleBooking());
    //     }
    //     setSpinner(false)
    // }, [id, dispatch])

    // useEffect(() => {
    //     initialFetch();
    // }, [initialFetch])


    const bookingsList = useMemo(() => {
        let orderedBookings;
        if (selection !== 'all') {
            orderedBookings = [...bookingsData]?.filter((el) => (el.status === selection))
        } else {
            orderedBookings = bookingsData;
        }

        orderedBookings = [...orderedBookings]?.sort((a, b) => {
            switch (order) {
                case 'check_in':
                    return new Date(b.check_in) - new Date(a.check_in);
                    break;
                case 'check_out':
                    return new Date(b.check_out) - new Date(a.check_out);
                    break;
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
                    break;
                default:
                    return new Date(b.order_date) - new Date(a.order_date);

            }
        }
        )

        return orderedBookings
    }
        , [bookingsData, order, selection, currentPage])

    const totalPages = Math.ceil(bookingsList.length / 10);
    const firstBooking = (currentPage - 1) * 10;
    const lastBooking = firstBooking + 10;

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

    useEffect(() => {
        if (bookingsStatus === 'idle') {
            dispatch(fetchBookings())

        } else if (bookingsStatus === 'fulfilled') {

        }

    }, [dispatch, bookingsData, bookingsStatus])


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
                <StyledSelect name="order" id="order" onChange={(e) => handleOrderChange(e)}>
                    <option value='order_date'>Newest</option>
                    <option value='check_in'>Check in</option>
                    <option value='check_out'>Check out</option>
                    <option value='name'>Guest</option>
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
                        <StyledTableHeader>Action</StyledTableHeader>
                    </tr>
                </thead>
                <tbody>
                    <BookingsTable
                        data={displayedBookings}
                        pageNumber={pageNumber}
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