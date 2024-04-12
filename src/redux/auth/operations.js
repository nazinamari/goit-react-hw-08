import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common['Authorization'] = '';
};

export const register = createAsyncThunk(
    'auth/register',
    async (userInfo, thunkAPI) => {
        try {
            const response = await axios.post('/users/signup', userInfo);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);

export const logIn = createAsyncThunk(
    'auth/login',
    async (userInfo, thunkAPI) => {
        try {
            const response = await axios.post('/users/login', userInfo);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        const response = await axios.post('/users/logout');
        clearAuthHeader();
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const {
            auth: { token },
        } = thunkAPI.getState();

        setAuthHeader(token);
        const response = await axios.get('/users/current');
        return response.data;
    },
    {
        condition: (_, { getState }) => {
            const {
                auth: { token },
            } = getState();

            return token !== null;
        },
    },
);
