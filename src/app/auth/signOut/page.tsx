import SignOutButton from "@/app/_components/auth-buttons/sing-out";
import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function SignOutPage() {
  const session = await getServerAuthSession();

  if (!session) redirect("/");
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-950 text-white">
      <SignOutButton />
    </main>
  );
}
