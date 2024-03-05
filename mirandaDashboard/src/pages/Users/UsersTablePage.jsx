import React from 'react';
import { StyledTableCell, StyledTableRow, StyledTableCellText, StyledTableCellImg } from '../../components/reusable/StyledTable';
import { StyledButton } from '../../components/reusable/StyledButton';

const UsersTablePage = ({ data }) => {
    return (
        <>
            {data.map((el) => (
                <StyledTableRow key={el.id}>
                    <StyledTableCell name='imageCell'>
                        <StyledTableCellImg imgtype='concierge'>
                            <img src={el.photo} alt="user" />
                        </StyledTableCellImg>
                        <div>

                            <StyledTableCellText letterstyle='title'>
                                {el.first_name}
                            </StyledTableCellText>
                            <StyledTableCellText letterstyle='id'>
                                #{el.id}
                            </StyledTableCellText>
                            <StyledTableCellText letterstyle='subtitle'>
                                Joined on {el.start_date}
                            </StyledTableCellText>
                        </div>
                    </StyledTableCell>
                    <StyledTableCell name='facilities'>
                        <StyledTableCellText letterstyle='title'>
                            {el.description}
                        </StyledTableCellText>
                    </StyledTableCell>
                    <StyledTableCell>
                        <StyledTableCellText letterstyle='title'>
                            {el.room_floor}
                        </StyledTableCellText>
                    </StyledTableCell>
                    <StyledTableCell name='facilities'>
                        <StyledTableCellText letterstyle='title'>
                            {el.contact}
                        </StyledTableCellText>
                    </StyledTableCell>
                    <StyledTableCell style={{ display: 'flex', alignItems: 'center' }}>
                        <StyledTableCellText letterstyle={`${el.status}`}>
                            {el.status}
                        </StyledTableCellText>
                    </StyledTableCell>
                </StyledTableRow>
            ))}
        </>
    )
}

export default UsersTablePage