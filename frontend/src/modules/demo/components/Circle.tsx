import {FC} from 'react';
import {cn} from '@/core/utils/cn';

export const Circle: FC<{
    className?: string;
}> = ({className}) => {
    return <div className={cn('w-16 h-16 rounded-full', className)}></div>;
};
