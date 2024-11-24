import type {FC, ReactNode} from 'react';
import Link from 'next/link';

import {Button} from '@/shared/ui/button';

export const NavigationItem: FC<{
    children: ReactNode;
    icon: ReactNode;
    url: string;
}> = ({
    children,
    icon,
    url
}) => {
    return (
        <li>
            <Button className="w-full px-2 justify-start" variant="outline" asChild>
                <Link href={url}>
                    {icon}
                    <span className="w-full">{children}</span>
                </Link>
            </Button>
        </li>
    );
};
