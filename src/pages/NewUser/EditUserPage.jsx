import React, { useCallback, useEffect } from 'react';
import { getSingleUser } from '../../features/users/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleUser } from '../../features/users/usersThunk';
import { StyledSpinner } from '../../components/reusable/StyledSpinner';
import UserForm from './UserForm';
import { useParams } from 'react-router';



const EditUserPage = () => {
    const { id } = useParams();
    const singleUser = useSelector(getSingleUser);
    const dispatch = useDispatch();




    const initialFetch = useCallback(async () => {
        await dispatch(fetchSingleUser(id)).unwrap();
    }, [id, dispatch])

    useEffect(() => {
        initialFetch();
    }, [initialFetch])

    console.log(singleUser)

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