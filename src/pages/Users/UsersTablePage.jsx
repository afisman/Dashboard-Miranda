import React from 'react';
import { StyledTableCell, StyledTableRow, StyledTableCellText, StyledTableCellImg } from '../../components/reusable/StyledTable';
import { StyledButton } from '../../components/reusable/StyledButton';
import { StyledDeleteIcon, StyledEditIcon } from '../../components/reusable/StyledIcons';
import { useNavigate } from 'react-router';
import { fetchDeleteUser } from '../../features/users/usersThunk';


const UsersTablePage = ({ data, dispatch }) => {
    const navigate = useNavigate();

    const handleEditClick = (e, id) => {
        e.stopPropagation();
        navigate(`/users/edituser/${id}`);
    }

    const handleDeleteClick = (e, id) => {
        e.stopPropagation();
        dispatch(fetchDeleteUser(id));
    }

    return (
        <>
            {data.map((el) => (
                <StyledTableRow key={el.id}>
                    <StyledTableCell $name='flexCell'>
                        <StyledTableCellImg $imgtype='concierge'>
                            <img src={el.photo} alt="user" />
                        </StyledTableCellImg>
                        <div>
                            <StyledTableCellText $letterstyle='title'>
                                {el.full_name}
                            </StyledTableCellText>
                            <StyledTableCellText $letterstyle='id'>
                                #{el.id}
                            </StyledTableCellText>
                            <StyledTableCellText $letterstyle='subtitle'>
                                Joined on {el.start_date}
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
                            {el.room_floor}
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
                            <StyledEditIcon onClick={(e) => { handleEditClick(e, el.id) }}></StyledEditIcon>
                            <StyledDeleteIcon onClick={(e) => { handleDeleteClick(e, el.id) }}></StyledDeleteIcon>
                        </StyledTableCellText>
                    </StyledTableCell>
                </StyledTableRow>
            ))}
        </>
    )
}

export default UsersTablePage