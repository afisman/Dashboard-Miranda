import { useMemo, useState, useEffect } from 'react';
import ContactSwiper from '../../components/contactSwiper/ContactSwiper';
import ContactPageTable from './ContactPageTable';
import { StyledMenu, StyledMenuText, StyledSelect, StyledMenuButtons, StyledMenuWrapper } from '../../components/reusable/StyledMenu';
import { StyledTable, StyledTableHeader } from '../../components/reusable/StyledTable';
import { StyledButton } from '../../components/reusable/StyledButton';
import { getContactList, getContactStatus } from '../../features/contact/contactSlice';
import { fetchContacts, fetchUpdateContact } from '../../features/contact/contactThunk';
import ModalComponent from '../../components/modal/Modal';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { StyledSearchInput } from '../../components/reusable/StyledSearchInput';
import { ContactInterface } from '../../interfaces/contact/contactInterface';


const ContactPage = () => {
    const contactsPerPage = 10;
    const [selection, setSelection] = useState<string>('all');
    const [order, setOrder] = useState<string>('date');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [message, setMessage] = useState<string>('');
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [search, setSearch] = useState<string>('');
    const contactStatus: string = useAppSelector(getContactStatus);


    const dispatch = useAppDispatch();
    const contactsData = useAppSelector(getContactList);

    const handleOpen = (): void => setModalOpen(true);
    const handleClose = (): void => setModalOpen(false);

    const contactsList = useMemo(() => {
        let orderedContacts = contactsData.filter(contact => (selection === 'all' ? true : contact.is_read.toString() === selection));
        orderedContacts.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
        }
        );
        if (contactStatus === 'idle') {
            orderedContacts = contactsData.filter(contact => (selection === 'all' ? true : contact.is_read.toString() === selection));
        };

        if (search) {
            const lowercaseSearch = search.toLowerCase();
            orderedContacts = orderedContacts.filter((contact) => contact.full_name.toLowerCase().includes(lowercaseSearch));
        };
        console.log(orderedContacts)

        return orderedContacts;
    }
        , [contactsData, order, selection, currentPage, contactStatus])

    const handleMenuClick = (option: string): void => {
        setSelection(option);
    };

    const totalPages = Math.ceil(contactsData.length / contactsPerPage);
    const firstContact = (currentPage - 1) * contactsPerPage;
    const lastContact = firstContact + contactsPerPage;
    const displayedContacts = contactsList.slice(firstContact, lastContact);

    const initialFetch = async (): Promise<void> => {
        try {
            await dispatch(fetchContacts());
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        initialFetch();
    }, []);

    const handlePageChange = (newPage: number): void => {
        setCurrentPage(newPage);
    };

    const updateContact = async (contact: ContactInterface, status: boolean): Promise<any> => await dispatch(fetchUpdateContact({ ...contact, is_read: status }));



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
                <StyledSearchInput type='text' name='searchBar' id='searchBar' placeholder='Search Name' onChange={(e) => setSearch(e.target.value)} />
                <StyledSelect name="order" id="order">
                    <option value='newest'>Newest</option>
                </StyledSelect>
            </StyledMenuWrapper>
            <StyledTable>
                <thead>
                    <tr>
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
                        updateContact={updateContact}
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