import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle/PageTitle';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import css from './Registration.module.css';

export default function Registration() {
    return (
        <div className={css.container}>
            <PageTitle>Registration Form</PageTitle>
            <RegistrationForm />
            <p className={css.text}>
                or{' '}
                <Link to="/login" className={css.link}>
                    log in
                </Link>{' '}
                if you already have account
            </p>
        </div>
    );
}
