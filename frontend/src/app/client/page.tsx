import React from 'react';
import Link from 'next/link';

import {ClientComponent} from '@/widgets/ClientComponent';

export default async function Page() {
    return (
        <div>
            This is the page, that loads on client
            <p></p>
            <Link href="/">Go to home page.</Link>
            <p></p>
            <Link href="/tasks">Go to tasks page</Link>
            <ClientComponent/>
        </div>
    );
}
