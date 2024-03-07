import React from 'react';
import { StyledTableCell, StyledTableRow, StyledTableCellText } from '../../components/reusable/StyledTable';

const ContactPageTable = ({ data }) => {
    return (
        <>
            {data.map((el) => (
                <StyledTableRow key={el.id}>
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
                        <StyledTableCellText $letterstyle='Active'>
                            Publish
                        </StyledTableCellText>
                        <StyledTableCellText $letterstyle='Inactive'>
                            Archive
                        </StyledTableCellText>
                    </StyledTableCell>
                </StyledTableRow>
            ))}
        </>
    )
}

export default ContactPageTable