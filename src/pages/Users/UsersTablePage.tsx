import React from 'react';
import { StyledTableCell, StyledTableRow, StyledTableCellText, StyledTableCellImg } from '../../components/reusable/StyledTable';
import { StyledDeleteIcon, StyledEditIcon } from '../../components/reusable/StyledIcons';
import { useNavigate } from 'react-router';
import { UserInterface } from '../../interfaces/user/userInterface';
import swal from 'sweetalert';
import { toast } from 'react-toastify';

interface UsersTableProps {
    data: UserInterface[]
    deleteUser: any
}

const UsersTablePage = ({ data, deleteUser }: UsersTableProps) => {
    const navigate = useNavigate();

    const handleEditClick = (e: React.MouseEvent, id: string) => {
        e.stopPropagation();
        navigate(`/users/edituser/${id}`);
    }

    const handleDeleteClick = (e: React.MouseEvent, id: string) => {
        e.stopPropagation();
        swal({
            title: "Are you sure you want to delete the user?",
            text: "Once deleted, you will not be able to recover this user!",
            icon: "warning",
            buttons: {
                cancel: true,
                confirm: true,
            },
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    deleteUser(id)
                    toast('User deleted successfully!!');
                } else {
                    toast('Your user is safe!');
                }
            });

    }

    return (
        <>
            {data.map((el) => (
                <StyledTableRow key={el._id}>
                    <StyledTableCell $name='flexCell'>
                        <StyledTableCellImg $imgtype='concierge'>
                            <img src={el.photo} alt="user" />
                        </StyledTableCellImg>
                        <div>
                            <StyledTableCellText $letterstyle='title'>
                                {el.full_name}
                            </StyledTableCellText>
                            <StyledTableCellText $letterstyle='id'>
                                #{el._id}
                            </StyledTableCellText>
                            <StyledTableCellText $letterstyle='subtitle'>
                                Joined on {new Date(el.start_date).toISOString().slice(0, 10)}
                            </StyledTableCellText>
                        </div>
                    </StyledTableCell>
                    <StyledTableCell $name='facilities'>
                        <StyledTableCellText $letterstyle='title'>
                            {el.description}
                        </StyledTableCellText>
                    </StyledTableCell>
                    <StyledTableCell>
                        <StyledTableCellText $letterstyle='title'>
                            {el.start_date}
                        </StyledTableCellText>
                    </StyledTableCell>
                    <StyledTableCell $name='facilities'>
                        <StyledTableCellText $letterstyle='title'>
                            {el.contact}
                        </StyledTableCellText>
                    </StyledTableCell>
                    <StyledTableCell $name='flexCell'>
                        <StyledTableCellText $letterstyle={`${el.status}`}>
                            {el.status}
                        </StyledTableCellText>
                    </StyledTableCell>
                    <StyledTableCell>
                        <StyledTableCellText style={{ display: 'flex' }} >
                            <StyledEditIcon onClick={(e) => { handleEditClick(e, el._id!) }}></StyledEditIcon>
                            <StyledDeleteIcon onClick={(e) => { handleDeleteClick(e, el._id!) }}></StyledDeleteIcon>
                        </StyledTableCellText>
                    </StyledTableCell>
                </StyledTableRow>
            ))}
        </>
    )
}

export default UsersTablePage