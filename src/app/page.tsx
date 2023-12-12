import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import { Button, Link } from "@nextui-org/react";
import { ThemeSwitcher } from "./_components/theme-switcher";
import SignOutButton from "./_components/auth-buttons/sign-out";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-y-4">
        <span className="text-5xl">Commune</span>
        {!session ? (
          <Button as={Link} href="/auth/signIn">
            Sign in
          </Button>
        ) : (
          <SignOutButton />
        )}
        <ThemeSwitcher />
      </div>
    </main>
  );
}
