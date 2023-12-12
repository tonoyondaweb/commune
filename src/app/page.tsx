import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-y-4">
        <p className="text-5xl">Commune</p>
        {session ? (
          <p>Hey, {session?.user.name}! Welcome to Commune.</p>
        ) : (
          <p>Hey, welcome! Please sign in to continue!</p>
        )}
      </div>
    </main>
  );
}
