import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactsList.module.css';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

export default function ContactsList() {
    const contacts = useSelector(selectFilteredContacts);

    return (
        <ul className={css.list}>
            {contacts.map(item => (
                <li key={item.id} className={css.item}>
                    <Contact data={item} />
                </li>
            ))}
        </ul>
    );
}
