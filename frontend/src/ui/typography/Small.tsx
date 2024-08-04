import {FC, PropsWithChildren} from 'react';

export const Small: FC<PropsWithChildren> = ({children}) => {
    return (
        <small className="text-[13px]">{children}</small>
    );
};
