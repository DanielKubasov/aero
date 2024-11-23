import {z} from 'zod';

const passwordValidation = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

export const formSchema = z.object({
    email: z.string().email().min(2, {message: 'Email must be at least 2 characters.',}),
    username: z.string().min(2, {message: 'Username must be at least 6 characters.',}),
    password: z
        .string()
        .min(8, {message: 'Password must be at least 8 characters.',})
        .regex(passwordValidation, {message: 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character.'})
});
