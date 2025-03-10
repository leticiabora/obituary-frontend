import { z } from 'zod';

export const LoginFormSchema = z.object({
  email: z
    .string()
    .email({ message: 'Please enter a valid email.' })
    .min(5, { message: 'Email must be at least 5 characters long.' })
    .trim(),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters long' })
    .trim(),
});

export type LoginSchemaType = z.infer<typeof LoginFormSchema>;

export type LoginSchemaErrorType = {
  errors?: {
    [key: string]: string[] | undefined;
    email?: string[];
    password?: string[];
    name?: string[];
    confirmPassword?: string[];
  };
  message?: string;
};

export const SignupFormSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: 'Name must be at least 2 characters long.' })
      .trim(),
    email: z
      .string()
      .email({ message: 'Please enter a valid email.' })
      .min(5, { message: 'Email must be at least 5 characters long.' })
      .trim(),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters long' })
      .trim(),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords don\'t match',
    path: ['confirmPassword'],
  });

export type SignupSchemaType = z.infer<typeof SignupFormSchema>;

export type AuthSchemaErrorType = {
  errors?: {
    [key: string]: string[] | undefined;
    email?: string[];
    password?: string[];
    name?: string[];
    confirmPassword?: string[];
  };
  message?: string;
};

// const ACCEPTED_IMAGE_TYPES = [
//   'image/jpeg',
//   'image/jpg',
//   'image/png',
//   'image/webp',
// ];

export const CreateMemorySchema = z.object({
  title: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long.' })
    .trim(),
  description: z
    .string()
    .min(5, { message: 'Description must be at least 5 characters long.' })
    .trim(),
  image: z
    .any()
    .refine((file) => file && file.size >= 1, {
      message: 'Image is required.',
    }),
});

export type CreateMemory = z.infer<typeof CreateMemorySchema>;

export type MemorySchemaErrorType = {
  errors?: {
    [key: string]: string[] | undefined;
    title?: string[];
    description?: string[];
    image?: string[];
  };
  message?: string;
};

export const CreateCommentSchema = z.object({
  description: z
    .string()
    .min(5, { message: 'Description must be at least 5 characters long.' })
    .trim(),
});

export type CommentSchemaError = {
  description?: string[];
  errors?: {
    [key: string]: string[] | undefined;
    description?: string[];
  };
  message?: string;
};
