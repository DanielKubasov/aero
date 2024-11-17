'use client';

import {useSession} from 'next-auth/react';

export const ClientComponent = () => {

    const session = useSession();

    console.log(session);

    return 'Client component';
};
