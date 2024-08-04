import {FC, PropsWithChildren} from 'react';
import {default as NextLink, LinkProps} from 'next/link';

export const Link: FC<LinkProps & PropsWithChildren> = ({
    children,
    href
}) => {
    return (
        <NextLink className="text-primary" href={href}>{children}</NextLink>
    );
};
