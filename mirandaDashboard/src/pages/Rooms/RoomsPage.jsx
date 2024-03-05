import React, { useState } from 'react';
import { StyledTable, StyledTableHeader, StyledTableRow } from '../../components/reusable/StyledTable';
import data from '../../data/rooms.json';
import RoomsPageTable from './RoomsPageTable';
import { StyledMenu, StyledMenuText } from '../../components/reusable/StyledMenu';

const RoomsPage = () => {
    const [roomsList, setRoomsList] = useState(data)
    const [pageNumber, setPageNumber] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <>
            <StyledMenu>
                <StyledMenuText>
                    All Rooms
                </StyledMenuText>
                <StyledMenuText>
                    Active Employee
                </StyledMenuText>
                <StyledMenuText>
                    Inactive Employee
                </StyledMenuText>
            </StyledMenu>
            <StyledTable>
                <thead>
                    <StyledTableRow>
                        <StyledTableHeader>Room Name</StyledTableHeader>
                        <StyledTableHeader>Bed Type</StyledTableHeader>
                        <StyledTableHeader>Room Floor</StyledTableHeader>
                        <StyledTableHeader>Facilities</StyledTableHeader>
                        <StyledTableHeader>Rate</StyledTableHeader>
                        <StyledTableHeader>Status</StyledTableHeader>
                        <StyledTableHeader></StyledTableHeader>
                    </StyledTableRow>
                </thead>
                <tbody>
                    <RoomsPageTable
                        data={roomsList}
                        pageNumber={pageNumber}
                    />
                </tbody>
            </StyledTable>
        </>
    )
}

export default RoomsPage