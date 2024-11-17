import React from 'react';
import Link from 'next/link';

import {ClientComponent} from '@/widgets/ClientComponent';

export default async function Page() {
    return (
        <div>
            Client page! <Link href="/">Home</Link>
            <ClientComponent/>
        </div>
    );
}
