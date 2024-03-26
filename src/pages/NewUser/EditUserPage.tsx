import React, { useCallback, useEffect } from 'react';
import { getSingleUser } from '../../features/users/usersSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleUser } from '../../features/users/usersThunk.js';
import { StyledSpinner } from '../../components/reusable/StyledSpinner.js';
import UserForm from './UserForm.jsx';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore.js';



const EditUserPage = () => {
    const { id } = useParams();
    const singleUser = useAppSelector(getSingleUser);
    const dispatch = useAppDispatch();

    const initialFetch = useCallback(async () => {
        await dispatch(fetchSingleUser(Number(id))).unwrap();
    }, [id, dispatch])

    useEffect(() => {
        initialFetch();
    }, [initialFetch])

    return (
        <>
            {singleUser ?
                <UserForm singleUser={singleUser} type={'Edit'} />
                :
                <StyledSpinner />
            }
        </>
    )
}

export default EditUserPage