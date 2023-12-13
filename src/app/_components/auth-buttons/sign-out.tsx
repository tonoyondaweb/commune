"use client";

import React from "react";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Button } from "@nextui-org/react";

export default function SignOutButtons() {
  const router = useRouter();

  return (
    <div className="flex justify-end gap-x-2">
      <Button onClick={() => router.back()}>No</Button>
      <Button color="danger" onClick={() => signOut()}>
        Sign out
      </Button>
    </div>
  );
}
