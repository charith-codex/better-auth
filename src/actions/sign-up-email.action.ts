'use server';

import { auth } from '@/lib/auth';

export async function signUpEmailAction(formData: FormData) {
  const name = String(formData.get('name'));
  if (!name) return { error: 'Please enter your name' };

  const email = String(formData.get('email'));
  if (!email) return { error: 'Please enter email' };

  const password = String(formData.get('password'));
  if (!password) return { error: 'Please enter password' };

  try {
    await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
    });

    return { error: null };
  } catch (error) {
    if (error instanceof Error) {
      return { error: 'Oops! Something went wrong. Please try again.' };
    }
  }
  return { error: 'Internal Server Error' };
}
