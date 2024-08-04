import {NavigationItemType} from '@/core/navigation/types/NavigationItemType';
import {AlertTriangle, ChartColumn, Palette} from 'lucide-react';

export const NavigationItems: NavigationItemType[] = [
    {
        label: 'Issues',
        icon: (<AlertTriangle className="text-current" width={24} height={24} />),
        path: '/issues'
    },
    {
        label: 'Dashboard',
        icon: (<ChartColumn className="text-current" width={24} height={24} />),
        path: '/dashboard'
    },
    {
        label: 'Demonstration',
        icon: (<Palette className="text-current" width={24} height={24} />),
        path: '/demo'
    }
];
