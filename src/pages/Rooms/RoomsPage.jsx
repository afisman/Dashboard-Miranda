import React, { useMemo, useState, useEffect } from 'react';
import { StyledTable, StyledTableHeader } from '../../components/reusable/StyledTable';
import data from '../../data/rooms.json';
import RoomsPageTable from './RoomsPageTable';
import { StyledMenu, StyledMenuText, StyledMenuWrapper, StyledSelect, StyledMenuButtons } from '../../components/reusable/StyledMenu';
import { StyledButton } from '../../components/reusable/StyledButton';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRoomStatus, getRoomsList } from '../../features/rooms/roomsSlice';
import { fetchRooms } from '../../features/rooms/roomsThunk';


const RoomsPage = () => {
    // const [roomsList, setRoomsList] = useState(data);
    const [order, setOrder] = useState('newest');
    const [selection, setSelection] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);

    const dispatch = useDispatch();
    const roomsData = useSelector(getRoomsList);
    const roomStatus = useSelector(getRoomStatus);

    const roomsList = useMemo(() => {
        let orderedRooms;
        if (selection !== 'all') {
            orderedRooms = [...roomsData].filter((el) => (el.status === selection))
        } else {
            orderedRooms = roomsData;
        }

        orderedRooms = [...orderedRooms].sort((a, b) => {
            switch (order) {
                case 'cheapest':
                    return a.rate - b.rate;
                case 'expensive':
                    return b.rate - a.rate;
                case 'status':
                    return a.status - b.status;
            }
        })

        return orderedRooms
    }, [roomsData, order, selection, currentPage])

    useEffect(() => {
        dispatch(fetchRooms())
    }, [dispatch, roomsData, roomStatus])

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
                        onClick={() => handleMenuClick('active')}
                        $selected={selection === 'Available'}
                    >
                        Available
                    </StyledMenuText>
                    <StyledMenuText
                        onClick={() => handleMenuClick('inactive')}
                        $selected={selection === 'Booked'}
                    >
                        Booked
                    </StyledMenuText>
                </StyledMenu>
                <StyledMenuButtons>
                    <StyledButton as={Link} to='/rooms/newroom' $name='new'>
                        + New Room
                    </StyledButton>
                    <StyledSelect name="order" id="order">
                        <option value='status'>Status</option>
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
                        data={roomsList}
                        dispatch={dispatch}
                    />
                </tbody>
            </StyledTable>
        </>
    )
}

export default RoomsPage