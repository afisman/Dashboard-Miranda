import { useEffect, useState } from 'react';
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

    const initialFetch = async () => {
        await dispatch(fetchSingleUser(id!)).unwrap();
        setSpinner(false)
    }

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