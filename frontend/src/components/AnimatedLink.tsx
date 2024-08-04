'use client';

import React, {ReactNode} from 'react';
import {useRouter} from 'next/navigation';

import Link, {LinkProps} from 'next/link';

type CustomLinkProps = LinkProps & {
    children: ReactNode;
    href: string;
}

export const AnimatedLink = ({
    children,
    href,
    ...props
} : CustomLinkProps) => {

    const router = useRouter();

    const sleep = async (ms: number) : Promise<void> => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    const handler = async (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) : Promise<void> => {
        event.preventDefault();

        const body = document.querySelector('body');

        body?.classList.add('page-transition');

        await sleep(500);

        router.push(href);

        await sleep(500);

        body?.classList.remove('page-transition');
    };

    return (
        <Link
            onClick={handler}
            href={href}
            {...props}
        >
            {children}
        </Link>
    );
};
