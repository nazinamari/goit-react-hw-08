import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Registration from '../pages/Registration';
import Login from '../pages/Login';
import Contacts from '../pages/Contacts';
import Layout from './Layout/Layout';
import { Toaster } from 'react-hot-toast';

export default function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Toaster />
        </Layout>
    );
}
