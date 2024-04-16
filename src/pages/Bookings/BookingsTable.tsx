import React from 'react';
import { StyledTableCell, StyledTableRow, StyledTableCellText } from '../../components/reusable/StyledTable';
import { StyledButton } from '../../components/reusable/StyledButton';
import { useNavigate } from 'react-router-dom';
import { StyledDeleteIcon, StyledEditIcon } from '../../components/reusable/StyledIcons';
import { fetchDeleteBooking } from '../../features/bookings/bookingsThunk';
import { BookingInterface } from '../../interfaces/booking/bookingInterface';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';


interface BookingsTableProps {
    data: BookingInterface[]
    setSpecialRequest: React.Dispatch<React.SetStateAction<string>>
    handleOpen: () => void
    dispatch: ThunkDispatch<RootState, any, any>

}

const BookingsTable = ({ data, setSpecialRequest, handleOpen, dispatch }: BookingsTableProps) => {
    const navigate = useNavigate();


    const handleEditClick = (e: React.MouseEvent, id: string) => {
        e.stopPropagation();
        navigate(`/bookings/editbooking/${id}`)
    }

    const handleDeleteClick = (e: React.MouseEvent, id: string) => {
        e.stopPropagation();
        dispatch(fetchDeleteBooking(id))
    }

    const handleClick = (e: React.MouseEvent, id: string) => {
        navigate(`/bookings/${id}`);
    }

    const handleNotesClick = (e: React.MouseEvent, el: BookingInterface) => {
        e.stopPropagation();
        setSpecialRequest(el.special_request || '')
        handleOpen();
    }

    return (
        <>

            {data?.map((el) => (
                <StyledTableRow key={el._id} onClick={(e) => handleClick(e, el._id!)}>
                    <StyledTableCell $name='flexCell'>
                        <div>
                            <StyledTableCellText $letterstyle='title'>
                                {el.name}
                            </StyledTableCellText>
                            <StyledTableCellText $letterstyle='id'>
                                #{el._id}
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
                            {el.room._id}
                        </StyledTableCellText>
                    </StyledTableCell>
                    <StyledTableCell>
                        <StyledButton $name={`${el.status}`}>
                            {el.status}
                        </StyledButton>
                    </StyledTableCell>
                    <StyledTableCell>
                        <StyledTableCellText  >
                            <StyledEditIcon onClick={(e) => { handleEditClick(e, el._id!) }}></StyledEditIcon>
                            <StyledDeleteIcon onClick={(e) => { handleDeleteClick(e, el._id!) }}></StyledDeleteIcon>
                        </StyledTableCellText>
                    </StyledTableCell>
                </StyledTableRow>

            ))}
        </>
    )
}

export default BookingsTable