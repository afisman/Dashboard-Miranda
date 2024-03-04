import React from 'react';
import { StyledBedIcon, StyledKPIText, StyledKPIWrapper, StyledKPIcard, StyledCalendarIcon, StyledCheckIn, StyledCheckOut } from './StyledKPI';

const KPIsCard = () => {
    return (
        <>
            <StyledKPIWrapper>
                <StyledKPIcard>
                    <StyledBedIcon></StyledBedIcon>
                    <StyledKPIText>
                        <h4>8,461</h4>
                        <p>New Bookings</p>
                    </StyledKPIText>
                </StyledKPIcard>
                <StyledKPIcard>
                    <StyledCalendarIcon></StyledCalendarIcon>
                    <StyledKPIText>
                        <h4>8,461</h4>
                        <p>New Bookings</p>
                    </StyledKPIText>
                </StyledKPIcard>
                <StyledKPIcard>
                    <StyledCheckIn></StyledCheckIn>
                    <StyledKPIText>
                        <h4>8,461</h4>
                        <p>New Bookings</p>
                    </StyledKPIText>
                </StyledKPIcard>
                <StyledKPIcard>
                    <StyledCheckOut></StyledCheckOut>
                    <StyledKPIText>
                        <h4>8,461</h4>
                        <p>New Bookings</p>
                    </StyledKPIText>
                </StyledKPIcard>

            </StyledKPIWrapper>
        </>
    )
}

export default KPIsCard