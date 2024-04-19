import { useEffect, useState } from 'react';
import { getSingleUser } from '../../features/users/usersSlice.js';
import { fetchSingleUser, fetchUpdateUser } from '../../features/users/usersThunk.js';
import { StyledSpinner } from '../../components/reusable/StyledSpinner.js';
import UserForm from './UserForm.jsx';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore.js';
import { UserInterface } from '../../interfaces/user/userInterface.js';
import { toast } from 'react-toastify';

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
    }, []);

    const submitEditUser = async (formData: UserInterface) => {
        try {
            dispatch(fetchUpdateUser(formData));
            toast('User created successfully!!');
        } catch (error) {
            toast('Error while editing user, please try again.');
            console.error(error);
        }
    }

    if (spinner === true) {
        return <StyledSpinner />
    }

    return (
        <>
            <UserForm singleUser={singleUser} type={'Edit'} submitUserForm={submitEditUser} />
        </>
    )
}

export default EditUserPage