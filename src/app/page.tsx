import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import { Button, Link } from "@nextui-org/react";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-950 text-white">
      Commune
      {!session ? (
        <Button as={Link} href="/auth/signIn">
          Sign in
        </Button>
      ) : (
        <Button as={Link} href="/auth/signOut">
          Sign Out
        </Button>
      )}
    </main>
  );
}
