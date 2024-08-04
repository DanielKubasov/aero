import {FC, PropsWithChildren} from 'react';

export const Heading: FC<PropsWithChildren & { level: number }> = ({children, level}) => {

    if (level === 1) {
        return (
            <h1 className="text-[48px] font-semibold">{children}</h1>
        );
    }

    if (level === 2) {
        return (
            <h2 className="text-[40px] font-semibold">{children}</h2>
        );
    }

    if (level === 3) {
        return (
            <h3 className="text-[33px] font-semibold">{children}</h3>
        );
    }

    if (level === 4) {
        return (
            <h4 className="text-[28px] font-semibold">{children}</h4>
        );
    }


};
