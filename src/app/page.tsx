import { GetStartedButton } from '@/components/GetStartedButton';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-dvh">
      <div className="flex justify-center items-center gap-8 flex-col">
        <h1 className="font-bold text-4xl">Better Auth</h1>

        <GetStartedButton />
      </div>
    </div>
  );
}
