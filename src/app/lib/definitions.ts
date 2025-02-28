import { z } from 'zod'
 
export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long.' })
    .trim(),
  email: z.string().email({ message: 'Please enter a valid email.' }).min(5, { message: 'Email must be at least 5 characters long.' }).trim(),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters long' })
    .trim(),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords don\'t match',
  path: ['confirmPassword'],
});

export type SignupSchemaType = z.infer<typeof SignupFormSchema>;

// export type SignupSchemaErrorType = z.inferFlattenedErrors<typeof SignupFormSchema>;
 
export type SignupSchemaErrorType = {
  errors: {
    [key: string]: string[] | undefined;
    email?: string[];
    password?: string[];
    name?: string[];
    confirmPassword?: string[];
  }
  message?: string[];
}