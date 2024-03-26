import React, { useMemo, useState, useEffect } from 'react';
import ContactSwiper from '../../components/contactSwiper/ContactSwiper';
import ContactPageTable from './ContactPageTable';
import { StyledMenu, StyledMenuText, StyledSelect, StyledMenuButtons, StyledMenuWrapper } from '../../components/reusable/StyledMenu';
import { StyledTable, StyledTableHeader } from '../../components/reusable/StyledTable';
import { StyledButton } from '../../components/reusable/StyledButton';
import { useDispatch, useSelector } from 'react-redux';
import { getContactList } from '../../features/contact/contactSlice.ts';
import { fetchContacts } from '../../features/contact/contactThunk.ts';
import ModalComponent from '../../components/modal/Modal';


const ContactPage = () => {
    const contactsPerPage = 10;
    const [selection, setSelection] = useState('all');
    const [order, setOrder] = useState('date');
    const [currentPage, setCurrentPage] = useState(1);
    const [message, setMessage] = useState('');
    const [modalOpen, setModalOpen] = useState(false);


    const dispatch = useDispatch();
    const contactsData = useSelector(getContactList);

    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);

    const contactsList = useMemo(() => {
        const orderedContacts = contactsData.filter(contact => (selection === 'all' ? true : contact.read.toString() === selection))
        orderedContacts.sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
        }
        )

        return orderedContacts;
    }
        , [contactsData, order, selection, currentPage])

    const handleMenuClick = (option) => {
        setSelection(option);
    }

    const totalPages = Math.ceil(contactsData.length / contactsPerPage);
    const firstContact = (currentPage - 1) * contactsPerPage;
    const lastContact = firstContact + contactsPerPage;
    const displayedContacts = contactsList.slice(firstContact, lastContact);

    const initialFetch = async () => {
        try {
            await dispatch(fetchContacts());
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        initialFetch();
    }, [initialFetch]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage)
    }


    return (
        <>
            <ContactSwiper />

            <ModalComponent open={modalOpen} handleclose={handleClose} description={message}></ModalComponent>

            <StyledMenuWrapper>
                <StyledMenu>
                    <StyledMenuText
                        onClick={() => handleMenuClick('all')}
                        $selected={selection === 'all'}
                    >
                        All Reviews
                    </StyledMenuText>
                    <StyledMenuText
                        onClick={() => handleMenuClick('true')}
                        $selected={selection === 'true'}
                    >
                        Read
                    </StyledMenuText>
                    <StyledMenuText
                        onClick={() => handleMenuClick('false')}
                        $selected={selection === 'false'}
                    >
                        Archived
                    </StyledMenuText>
                </StyledMenu>
                <StyledSelect name="order" id="order">
                    <option value='newest'>Newest</option>
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
                        setMessage={setMessage}
                        handleOpen={handleOpen}
                        dispatch={dispatch}
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