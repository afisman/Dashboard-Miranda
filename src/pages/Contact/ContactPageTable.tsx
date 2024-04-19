import React from 'react';
import { StyledTableCell, StyledTableRow, StyledTableCellText } from '../../components/reusable/StyledTable';
import { ContactInterface } from '../../interfaces/contact/contactInterface';

interface ContactTableProps {
    data: ContactInterface[]
    setMessage: React.Dispatch<React.SetStateAction<string>>
    handleOpen: () => void
    updateContact: (contact: ContactInterface, status: boolean) => Promise<any>;
}

const ContactPageTable = ({ data, setMessage, handleOpen, updateContact }: ContactTableProps) => {

    const handleClick = (el: ContactInterface) => {
        setMessage(el.message);
        handleOpen()
    }

    const handleUpdateClick = (e: React.MouseEvent, el: ContactInterface, status: boolean) => {
        e.stopPropagation();

        updateContact(el, status)
    }

    return (
        <>
            {data.map((el) => (
                <StyledTableRow key={el._id} onClick={() => handleClick(el)} >
                    <StyledTableCell>
                        <StyledTableCellText>
                            {new Date(el.date).toISOString().slice(0, 10)}
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