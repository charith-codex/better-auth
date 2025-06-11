'use client';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { signOut } from '@/lib/auth-client';
import { toast } from 'sonner';
import { useState } from 'react';

export default function SignOutButton() {
  const [isPending, setIsPending] = useState(false);

  const router = useRouter();

  const handleClick = async () => {
    await signOut({
      fetchOptions: {
        onRequest: () => {
          setIsPending(true);
        },
        onResponse: () => {
          setIsPending(false);
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },
        onSuccess: () => {
          toast.success('You’ve logged out. See you soon!');
          router.push('/auth/login');
        },
      },
    });
  };

  return (
    <Button
      onClick={handleClick}
      size="sm"
      variant="destructive"
      disabled={isPending}
    >
      Sign OUt
    </Button>
  );
}
