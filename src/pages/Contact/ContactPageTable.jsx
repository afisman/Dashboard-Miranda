import React from 'react';
import { StyledTableCell, StyledTableRow, StyledTableCellText } from '../../components/reusable/StyledTable';
import { fetchUpdateContact } from '../../features/contact/contactThunk';

const ContactPageTable = ({ data, setMessage, handleOpen, dispatch }) => {

    const handleClick = (el) => {
        setMessage(el.message);
        handleOpen()
    }

    const handleUpdateClick = (e, el, boolean) => {
        e.stopPropagation();

        dispatch(fetchUpdateContact({ ...el, read: boolean }))
    }

    return (
        <>
            {data.map((el) => (
                <StyledTableRow key={el.id} onClick={() => handleClick(el)} >
                    <StyledTableCell>
                        <StyledTableCellText>
                            #{el.id}
                        </StyledTableCellText>
                    </StyledTableCell>
                    <StyledTableCell>
                        <StyledTableCellText>
                            {el.date}
                        </StyledTableCellText>
                    </StyledTableCell>
                    <StyledTableCell>
                        <StyledTableCellText>
                            {el.full_name}
                        </StyledTableCellText>
                    </StyledTableCell>
                    <StyledTableCell>
                        <StyledTableCellText>
                            {el.message}
                        </StyledTableCellText>
                    </StyledTableCell>
                    <StyledTableCell $name='flexCell'>
                        <StyledTableCellText $letterstyle='Active' onClick={(e) => handleUpdateClick(e, el, true)}>
                            Publish
                        </StyledTableCellText>
                        <StyledTableCellText $letterstyle='Inactive' onClick={(e) => handleUpdateClick(e, el, false)}>
                            Archive
                        </StyledTableCellText>
                    </StyledTableCell>
                </StyledTableRow>
            ))}
        </>
    )
}

export default ContactPageTable