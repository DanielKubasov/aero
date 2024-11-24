'use client';

import React, {FC} from 'react';

import {useSession} from 'next-auth/react';
import Link from 'next/link';

import {ClipboardList, House} from 'lucide-react';

import {cn} from '@/core/utils/cn';

import {Button} from '@/shared/ui/button';

import {NavigationItem} from './navigationItem';
import {NavigationList} from './navigationList';

export const Navigation: FC<{
    className?: string;
}> = ({className}) => {
    const {data: session} = useSession();

    return (
        <aside className={cn('h-full w-[280px] p-4 border-r border-secondary shadow-sm', className)}>
            <nav className="h-full flex flex-col">
                {session && (
                    <NavigationList>
                        <NavigationItem icon={<House/>} url="/">Home</NavigationItem>
                        <NavigationItem icon={<ClipboardList/>} url="/tasks">My tasks</NavigationItem>
                    </NavigationList>
                )}

                {!session && (
                    <div className="mt-auto flex gap-2">
                        <Button className="w-full" variant="ghost" asChild>
                            <Link href="/auth/sign-in">Sign in</Link>
                        </Button>
                        <Button className="w-full" asChild>
                            <Link href="/auth/sign-up">Sign up</Link>
                        </Button>
                    </div>
                )}
            </nav>
        </aside>
    );
};
