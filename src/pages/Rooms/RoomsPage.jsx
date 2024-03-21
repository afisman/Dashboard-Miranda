import React, { useMemo, useState, useEffect } from 'react';
import { StyledTable, StyledTableHeader } from '../../components/reusable/StyledTable';
import RoomsPageTable from './RoomsPageTable';
import { StyledMenu, StyledMenuText, StyledMenuWrapper, StyledSelect, StyledMenuButtons } from '../../components/reusable/StyledMenu';
import { StyledButton } from '../../components/reusable/StyledButton';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRoomsList } from '../../features/rooms/roomsSlice';
import { fetchRooms } from '../../features/rooms/roomsThunk';


const RoomsPage = () => {
    const roomsPerPage = 10;
    const [order, setOrder] = useState('newest');
    const [selection, setSelection] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);

    const dispatch = useDispatch();
    const roomsData = useSelector(getRoomsList);

    const roomsList = useMemo(() => {
        const orderedRooms = roomsData.filter(room => (selection === 'all' ? true : room.status === selection))

        orderedRooms.sort((a, b) => {
            switch (order) {
                case 'expensive':
                    return b.rate - a.rate;
                default:
                    return a.rate - b.rate;
            }
        })

        return orderedRooms
    }, [roomsData, order, selection, currentPage])

    const totalPages = Math.ceil(roomsList.length / roomsPerPage);
    const firstRoom = (currentPage - 1) * roomsPerPage;
    const lastRoom = firstRoom + roomsPerPage;

    let displayedRooms = roomsList?.slice(firstRoom, lastRoom);



    const initialFetch = async () => {
        try {
            await dispatch(fetchRooms());
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        initialFetch();
    }, [initialFetch]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    }

    const handleMenuClick = (option) => {
        setSelection(option);
    }

    const handleOrderChange = (e) => {
        e.preventDefault();

        setOrder(e.target.value)

    }

    return (
        <>
            <StyledMenuWrapper>
                <StyledMenu>
                    <StyledMenuText
                        onClick={() => handleMenuClick('all')}
                        $selected={selection === 'all'}
                    >
                        All Rooms
                    </StyledMenuText>
                    <StyledMenuText
                        onClick={() => handleMenuClick('Available')}
                        $selected={selection === 'Available'}
                    >
                        Available
                    </StyledMenuText>
                    <StyledMenuText
                        onClick={() => handleMenuClick('Booked')}
                        $selected={selection === 'Booked'}
                    >
                        Booked
                    </StyledMenuText>
                </StyledMenu>
                <StyledMenuButtons>
                    <StyledButton as={Link} to='/rooms/newroom' $name='new' id='new_room_button'>
                        + New Room
                    </StyledButton>
                    <StyledSelect name="order" id="order" onChange={(e) => handleOrderChange(e)}>
                        <option value='cheapest'>Cheapest</option>
                        <option value='expensive'>Costly</option>
                    </StyledSelect>
                </StyledMenuButtons>
            </StyledMenuWrapper>
            <StyledTable>
                <thead>
                    <tr>
                        <StyledTableHeader>Room Name</StyledTableHeader>
                        <StyledTableHeader>Bed Type</StyledTableHeader>
                        <StyledTableHeader>Room Floor</StyledTableHeader>
                        <StyledTableHeader>Facilities</StyledTableHeader>
                        <StyledTableHeader>Rate</StyledTableHeader>
                        <StyledTableHeader>Status</StyledTableHeader>
                        <StyledTableHeader>Action</StyledTableHeader>
                    </tr>
                </thead>
                <tbody>
                    <RoomsPageTable
                        data={displayedRooms}
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

export default RoomsPage