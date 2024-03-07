import React, { useState } from 'react';
import ContactSwiper from '../../components/contactSwiper/ContactSwiper';
import ContactPageTable from './ContactPageTable';
import { StyledMenu, StyledMenuText } from '../../components/reusable/StyledMenu';
import data from '../../data/contact.json';
import { StyledTable, StyledTableHeader } from '../../components/reusable/StyledTable';



const ContactPage = () => {
    const [selection, setSelection] = useState('all');
    const [contactsList, setContactsList] = useState(data)

    const handleMenuClick = (option) => {
        setSelection(option);
    }
    return (
        <>
            <ContactSwiper />
            <StyledMenu>
                <StyledMenuText
                    onClick={() => handleMenuClick('all')}
                    $selected={selection === 'all'}
                >
                    All Reviews
                </StyledMenuText>
                <StyledMenuText
                    onClick={() => handleMenuClick('published')}
                    $selected={selection === 'published'}
                >
                    Published
                </StyledMenuText>
                <StyledMenuText
                    onClick={() => handleMenuClick('archived')}
                    $selected={selection === 'archived'}
                >
                    Archived
                </StyledMenuText>
            </StyledMenu>
            <StyledTable>
                <thead>
                    <tr>
                        <StyledTableHeader>Order ID</StyledTableHeader>
                        <StyledTableHeader>Date</StyledTableHeader>
                        <StyledTableHeader>Customer</StyledTableHeader>
                        <StyledTableHeader>Comment</StyledTableHeader>
                        <StyledTableHeader>Action</StyledTableHeader>
                    </tr>
                </thead>
                <tbody>
                    <ContactPageTable
                        data={contactsList}
                    />
                </tbody>
            </StyledTable>
        </>
    )
}

export default ContactPage