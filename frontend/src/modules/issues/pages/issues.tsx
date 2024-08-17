'use client';

import {FC} from 'react';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/ui/table';

export const Issues: FC = () => {
    return (
        <main className='container'>
            <Table className="w-full">
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Priority</TableHead>
                        <TableHead>Assignee</TableHead>
                        <TableHead>Due Date</TableHead>
                        <TableHead>Tags</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className='py-6'>1</TableCell>
                        <TableCell>A title of an issue</TableCell>
                        <TableCell>In progress</TableCell>
                        <TableCell>Normal</TableCell>
                        <TableCell>Daniel Kubasov</TableCell>
                        <TableCell>21.02.2024</TableCell>
                        <TableCell>Bug, Cosmetic</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className='py-6'>1</TableCell>
                        <TableCell>A title of an issue</TableCell>
                        <TableCell>In progress</TableCell>
                        <TableCell>Normal</TableCell>
                        <TableCell>Daniel Kubasov</TableCell>
                        <TableCell>21.02.2024</TableCell>
                        <TableCell>Bug, Cosmetic</TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell className='py-6'>1</TableCell>
                        <TableCell>A title of an issue</TableCell>
                        <TableCell>In progress</TableCell>
                        <TableCell>Normal</TableCell>
                        <TableCell>Daniel Kubasov</TableCell>
                        <TableCell>21.02.2024</TableCell>
                        <TableCell>Bug, Cosmetic</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className='py-6'>1</TableCell>
                        <TableCell>A title of an issue</TableCell>
                        <TableCell>In progress</TableCell>
                        <TableCell>Normal</TableCell>
                        <TableCell>Daniel Kubasov</TableCell>
                        <TableCell>21.02.2024</TableCell>
                        <TableCell>Bug, Cosmetic</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className='py-6'>1</TableCell>
                        <TableCell>A title of an issue</TableCell>
                        <TableCell>In progress</TableCell>
                        <TableCell>Normal</TableCell>
                        <TableCell>Daniel Kubasov</TableCell>
                        <TableCell>21.02.2024</TableCell>
                        <TableCell>Bug, Cosmetic</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </main>
    );
};
