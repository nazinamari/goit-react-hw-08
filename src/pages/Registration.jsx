import PageTitle from '../components/PageTitle/PageTitle';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import css from './Registration.module.css';

export default function Registration() {
    return (
        <div className={css.container}>
            <PageTitle>Registration Form</PageTitle>
            <RegistrationForm />
        </div>
    );
}
