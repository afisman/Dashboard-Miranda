import React, { useState, useMemo, useEffect } from 'react';
import { StyledTable, StyledTableHeader } from '../../components/reusable/StyledTable';
import { StyledMenu, StyledMenuText, StyledMenuButtons, StyledSelect, StyledMenuWrapper } from '../../components/reusable/StyledMenu';
import UsersTablePage from './UsersTablePage';
import { StyledButton } from '../../components/reusable/StyledButton';
import { Link } from 'react-router-dom';
import { getUsersList } from '../../features/users/usersSlice';
import { fetchUsers } from '../../features/users/usersThunk';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';


const UsersPage = () => {
    const usersPerPage = 10;

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [selection, setSelection] = useState<string>('all');
    const [order, setOrder] = useState<string>('newest');
    const usersData = useAppSelector(getUsersList);

    const dispatch = useAppDispatch();

    const usersList = useMemo(() => {
        const orderedUsers = usersData.filter(user => (selection === 'all' ? true : user.status === selection))

        orderedUsers.sort((a, b) => {
            if (order === 'name') {
                const statusA = a.full_name.toUpperCase();
                const statusB = b.full_name.toUpperCase();
                if (statusA < statusB) {
                    return -1;
                }
                if (statusA > statusB) {
                    return 1;
                }
                return 0;
            } else {
                return new Date(a.start_date).getTime() - new Date(b.start_date).getTime();
            }
        })

        return orderedUsers
    }, [usersData, order, selection, currentPage])

    const totalPages = Math.ceil(usersList.length / usersPerPage);
    const firstuser = (currentPage - 1) * usersPerPage;
    const lastUser = firstuser + usersPerPage;

    let displayedUsers = usersList?.slice(firstuser, lastUser);

    const initialFetch = async () => {
        try {
            await dispatch(fetchUsers());
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        initialFetch();
    }, []);

    const handleOrderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        event.preventDefault();

        setOrder(event.target.value)
    }

    const handleMenuClick = (option: string) => {
        setSelection(option);
    }

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
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
                        onClick={() => handleMenuClick('Active')}
                        $selected={selection === 'Active'}
                    >
                        Active Employee
                    </StyledMenuText>
                    <StyledMenuText
                        onClick={() => handleMenuClick('Inactive')}
                        $selected={selection === 'Inactive'}
                    >
                        Inactive Employee
                    </StyledMenuText>
                </StyledMenu>
                <StyledMenuButtons>
                    <StyledButton as={Link} to='/users/newuser' $name='new' id='new_user_button' >
                        + New Employee
                    </StyledButton>
                    <StyledSelect name="order" id="order" onChange={(event: React.ChangeEvent<HTMLSelectElement>) => handleOrderChange(event)} >
                        <option value='newest'>Newest</option>
                        <option value='name'>Name</option>
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
                        <StyledTableHeader>Actions</StyledTableHeader>
                    </tr>
                </thead>
                <tbody>
                    <UsersTablePage
                        data={displayedUsers}
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
        </>)
}

export default UsersPage