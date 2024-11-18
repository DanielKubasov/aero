'use client';

import React, {FC} from 'react';

import {useSession, signIn, signOut} from 'next-auth/react';

import {Button} from '@/shared/ui/button';
import Link from 'next/link';

export const Header: FC = () => {
    const {data: session} = useSession();

    return (
        <header className="py-4">
            <div className="container flex justify-between items-center">
                <div>Hello <b>{session?.user?.email}</b></div>
                
                {session && (
                    <div className="flex items-center">
                        <ul className="flex items-center gap-2 ml-auto mr-8">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/tasks">Tasks</Link></li>
                        </ul>

                        <div className="flex gap-1">
                            <Button onClick={() => signIn()} variant="ghost">Sign in</Button>
                            <Button onClick={() => signOut()} variant="destructive">Logout</Button>
                        </div>
                    </div>
                )}

                {!session && (
                    <div>
                        <div className="flex gap-1">
                            <Button variant="ghost" asChild>
                                <Link href="/auth/sign-in">Sign in</Link>
                            </Button>
                            <Button asChild>
                                <Link href="/auth/sign-up">Sign up</Link>
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};
