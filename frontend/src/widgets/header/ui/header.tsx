'use client';

import type {FC} from 'react';
import Link from 'next/link';

import {signOut} from 'next-auth/react';

import {cn} from '@/core/utils/cn';

import {ChevronDown} from 'lucide-react';

import {Avatar, AvatarImage, AvatarFallback} from '@/shared/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/shared/ui/dropdown-menu';

import {ToggleNavigation} from '@/features/(navigation)/toggleNavigation';

export const Header: FC<{
    session: any;
    className?: string;
}> = ({className}) => {
    return (
        <header className={cn('flex p-4 justify-between border-b border-secondary', className)}>
            <ToggleNavigation/>

            <div className="flex gap-4 items-center">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <ChevronDown />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link className="inline-block w-full h-full" href="/">Profile</Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer" onClick={() => signOut()}>Sign out</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png"/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </header>
    );
};
