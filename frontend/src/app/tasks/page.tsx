import {$api} from '@/core/api';
import { ITask } from '@/entities/task';

const Page = async () => {

    try {
        const {data} = await $api.get<ITask[]>('tasks');

        return (
            <div>
                {data.map(item => (
                    <li key={item.id}>
                        <b>{item.title}</b>
                        <p>{item.description}</p>
                        <p><i>{item.estimation}</i></p>
                    </li>
                ))}
            </div>
        );
    } catch (error: unknown) {
        console.error(error);
        return <i>Error happened</i>;
    }
};

export default Page;
