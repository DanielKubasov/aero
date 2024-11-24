import type {FC} from 'react';

import {Button} from '@/shared/ui/button';

import {AlignJustify} from 'lucide-react';

export const ToggleNavigation: FC = () => {
    return (
        <Button variant="outline" size="icon">
            <AlignJustify width={24} height={24}/>
        </Button>
    );
};
