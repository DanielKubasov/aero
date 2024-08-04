import {FC, PropsWithChildren} from 'react';

export const Paragraph: FC<PropsWithChildren> = ({children}) => {
    return (
        <p className="text-[15px] text-paragraph">{children}</p>
    );
};
