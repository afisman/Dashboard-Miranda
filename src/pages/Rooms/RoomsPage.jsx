import React, { useState } from 'react';
import { StyledTable, StyledTableHeader } from '../../components/reusable/StyledTable';
import data from '../../data/rooms.json';
import RoomsPageTable from './RoomsPageTable';
import { StyledMenu, StyledMenuText, StyledMenuWrapper, StyledSelect, StyledMenuButtons } from '../../components/reusable/StyledMenu';
import { StyledButton } from '../../components/reusable/StyledButton';
import { Link } from 'react-router-dom';


const RoomsPage = () => {
    const [roomsList, setRoomsList] = useState(data)
    const [order, setOrder] = useState('newest');
    const [selection, setSelection] = useState('all')

    const handleMenuClick = (option) => {
        setSelection(option);
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
                        $selected={selection === 'active'}
                    >
                        Active Employee
                    </StyledMenuText>
                    <StyledMenuText
                        onClick={() => handleMenuClick('inactive')}
                        $selected={selection === 'inactive'}
                    >
                        Inactive Employee
                    </StyledMenuText>
                </StyledMenu>
                <StyledMenuButtons>
                    <StyledButton as={Link} to='/rooms/newroom' $name='new'>
                        + New Room
                    </StyledButton>
                    <StyledSelect name="order" id="order">
                        <option value='newest'>Newest</option>
                        <option value='checkin'>Check in</option>
                        <option value='checkout'>Check out</option>
                        <option value='guest'>Guest</option>
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
                        <StyledTableHeader></StyledTableHeader>
                    </tr>
                </thead>
                <tbody>
                    <RoomsPageTable
                        data={roomsList}
                    />
                </tbody>
            </StyledTable>
        </>
    )
}

export default RoomsPage