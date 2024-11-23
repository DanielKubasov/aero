import {$api} from '@/core/api';

import type {SignUpCredentials} from '../interfaces/sign-up.interface';

export const signUp = async (credentials: SignUpCredentials) => {
    try {
        const {data} = await $api.post('/auth/sign-up', {
            email: credentials.email,
            username: credentials.username,
            password: credentials.password,
        });

        return data;
    } catch (error: unknown) {
        throw error;
    }
};
