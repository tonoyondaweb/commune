"use client";

import React from "react";

import { type BuiltInProviderType } from "next-auth/providers/index";
import { signIn, type LiteralUnion } from "next-auth/react";

import { Button } from "@nextui-org/react";

type Props = {
  providerId: LiteralUnion<BuiltInProviderType, string>;
  providerName: string;
};

export default function SignInButton({ providerId, providerName }: Props) {
  return (
    <Button onClick={() => signIn(providerId)}>
      Sign In with {providerName}
    </Button>
  );
}
