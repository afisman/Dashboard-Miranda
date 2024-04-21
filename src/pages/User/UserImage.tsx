import React from 'react'
import { StyledCardRight } from '../../components/reusable/StyledDataCard';

interface UserImageProps {
    image: string
}

const UserImage = ({ image }: UserImageProps) => {
    return (
        <StyledCardRight>
            <img src={image} alt="User image" />
        </StyledCardRight>
    )
}

export default UserImage