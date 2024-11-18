import {FC} from 'react';

import {SignUpForm} from '@/features/(auth)/signUpForm';

const Page: FC = () => {
    return (
        <div className="container">
            <SignUpForm />
        </div>
    );
};

export default Page;
