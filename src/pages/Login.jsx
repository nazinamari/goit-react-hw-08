import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm/LoginForm';
import PageTitle from '../components/PageTitle/PageTitle';
import css from './Login.module.css';

export default function Login() {
    return (
        <div className={css.container}>
            <PageTitle>Please log in</PageTitle>
            <LoginForm />
            <p className={css.text}>
                or{' '}
                <Link to="/register" className={css.link}>
                    create
                </Link>{' '}
                new account
            </p>
        </div>
    );
}
