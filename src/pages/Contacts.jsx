import { useDispatch, useSelector } from 'react-redux';
import ContactsList from '../components/ContactsList/ContactsList';
import PageTitle from '../components/PageTitle/PageTitle';
import { selectIsLoading } from '../redux/contacts/selectors';
import Loader from '../components/Loader/Loader';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
import SearchBox from '../components/SearchBox/SearchBox';
import ContactForm from '../components/ContactForm/ContactForm';

export default function Contacts() {
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    return (
        <div>
            <PageTitle>Your Contacts</PageTitle>
            <ContactForm />
            <SearchBox />
            <ContactsList />
            {isLoading && <Loader />}
        </div>
    );
}
