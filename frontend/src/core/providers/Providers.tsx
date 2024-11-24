'use client';

import {FC, PropsWithChildren} from 'react';

import {ThemeProvider} from '@/core/providers/ThemeProvider';
import {SessionProvider} from 'next-auth/react';

export const Providers: FC<PropsWithChildren & {session: any}> = ({session, children}) => {

    return (
        <SessionProvider session={session}>
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
        </ SessionProvider>
    );
};
