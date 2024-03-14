import React from 'react';
import { StyledTableCell, StyledTableCellImg, StyledTableCellText, StyledTableRow } from '../../components/reusable/StyledTable';
import { StyledButton } from '../../components/reusable/StyledButton';
import { StyledDeleteIcon, StyledEditIcon } from '../../components/reusable/StyledIcons';
import { fetchDeleteRoom } from '../../features/rooms/roomsThunk';
import { useNavigate } from 'react-router';



const RoomsPageTable = ({ data, dispatch }) => {
    const navigate = useNavigate();

    const handleEditClick = (e, id) => {
        e.stopPropagation();
        navigate(`/rooms/editroom/${id}`)
    }

    const handleDeleteClick = (e, id) => {
        e.stopPropagation();
        console.log(id)
        dispatch(fetchDeleteRoom(id))
    }

    return (
        <>
            {data.map((el) => (
                <StyledTableRow key={el.id}>
                    <StyledTableCell $name='flexCell'>
                        <StyledTableCellImg $imgtype='room'>
                            <img src={el.photos[0]} alt="room" />
                        </StyledTableCellImg>
                        <div>
                            <StyledTableCellText $letterstyle='id'>
                                #{el.id}
                            </StyledTableCellText>
                            <StyledTableCellText $letterstyle='title'>
                                {el.room_number}
                            </StyledTableCellText>
                        </div>
                    </StyledTableCell>
                    <StyledTableCell>
                        <StyledTableCellText $letterstyle='title'>
                            {el.room_type}
                        </StyledTableCellText>
                    </StyledTableCell>
                    <StyledTableCell>
                        <StyledTableCellText $letterstyle='title'>
                            {el.room_floor}
                        </StyledTableCellText>
                    </StyledTableCell>
                    <StyledTableCell $name='facilities'>
                        <StyledTableCellText $letterstyle='title'>
                            {el.amenities.join(', ')}
                        </StyledTableCellText>
                    </StyledTableCell>
                    <StyledTableCell $name='flexCell'>
                        <StyledTableCellText $letterstyle='semiBold'>
                            ${el.rate}
                        </StyledTableCellText>
                        <StyledTableCellText $letterstyle='id'>
                            /night
                        </StyledTableCellText>
                    </StyledTableCell>
                    <StyledTableCell>
                        <StyledButton $name={`${el.status}`}>
                            {el.status}
                        </StyledButton>
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

export default RoomsPageTable