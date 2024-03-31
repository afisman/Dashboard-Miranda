import React from 'react';
import { StyledCardLeft, StyledCardTop, StyledCardText, StyledCardInfo, StyledButtonGroup } from '../../components/reusable/StyledDataCard';
import { StyledButton } from '../../components/reusable/StyledButton';
import { StyledMessageBubble, StyledPhoneIcon } from '../../components/reusable/StyledIcons';
import { BookingInterface } from '../../interfaces/booking/bookingInterface';
import { RoomInterface } from '../../interfaces/room/RoomInterface';

interface BookingCardInterface {
    booking: BookingInterface
    room: RoomInterface
}



const BookingPageCard = ({ booking, room }: BookingCardInterface) => {
    return (
        <>
            <StyledCardLeft>
                <StyledCardTop>
                    <StyledCardText $lettertype='title'>
                        {booking.name}
                    </StyledCardText>
                    <StyledCardText $lettertype='id'>
                        ID {booking.id}
                    </StyledCardText>
                    <StyledButtonGroup $type='contact'>
                        <StyledButton>
                            <StyledPhoneIcon />
                        </StyledButton>
                        <StyledButton $name='card'>
                            <StyledMessageBubble />
                            Send Message
                        </StyledButton>
                    </StyledButtonGroup>
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
                        <StyledCardText $lettertype='info'>
                            {room.room_type}
                        </StyledCardText>
                    </div>
                    <div>
                        <StyledCardText>
                            Price:
                        </StyledCardText>
                        <StyledCardText $lettertype='rate'>
                            {booking.rate}
                            <small>
                                /night
                            </small>
                        </StyledCardText>
                    </div>
                </StyledCardInfo>
                <StyledCardText>
                    {room.description}
                </StyledCardText>
                <StyledCardText $lettertype='check'>
                    Facilities:
                </StyledCardText>
                <StyledButtonGroup $type='large'>
                    {room.amenities.slice(0, 3).map((el) => (
                        <StyledButton $name='login' key={el}>
                            {el}
                        </StyledButton>
                    ))}
                </StyledButtonGroup>
                <StyledButtonGroup $type='small'>
                    {room.amenities.slice(3, 6).map((el) => (
                        <StyledButton $name='facilities2' key={el}>
                            {el}
                        </StyledButton>
                    ))}
                </StyledButtonGroup>
            </StyledCardLeft>
        </>
    )
}

export default BookingPageCard