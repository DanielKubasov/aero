'use client';

import {FC} from 'react';
import {useRouter} from 'next/navigation';

import {NavigationItemType} from '@/core/navigation/types/NavigationItemType';

export const NavigationItem: FC<NavigationItemType> = ({icon, label, path}) => {

    const router = useRouter();

    const handler = () => {
        router.push(path, {});
    };

    return (
        <button
            className="flex w-full px-3 py-2 gap-3 rounded-md items-center bg-background transition-all hover:bg-primary hover:text-background"
            type="button"
            onClick={handler}
        >
            {icon}
            <p>{label}</p>
        </button>
    );
};
