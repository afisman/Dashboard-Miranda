import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { UserInterface } from '../../interfaces/user/userInterface';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { getSingleUser } from '../../features/users/usersSlice';
import { fetchSingleUser } from '../../features/users/usersThunk';
import { StyledSpinner } from '../../components/reusable/StyledSpinner';
import { StyledCardWrapper } from '../../components/reusable/StyledDataCard';
import UserImage from './UserImage';
import UserCard from '../../components/navbar/sidebar/UserCard';

const UserDetailPage = () => {
    const { id } = useParams();
    const [spinner, setSpinner] = useState<boolean>(true);

    const singleUser: UserInterface = useAppSelector(getSingleUser);
    const dispatch = useAppDispatch();

    const initialFetch = async () => {
        await dispatch(fetchSingleUser(id!)).unwrap();
        setSpinner(false);
    }

    useEffect(() => {
        initialFetch();
    }, []);

    if (spinner) {
        return <StyledSpinner />
    }


    return (
        <StyledCardWrapper>
            <UserCard />
            <UserImage image={singleUser.photo} />
        </StyledCardWrapper>
    )
}


export default UserDetailPage