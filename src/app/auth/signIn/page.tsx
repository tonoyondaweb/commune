import SignInButton from "@/app/_components/auth-buttons/sign-in";
import { getServerAuthSession } from "@/server/auth";
import { getProviders } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

export default async function SignInPage() {
  const session = await getServerAuthSession();
  const providers = await getProviders();

  if (session) redirect("/");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-950 text-white">
      <div className="flex flex-col gap-y-2">
        {Object.values(providers!).map((provider) => (
          <SignInButton
            key={provider.id}
            providerId={provider.id}
            providerName={provider.name}
          />
        ))}
      </div>
    </main>
  );
}
