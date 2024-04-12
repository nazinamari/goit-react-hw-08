import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Registration from '../pages/Registration';
import Login from '../pages/Login';
import Contacts from '../pages/Contacts';
import Layout from './Layout/Layout';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../redux/auth/operations';
import { selectIsRefreshing } from '../redux/auth/selectors';
import Loader from './Loader/Loader';
import RestrictedRoute from './RestrictedRoute';
import PriveteRoute from './PrivateRoute';

export default function App() {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(selectIsRefreshing);

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return isRefreshing ? (
        <Loader />
    ) : (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/register"
                    element={
                        <RestrictedRoute
                            component={<Registration />}
                            redirectTo="/"
                        />
                    }
                />
                <Route
                    path="/login"
                    element={
                        <RestrictedRoute
                            component={<Login />}
                            redirectTo="/contacts"
                        />
                    }
                />
                <Route
                    path="/contacts"
                    element={<PriveteRoute component={<Contacts />} />}
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Toaster />
        </Layout>
    );
}
