import React, { useCallback, useEffect, useState } from 'react';
import { getSingleUser } from '../../features/users/usersSlice.js';
import { fetchSingleUser } from '../../features/users/usersThunk.js';
import { StyledSpinner } from '../../components/reusable/StyledSpinner.js';
import UserForm from './UserForm.jsx';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore.js';

const EditUserPage = () => {
    const { id } = useParams();
    const singleUser = useAppSelector(getSingleUser);
    const dispatch = useAppDispatch();
    const [spinner, setSpinner] = useState<boolean>(true)

    const initialFetch = useCallback(async () => {
        await dispatch(fetchSingleUser(Number(id))).unwrap();
        setSpinner(false)
    }, [id, dispatch])

    useEffect(() => {
        initialFetch();
    }, [])

    if (spinner === true) {
        return <StyledSpinner />
    }

    return (
        <>
            <UserForm singleUser={singleUser} type={'Edit'} />
        </>
    )
}

export default EditUserPage