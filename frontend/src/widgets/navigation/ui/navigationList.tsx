import type {FC, ReactNode} from 'react';

export const NavigationList: FC<{children: ReactNode}> = ({children}) => {
    return (
        <ul className="flex flex-col gap-3">
            {children}
        </ul>
    );
};
