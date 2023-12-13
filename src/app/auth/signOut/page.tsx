import SignOutButtons from "@/app/_components/auth-buttons/sign-out";
import { getServerAuthSession } from "@/server/auth";
import { Divider } from "@nextui-org/react";
import { redirect } from "next/navigation";
import React from "react";

export default async function SignOutPage() {
  const session = await getServerAuthSession();

  if (!session) redirect("/");
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col gap-y-5">
        <p className="text-2xl font-semibold">Goodbye? 🙁</p>
        <div className="flex flex-col gap-y-5 rounded-xl border border-default p-5">
          <p>Are you sure you want to sign out of commune?</p>
          <SignOutButtons />
        </div>
      </div>
    </main>
  );
}
