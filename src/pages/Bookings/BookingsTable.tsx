import React from 'react';
import { StyledTableCell, StyledTableRow, StyledTableCellText } from '../../components/reusable/StyledTable';
import { StyledButton } from '../../components/reusable/StyledButton';
import { useNavigate } from 'react-router-dom';
import { StyledDeleteIcon, StyledEditIcon } from '../../components/reusable/StyledIcons';
import { BookingInterface } from '../../interfaces/booking/bookingInterface';
import swal from 'sweetalert';
import { toast } from 'react-toastify';
import { StyledSpinner } from '../../components/reusable/StyledSpinner';


interface BookingsTableProps {
    data: BookingInterface[];
    setSpecialRequest: React.Dispatch<React.SetStateAction<string>>;
    handleOpen: () => void;
    deleteBooking: (id: string) => Promise<any>;

}

const BookingsTable = ({ data, setSpecialRequest, handleOpen, deleteBooking }: BookingsTableProps) => {
    const navigate = useNavigate();


    const handleEditClick = (e: React.MouseEvent, id: string) => {
        e.stopPropagation();
        navigate(`/bookings/editbooking/${id}`)
    }

    const handleDeleteClick = (e: React.MouseEvent, id: string) => {
        e.stopPropagation();
        swal({
            title: "Are you sure you want to delete the booking?",
            text: "Once deleted, you will not be able to recover this booking!",
            icon: "warning",
            buttons: {
                cancel: true,
                confirm: true,
            },
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    deleteBooking(id)
                    toast('Booking deleted successfully!!');
                } else {
                    toast("Your booking is safe!");
                }
            });
    }

    const handleClick = (e: React.MouseEvent, id: string) => {
        navigate(`/bookings/${id}`);
    }

    const handleNotesClick = (e: React.MouseEvent, el: BookingInterface) => {
        e.stopPropagation();
        setSpecialRequest(el.special_request || '')
        handleOpen();
    }
    if (data.length === 0) {
        return <StyledSpinner />
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
                        {new Date(el.check_out).toISOString().slice(0, 10)}
                    </StyledTableCell>
                    <StyledTableCell>
                        <StyledTableCellText $letterstyle='title'>
                            {new Date(el.check_in).toISOString().slice(0, 10)}
                        </StyledTableCellText>
                        <StyledTableCellText $letterstyle='subtitle'>
                            {el.hour_check_in}
                        </StyledTableCellText>
                    </StyledTableCell>
                    <StyledTableCell>
                        <StyledTableCellText $letterstyle='title'>
                            {new Date(el.check_out).toISOString().slice(0, 10)}
                        </StyledTableCellText>
                        <StyledTableCellText $letterstyle='subtitle'>
                            {el.hour_check_out}
                        </StyledTableCellText>
                    </StyledTableCell>
                    <StyledTableCell>
                        <StyledButton $name='view_notes' onClick={(e) => handleNotesClick(e, el)}>
                            View notes
                        </StyledButton>
                    </StyledTableCell>
                    <StyledTableCell>
                        <StyledTableCellText $letterstyle='title'>
                            {el.room?.room_type}
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