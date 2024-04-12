import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export default function PriveteRoute({ component: Component }) {
    const isLoggenIn = useSelector(selectIsLoggedIn);
    return isLoggenIn ? Component : <Navigate to={'/login'} />;
}
