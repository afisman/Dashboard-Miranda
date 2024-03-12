import { Modal } from '@mui/material';
import React from 'react';
import { StyledModal, StyledModalIcon, StyledModalText } from './StyledModal';



const ModalComponent = ({ open, handleclose, description }) => {
    return (
        <Modal open={open} >
            <StyledModal>
                <StyledModalIcon onClick={handleclose}></StyledModalIcon>
                <StyledModalText>{description}</StyledModalText>
            </StyledModal>
        </Modal>
    )
}

export default ModalComponent