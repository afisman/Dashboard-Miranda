import React, { useState } from 'react';
import ContactSwiper from '../../components/contactSwiper/ContactSwiper';
import ContactPageTable from './ContactPageTable';
import { StyledMenu, StyledMenuText, StyledSelect, StyledMenuButtons, StyledMenuWrapper } from '../../components/reusable/StyledMenu';
import data from '../../data/contact.json';
import { StyledTable, StyledTableHeader } from '../../components/reusable/StyledTable';
import { StyledButton } from '../../components/reusable/StyledButton';




const ContactPage = () => {
    const [selection, setSelection] = useState('all');
    const [contactsList, setContactsList] = useState(data);
    const [currentPage, setCurrentPage] = useState(1);


    const handleMenuClick = (option) => {
        setSelection(option);
    }

    const totalPages = Math.ceil(data.length / 10);
    const firstContact = (currentPage - 1) * 10;
    const lastContact = firstContact + 10;
    const displayedContacts = contactsList.slice(firstContact, lastContact);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage)
    }


    return (
        <>
            <ContactSwiper />
            <StyledMenuWrapper>
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
                <StyledSelect name="order" id="order">
                    <option value='newest'>Newest</option>
                    <option value='checkin'>Check in</option>
                    <option value='checkout'>Check out</option>
                    <option value='guest'>Guest</option>
                </StyledSelect>
            </StyledMenuWrapper>
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
                        data={displayedContacts}
                    />
                </tbody>
            </StyledTable>
            <StyledMenuButtons $type='pagination'>
                <StyledButton $name='pagination' onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </StyledButton>
                <StyledButton $name='pagination' onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </StyledButton>
            </StyledMenuButtons>
        </>
    )
}

export default ContactPage