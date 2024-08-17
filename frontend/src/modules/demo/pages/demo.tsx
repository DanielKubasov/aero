import {FC} from 'react';

import {Heading} from '@/ui/typography/Heading';
import {Paragraph} from '@/ui/typography/Paragraph';
import {Small} from '@/ui/typography/Small';
import {Circle} from '../components/Circle';

export const Demo: FC = async () => {
    return (
        <main className='container'>
            <Heading level={1}>Heading level 1.</Heading>
            <Heading level={2}>Heading level 2.</Heading>
            <Heading level={3}>Heading level 3.</Heading>
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, molestiae obcaecati
                praesentium reprehenderit tenetur ullam. Adipisci eligendi, repellendus! Ab at autem dolor nihil quasi
                quibusdam saepe similique, vero. Aperiam architecto culpa deleniti doloribus earum, eum, ex id illo
                ipsam labore libero maiores modi molestiae mollitia numquam obcaecati praesentium quos reiciendis
                repellendus saepe sed sunt, voluptas! Adipisci, amet aspernatur atque deleniti doloremque eaque,
                excepturi facere id ipsam iure minus molestias necessitatibus nihil, odio officiis repellendus
                repudiandae similique. Consectetur deserunt error ex, expedita iure nisi obcaecati officia provident
                quibusdam, quos recusandae, repellat repudiandae vitae! Accusantium, animi facere laborum officiis ut
                veniam. Tenetur!
            </Paragraph>
            <Small>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, molestiae obcaecati
                praesentium reprehenderit tenetur ullam. Adipisci eligendi, repellendus! Ab at autem dolor nihil quasi
                quibusdam saepe similique, vero. Aperiam architecto culpa deleniti doloribus earum, eum, ex id illo
                ipsam labore libero maiores modi molestiae mollitia numquam obcaecati praesentium quos reiciendis
                repellendus saepe sed sunt, voluptas! Adipisci, amet aspernatur atque deleniti doloremque eaque,
                excepturi facere id ipsam iure minus molestias necessitatibus nihil, odio officiis repellendus
                repudiandae similique. Consectetur deserunt error ex, expedita iure nisi obcaecati officia provident
                quibusdam, quos recusandae, repellat repudiandae vitae! Accusantium, animi facere laborum officiis ut
                veniam. Tenetur!
            </Small>
            <Heading level={1}>Palette.</Heading>
            <ul className="grid w-fit grid-cols-5 gap-4">
                <li className="grid place-items-center">
                    <Circle className="bg-background"/>
                    background
                </li>
                <li className="grid place-items-center">
                    <Circle className="bg-foreground"/>
                    foreground
                </li>
                <li className="grid place-items-center">
                    <Circle className="bg-primary-300"/>
                    primary 300
                </li>
                <li className="grid place-items-center">
                    <Circle className="bg-primary-400"/>
                    primary 400
                </li>
                <li className="grid place-items-center">
                    <Circle className="bg-primary-500"/>
                    primary 500
                </li>

                <li className="grid place-items-center">
                    <Circle className="bg-secondary-300"/>
                    secondary 300
                </li>
                <li className="grid place-items-center">
                    <Circle className="bg-secondary-400"/>
                    secondary 400
                </li>
                <li className="grid place-items-center">
                    <Circle className="bg-secondary-400"/>
                    secondary 500
                </li>
                <li className="grid place-items-center">
                    <Circle className="bg-destructive"/>
                    destructive
                </li>
                <li className="grid place-items-center">
                    <Circle className="bg-positive"/>
                    positive
                </li>
            </ul>
        </main>
    );
};
