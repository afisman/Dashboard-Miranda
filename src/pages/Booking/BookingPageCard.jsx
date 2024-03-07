import React from 'react';
import { StyledCardLeft, StyledCardTop, StyledCardText, StyledCardInfo } from '../../components/reusable/StyledDataCard';
import { StyledButton } from '../../components/reusable/StyledButton';
import { StyledPhoneIcon } from '../../components/reusable/StyledIcons';



const BookingPageCard = ({ booking, room }) => {
    return (
        <>
            <StyledCardLeft>
                <StyledCardTop>
                    <StyledCardText>
                        {booking.name}
                    </StyledCardText>
                    <StyledCardText>
                        ID {booking.id}
                    </StyledCardText>
                    <div style={{ display: 'flex' }}>
                        <StyledButton>
                            <StyledPhoneIcon />
                        </StyledButton>
                        <StyledButton>
                            Send Message
                        </StyledButton>
                    </div>
                </StyledCardTop>
                <StyledCardInfo $type='check'>
                    <div>
                        <StyledCardText $lettertype='check'>
                            Check In:
                        </StyledCardText>
                        <StyledCardText $lettertype='date'>
                            {booking.check_in}
                        </StyledCardText>
                    </div>
                    <div>
                        <StyledCardText $lettertype='check'>
                            Check Out:
                        </StyledCardText>
                        <StyledCardText $lettertype='date'>
                            {booking.check_out}
                        </StyledCardText>
                    </div>
                </StyledCardInfo>
                <StyledCardInfo>
                    <div>
                        <StyledCardText>
                            Room info:
                        </StyledCardText>
                        <StyledCardText>
                            {booking.room_type}
                        </StyledCardText>
                    </div>
                    <div>
                        <StyledCardText>
                            Price:
                        </StyledCardText>
                        <StyledCardText>
                            {booking.rate}
                        </StyledCardText>
                    </div>
                </StyledCardInfo>
                <StyledCardText>
                    {room.description}
                </StyledCardText>
            </StyledCardLeft>
        </>
    )
}

export default BookingPageCard