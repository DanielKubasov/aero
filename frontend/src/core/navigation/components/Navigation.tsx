import {FC} from 'react';
import {cn} from '@/core/utils/cn';

import {NavigationItems} from './NavigationItems';
import {NavigationItem} from './NavigationItem';
import {NavigationList} from '@/core/navigation/components/NavigationList';

export const Navigation: FC<{
    className?: string;
}> = ({className}) => {
    return (
        <header className={cn('w-[320px] px-3 py-6 flex-shrink-0 flex-grow-1 bg-primary-background rounded-r-[16px]', className)}>
            <nav role="navigation">
                <NavigationList>
                    {NavigationItems.map(item => (
                        <NavigationItem
                            key={item.path}
                            icon={item.icon}
                            label={item.label}
                            path={item.path}
                        />
                    ))}
                </NavigationList>
            </nav>
        </header>
    );
};
