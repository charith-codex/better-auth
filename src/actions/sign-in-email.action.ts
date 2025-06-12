'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

export async function signInEmailAction(formData: FormData) {
  const email = String(formData.get('email'));
  if (!email) return { error: 'Please enter email' };

  const password = String(formData.get('password'));
  if (!password) return { error: 'Please enter password' };

  try {
    await auth.api.signInEmail({
      headers: await headers(),
      body: {
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
