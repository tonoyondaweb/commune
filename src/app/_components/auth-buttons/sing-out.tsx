"use client";

import React from "react";

import { Button } from "@nextui-org/react";
import { signOut } from "next-auth/react";
export default function SignOutButton() {
  return <Button onClick={() => signOut()}>Sign out</Button>;
}
