import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import css from './Navigation.module.css';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const makeLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive);
};

export default function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <nav>
            <NavLink className={makeLinkClass} to="/">
                Home
            </NavLink>
            {isLoggedIn && (
                <NavLink className={makeLinkClass} to="/contacts">
                    Contacts
                </NavLink>
            )}
        </nav>
    );
}
