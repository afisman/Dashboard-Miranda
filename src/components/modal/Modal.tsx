import { Modal } from '@mui/material';
import React from 'react';
import { StyledModal, StyledModalIcon, StyledModalText } from './StyledModal';

interface ModalProps {
    open: boolean
    handleclose: () => void
    description: string
}

const ModalComponent = ({ open, handleclose, description }: ModalProps) => {
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