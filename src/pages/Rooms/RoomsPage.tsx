import React, { useMemo, useState, useEffect } from 'react';
import { StyledTable, StyledTableHeader } from '../../components/reusable/StyledTable';
import RoomsPageTable from './RoomsPageTable';
import { StyledMenu, StyledMenuText, StyledMenuWrapper, StyledSelect, StyledMenuButtons } from '../../components/reusable/StyledMenu';
import { StyledButton } from '../../components/reusable/StyledButton';
import { Link } from 'react-router-dom';
import { getRoomStatus, getRoomsList } from '../../features/rooms/roomsSlice';
import { fetchDeleteRoom, fetchRooms } from '../../features/rooms/roomsThunk';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { RoomInterface } from '../../interfaces/room/roomInterface';

const RoomsPage = () => {
    const roomsPerPage = 10;
    const [order, setOrder] = useState<string>('newest');
    const [selection, setSelection] = useState<string>('all');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const roomStatus: string = useAppSelector(getRoomStatus)

    const dispatch = useAppDispatch();
    const roomsData = useAppSelector(getRoomsList);

    const roomsList = useMemo(() => {
        let orderedRooms = roomsData.filter((room: RoomInterface) => (selection === 'all' ? true : room.status === selection))

        orderedRooms.sort((a, b) => {
            switch (order) {
                case 'expensive':
                    return b.rate - a.rate;
                default:
                    return a.rate - b.rate;
            }
        })
        if (roomStatus === 'idle') {
            orderedRooms = roomsData.filter(room => (selection === 'all' ? true : room.status === selection))
        }
        return orderedRooms
    }, [roomsData, order, selection, currentPage, roomStatus])

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
    }, []);

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    }

    const handleMenuClick = (option: string) => {
        setSelection(option);
    }

    const deleteRoom = async (id: string | undefined): Promise<any> => {
        if (id) {
            await dispatch(fetchDeleteRoom(id))
        }
    }

    const handleOrderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        event.preventDefault();

        setOrder(event.target.value)
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
                    <StyledSelect name="order" id="order" onChange={(event: React.ChangeEvent<HTMLSelectElement>) => handleOrderChange(event)}>
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
                        deleteRoom={deleteRoom}
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