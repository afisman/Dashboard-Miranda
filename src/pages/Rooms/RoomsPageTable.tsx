import React from 'react';
import { StyledTableCell, StyledTableCellImg, StyledTableCellText, StyledTableRow } from '../../components/reusable/StyledTable';
import { StyledButton } from '../../components/reusable/StyledButton';
import { StyledDeleteIcon, StyledEditIcon } from '../../components/reusable/StyledIcons';
import { useNavigate } from 'react-router';
import { RoomInterface } from '../../interfaces/room/roomInterface';
import swal from 'sweetalert';
import { toast } from 'react-toastify';
import { StyledSpinner } from '../../components/reusable/StyledSpinner';


interface RoomsTableProps {
    data: RoomInterface[]
    deleteRoom: (id: string | undefined) => Promise<any>
}

const RoomsPageTable = ({ data, deleteRoom }: RoomsTableProps) => {
    const navigate = useNavigate();

    const handleEditClick = (e: React.MouseEvent, el: RoomInterface) => {
        e.stopPropagation();
        navigate(`/rooms/editroom/${el._id}`);
    }

    const handleClick = (e: React.MouseEvent, id: string) => {
        navigate(`/rooms/${id}`);
    }

    const handleDeleteClick = (e: React.MouseEvent, el: RoomInterface) => {
        e.stopPropagation();
        swal({
            title: "Are you sure you want to delete the room?",
            text: "Once deleted, you will not be able to recover this room!",
            icon: "warning",
            buttons: {
                cancel: true,
                confirm: true,
            },
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    deleteRoom(el._id)
                    toast('Room deleted successfully!!');
                } else {
                    toast('Your room is safe!');
                }
            });
    }

    if (!data) {
        return <StyledSpinner />
    }

    return (
        <>
            {data?.map((el) => (
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
                            <StyledEditIcon onClick={(e) => { handleEditClick(e, el) }}></StyledEditIcon>
                            <StyledDeleteIcon onClick={(e) => { handleDeleteClick(e, el) }}></StyledDeleteIcon>
                        </StyledTableCellText>
                    </StyledTableCell>
                </StyledTableRow>
            ))}
        </>
    )
}

export default RoomsPageTable