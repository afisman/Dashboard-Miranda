import React, { useState } from 'react';
import { StyledTable, StyledTableHeader } from '../../components/reusable/StyledTable';
import data from '../../data/users.json';
import { StyledMenu, StyledMenuText, StyledMenuButtons, StyledSelect, StyledMenuWrapper } from '../../components/reusable/StyledMenu';
import UsersTablePage from './UsersTablePage';
import { StyledButton } from '../../components/reusable/StyledButton';
import { Link } from 'react-router-dom';
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
            <StyledMenuWrapper>
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
                <StyledMenuButtons>
                    <StyledButton as={Link} to='/users/newuser' $name='new'>
                        + New Employee
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