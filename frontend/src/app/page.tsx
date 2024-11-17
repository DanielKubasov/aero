import React from 'react';
import Link from 'next/link';
import {getSession} from 'next-auth/react';

export default function Page() {
    const session = getSession();

    console.log(session);

    return <div>Home page! <Link href="/client">Client page</Link></div>;
}
