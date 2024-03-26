import React from 'react';
import { StyledTableCell, StyledTableRow, StyledTableCellText } from '../../components/reusable/StyledTable';
import { fetchUpdateContact } from '../../features/contact/contactThunk';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { ContactInterface } from '../../interfaces/contact/contactInterface';

interface ContactTableProps {
    data: ContactInterface[]
    setMessage: React.Dispatch<React.SetStateAction<string>>
    handleOpen: () => void
    dispatch: ThunkDispatch<RootState, any, any>
}

const ContactPageTable = ({ data, setMessage, handleOpen, dispatch }: ContactTableProps) => {

    const handleClick = (el: ContactInterface) => {
        setMessage(el.message);
        handleOpen()
    }

    const handleUpdateClick = (e: React.MouseEvent, el: ContactInterface, boolean: boolean) => {
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