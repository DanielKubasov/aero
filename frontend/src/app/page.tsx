import React from 'react';
import Link from 'next/link';

export default async function Page() {

    return (
        <div>
            This is the Home page!
            <p></p>
            <Link href="/client">Go to page, that loads on client</Link>
            <p></p>
            <Link href="/tasks">Go to tasks page</Link>
        </div>
    );
}
