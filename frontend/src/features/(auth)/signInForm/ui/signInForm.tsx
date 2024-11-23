'use client';

import React, {FC} from 'react';
import {useRouter} from 'next/navigation';

import {z} from 'zod';

import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/shared/ui/form';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import {Button} from '@/shared/ui/button';
import {Input} from '@/shared/ui/input';

import {formSchema} from '../schemas/form.schema';
import {signIn} from 'next-auth/react';

export const SignInForm: FC = () => {

    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        if (!values) return;

        try {
            await signIn('credentials', {
                email: values.email,
                password: values.password,
                callbackUrl: '/'
            });
        } catch (error: unknown) {
            console.error(error);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-[400px] space-y-2">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="shadcn@gmail.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="12345678" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
};
