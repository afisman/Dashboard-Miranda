import React from 'react'
import { StyledTableCell, StyledTableRow, StyledTableCellText } from '../../components/reusable/StyledTable'

const BookingsTable = ({ data, pageNumber }) => {
    console.log(data)

    return (
        <>
            {data.map((el) => (
                <StyledTableRow key={el.id}>
                    <StyledTableCell>
                        <StyledTableCellText letterstyle='title'>
                            {el.name}
                        </StyledTableCellText>
                        <StyledTableCellText letterstyle='id'>
                            #{el.id}
                        </StyledTableCellText>
                    </StyledTableCell>
                    <StyledTableCell>
                        {el.order_date}
                    </StyledTableCell>
                    <StyledTableCell>
                        <StyledTableCellText letterstyle='title'>
                            {el.check_in}
                        </StyledTableCellText>
                        <StyledTableCellText letterstyle='subtitle'>
                            {el.hour_check_in}
                        </StyledTableCellText>
                    </StyledTableCell>
                    <StyledTableCell>
                        <StyledTableCellText letterstyle='title'>
                            {el.check_out}
                        </StyledTableCellText>
                        <StyledTableCellText letterstyle='subtitle'>
                            {el.hour_check_out}
                        </StyledTableCellText>
                    </StyledTableCell>
                    <StyledTableCell>
                        <StyledTableCellText typeStyle="title">
                            {el.special_request.slice(0, 10)}
                        </StyledTableCellText>
                    </StyledTableCell>
                    <StyledTableCell>
                        <StyledTableCellText typeStyle="title">
                            {el.room.id}
                        </StyledTableCellText>
                    </StyledTableCell>
                    <StyledTableCell>
                        <StyledTableCellText typeStyle="title">
                            {el.status}
                        </StyledTableCellText>
                    </StyledTableCell>
                </StyledTableRow>

            ))}
        </>
    )
}

export default BookingsTable