import React, { useState } from 'react';
import { StyledTable, StyledTableHeader } from '../../components/reusable/StyledTable';
import data from '../../data/users.json';
import { StyledMenu, StyledMenuText } from '../../components/reusable/StyledMenu';
import UsersTablePage from './UsersTablePage';
const UsersPage = () => {
    const [usersList, setUsersList] = useState(data)
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
                    All Employees
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
            <StyledTable>
                <thead>
                    <tr>
                        <StyledTableHeader>Name</StyledTableHeader>
                        <StyledTableHeader>Job Desk</StyledTableHeader>
                        <StyledTableHeader>Schedule</StyledTableHeader>
                        <StyledTableHeader>Contact</StyledTableHeader>
                        <StyledTableHeader>Status</StyledTableHeader>
                        <StyledTableHeader></StyledTableHeader>
                    </tr>
                </thead>
                <tbody>
                    <UsersTablePage
                        data={usersList}
                        pageNumber={pageNumber}
                    />
                </tbody>
            </StyledTable>
        </>)
}

export default UsersPage