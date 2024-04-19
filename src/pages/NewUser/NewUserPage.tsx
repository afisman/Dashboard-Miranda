import UserForm from './UserForm';
import { UserInterface } from '../../interfaces/user/userInterface';
import { useAppDispatch } from '../../hooks/useStore';
import { fetchCreateUser } from '../../features/users/usersThunk';
import { toast } from 'react-toastify';

const NewUserPage = () => {
    const dispatch = useAppDispatch();

    const singleUser: UserInterface = {
        full_name: "",
        contact: "",
        email: "",
        photo: "",
        start_date: Date.now(),
        description: "",
        status: "Active",
        position: "",
        password: ""
    };
    const submitNewUser = async (formData: UserInterface) => {
        try {
            dispatch(fetchCreateUser(formData));
            toast('User created successfully!!');
        } catch (error) {
            toast('Error while creating user, please try again.');
            console.error(error);
        }
    }

    return (
        <>
            <UserForm singleUser={singleUser} type={"New"} submitUserForm={submitNewUser} />
        </>
    )
}

export default NewUserPage