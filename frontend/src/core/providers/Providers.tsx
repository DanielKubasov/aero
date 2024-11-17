'use client';

import {FC, PropsWithChildren} from 'react';

import {ThemeProvider} from '@/core/providers/ThemeProvider';
import {getSession, SessionProvider} from 'next-auth/react';

export const Providers: FC<PropsWithChildren> = async ({children}) => {
    const session = await getSession();

    return (
        <SessionProvider session={session}>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
        </SessionProvider>
    );
};
