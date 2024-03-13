import React, { useState } from 'react';
import { StyledTableCell, StyledTableRow, StyledTableCellText } from '../../components/reusable/StyledTable';
import { StyledButton } from '../../components/reusable/StyledButton';
import { useNavigate } from 'react-router-dom';
import { StyledDeleteIcon, StyledEditIcon } from '../../components/reusable/StyledIcons';

const BookingsTable = ({ data, pageNumber, setSpecialRequest, handleOpen, dispatch }) => {
    const navigate = useNavigate();


    const handleEditClick = (e, id) => {
        e.stopPropagation();
        navigate(`/bookings/editbooking/${id}`)
    }

    const handleDeleteClick = (e) => {
        e.stopPropagation();
    }

    const handleClick = (e, id) => {
        navigate(`/bookings/${id}`);
    }

    const handleNotesClick = (e, el) => {
        e.stopPropagation();
        setSpecialRequest(el.special_request)
        handleOpen();
    }

    return (
        <>

            {data?.map((el) => (
                <StyledTableRow key={el.id} onClick={(e) => handleClick(e, el.id)}>
                    <StyledTableCell $name='flexCell'>
                        <div>
                            <StyledTableCellText $letterstyle='title'>
                                {el.name}
                            </StyledTableCellText>
                            <StyledTableCellText $letterstyle='id'>
                                #{el.id}
                            </StyledTableCellText>
                        </div>
                    </StyledTableCell>
                    <StyledTableCell>
                        {el.order_date.slice(0, 10)}
                    </StyledTableCell>
                    <StyledTableCell>
                        <StyledTableCellText $letterstyle='title'>
                            {el.check_in.slice(0, 10)}
                        </StyledTableCellText>
                        <StyledTableCellText $letterstyle='subtitle'>
                            {el.hour_check_in}
                        </StyledTableCellText>
                    </StyledTableCell>
                    <StyledTableCell>
                        <StyledTableCellText $letterstyle='title'>
                            {el.check_out.slice(0, 10)}
                        </StyledTableCellText>
                        <StyledTableCellText $letterstyle='subtitle'>
                            {el.hour_check_out}
                        </StyledTableCellText>
                    </StyledTableCell>
                    <StyledTableCell>
                        <StyledButton $name="view_notes" onClick={(e) => handleNotesClick(e, el)}>
                            View notes
                        </StyledButton>
                    </StyledTableCell>
                    <StyledTableCell>
                        <StyledTableCellText $letterstyle="title">
                            {el.room.id}
                        </StyledTableCellText>
                    </StyledTableCell>
                    <StyledTableCell>
                        <StyledButton $name={`${el.status}`}>
                            {el.status}
                        </StyledButton>
                    </StyledTableCell>
                    <StyledTableCell>
                        <StyledTableCellText  >
                            <StyledEditIcon onClick={(e) => { handleEditClick(e, el.id) }}></StyledEditIcon>
                            <StyledDeleteIcon onClick={(e) => { handleDeleteClick(e) }}></StyledDeleteIcon>
                        </StyledTableCellText>
                    </StyledTableCell>
                </StyledTableRow>

            ))}
        </>
    )
}

export default BookingsTable