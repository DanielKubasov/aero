import {FC, ReactNode} from 'react';

export const NavigationList: FC<{
    children: ReactNode;
}> = ({children}) => {
    return (
        <ul className="grid gap-y-2" role="list">
            {children}
        </ul>
    );
};
