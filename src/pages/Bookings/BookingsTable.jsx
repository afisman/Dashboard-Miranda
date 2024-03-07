import React from 'react';
import { StyledTableCell, StyledTableRow, StyledTableCellText } from '../../components/reusable/StyledTable';
import { StyledButton } from '../../components/reusable/StyledButton';

const BookingsTable = ({ data }) => {

    const handleOpenOptions = (e) => {
        e.preventDefault();

        console.log(e.target)
    }

    return (
        <>
            {data.map((el) => (
                <StyledTableRow key={el.id}>
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
                        {el.order_date}
                    </StyledTableCell>
                    <StyledTableCell>
                        <StyledTableCellText $letterstyle='title'>
                            {el.check_in}
                        </StyledTableCellText>
                        <StyledTableCellText $letterstyle='subtitle'>
                            {el.hour_check_in}
                        </StyledTableCellText>
                    </StyledTableCell>
                    <StyledTableCell>
                        <StyledTableCellText $letterstyle='title'>
                            {el.check_out}
                        </StyledTableCellText>
                        <StyledTableCellText $letterstyle='subtitle'>
                            {el.hour_check_out}
                        </StyledTableCellText>
                    </StyledTableCell>
                    <StyledTableCell>
                        <StyledButton $name="view_notes">
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
                        <StyledTableCellText $letterstyle="dots" onClick={(e) => { handleOpenOptions(e) }}>
                            &#xFE19;
                        </StyledTableCellText>
                    </StyledTableCell>
                </StyledTableRow>

            ))}
        </>
    )
}

export default BookingsTable