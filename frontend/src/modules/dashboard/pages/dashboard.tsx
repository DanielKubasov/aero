import {FC} from 'react';

import {Heading} from '@/ui/typography/Heading';
import {Paragraph} from '@/ui/typography/Paragraph';
import {Small} from '@/ui/typography/Small';
import {Link} from '@/ui/typography/Link';

export const Dashboard: FC = async () => {
    return (
        <main className='container'>
            <Heading level={1}>Dashboard page!</Heading>
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias autem beatae eos, et ipsa
                laboriosam minima modi nam, <Link href="/issues">omnis</Link> porro qui quibusdam quos tenetur ut! Eos
                exercitationem facilis
                numquam optio rerum! Ab ad amet doloribus earum iusto praesentium saepe voluptatem! Commodi, consectetur
                ducimus ex labore numquam officia <Small>quibusdam</Small> vel!
            </Paragraph>
        </main>
    );
};
