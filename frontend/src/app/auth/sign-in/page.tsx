import {FC} from 'react';

import {SignInForm} from '@/features/(auth)/signInForm';

const Page: FC = () => {
    return (
        <div className="container">
            <SignInForm />
        </div>
    );
};

export default Page;
