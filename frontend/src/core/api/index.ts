import axios from 'axios';
import {getServerSession} from 'next-auth/next';

import {authOptions} from '@/shared/configs/authConfig';

export const $api = axios.create({
    baseURL: 'http://localhost:4000',
    withCredentials: true
});

$api.interceptors.request.use(async (config) => {
    const session = await getServerSession(authOptions);

    console.log(session);

    if (session.jwt) {
        config.headers.Authorization = `Bearer ${session.jwt}`;
    }

    return config;
});
