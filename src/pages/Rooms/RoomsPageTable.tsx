import React from 'react';
import { StyledTableCell, StyledTableCellImg, StyledTableCellText, StyledTableRow } from '../../components/reusable/StyledTable';
import { StyledButton } from '../../components/reusable/StyledButton';
import { StyledDeleteIcon, StyledEditIcon } from '../../components/reusable/StyledIcons';
import { fetchDeleteRoom } from '../../features/rooms/roomsThunk';
import { useNavigate } from 'react-router';
import { RoomInterface } from '../../interfaces/room/roomInterface';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface RoomsTableProps {
    data: RoomInterface[]
    dispatch: ThunkDispatch<RootState, any, any>
}

const RoomsPageTable = ({ data, dispatch }: RoomsTableProps) => {
    const navigate = useNavigate();

    const handleEditClick = (e: React.MouseEvent, id: string) => {
        e.stopPropagation();
        navigate(`/rooms/editroom/${id}`);
    }

    const handleClick = (e: React.MouseEvent, id: string) => {
        console.log(id)
        navigate(`/rooms/${id}`);
    }

    const handleDeleteClick = (e: React.MouseEvent, id: string) => {
        e.stopPropagation();
        dispatch(fetchDeleteRoom(id));
    }

    return (
        <>
            {data.map((el) => (
                <StyledTableRow key={el._id} onClick={(e) => handleClick(e, el._id!)}>
                    <StyledTableCell $name='flexCell'>
                        <StyledTableCellImg $imgtype='room'>
                            <img src={el.photos[0]} alt='room' />
                        </StyledTableCellImg>
                        <div>
                            <StyledTableCellText $letterstyle='id'>
                                #{el._id}
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
                            {el.amenities.length > 6 ? el.amenities.slice(0, 6).join(', ') + '...' : el.amenities.join(', ')}
                        </StyledTableCellText>
                    </StyledTableCell>
                    <StyledTableCell $name='flexCell'>
                        <StyledTableCellText $letterstyle='semiBold'>
                            ${((el.rate * (1 - el.discount / 100)) / 100).toFixed(2)}
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
                            <StyledEditIcon onClick={(e) => { handleEditClick(e, el._id!) }}></StyledEditIcon>
                            <StyledDeleteIcon onClick={(e) => { handleDeleteClick(e, el._id!) }}></StyledDeleteIcon>
                        </StyledTableCellText>
                    </StyledTableCell>
                </StyledTableRow>
            ))}
        </>
    )
}

export default RoomsPageTable