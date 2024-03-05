import React, { useState } from 'react';
import { StyledTable, StyledTableHeader, StyledTableRow } from '../../components/reusable/StyledTable';
import data from '../../data/rooms.json';
import RoomsPageTable from './RoomsPageTable';
import { StyledMenu, StyledMenuText } from '../../components/reusable/StyledMenu';

const RoomsPage = () => {
    const [roomsList, setRoomsList] = useState(data)

    const [selection, setSelection] = useState('all')

    const handleMenuClick = (option) => {
        console.log(option)
        setSelection(option);
    }

    return (
        <>
            <StyledMenu>
                <StyledMenuText
                    onClick={() => handleMenuClick('all')}
                    selected={selection === 'all'}
                >
                    All Rooms
                </StyledMenuText>
                <StyledMenuText
                    onClick={() => handleMenuClick('active')}
                    selected={selection === 'active'}
                >
                    Active Employee
                </StyledMenuText>
                <StyledMenuText
                    onClick={() => handleMenuClick('inactive')}
                    selected={selection === 'inactive'}
                >
                    Inactive Employee
                </StyledMenuText>
            </StyledMenu>
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