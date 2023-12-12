import React from "react";

import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";

import SignInButton from "@/app/_components/auth-buttons/sign-in";
import {
  IconBrandDiscordFilled,
  IconBrandGoogleFilled,
} from "@tabler/icons-react";
import { IconBrandGithubFilled } from "@tabler/icons-react";
import { Divider } from "@nextui-org/react";

export default async function SignInPage() {
  const session = await getServerAuthSession();
  if (session) redirect("/");

  const providers = [
    {
      id: "github",
      name: "GitHub",
      color: "bg-github",
      icon: <IconBrandGithubFilled />,
    },
    {
      id: "google",
      name: "Google",
      color: "bg-google",
      icon: <IconBrandGoogleFilled />,
    },
    {
      id: "discord",
      name: "Discord",
      color: "bg-discord",
      icon: <IconBrandDiscordFilled />,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="rounded-xl border border-default-100 py-10">
        <div className="flex flex-col gap-y-3 text-center">
          <h1 className="text-5xl">Commune.</h1>
          <span className="text-sm">
            Your Space, Your Voice, Your Community
          </span>
        </div>
        <Divider className="my-5" />
        <div className="mx-10 flex flex-col gap-y-5">
          <span>Sign in with your preffered auth service</span>
          {providers.map((provider) => (
            <SignInButton
              providerId={provider.id}
              providerName={provider.name}
              icon={provider.icon}
              color={provider.color}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
