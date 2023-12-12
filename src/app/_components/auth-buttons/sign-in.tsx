"use client";

import React from "react";

import { type BuiltInProviderType } from "next-auth/providers/index";
import { signIn, type LiteralUnion } from "next-auth/react";

import { Button } from "@nextui-org/react";
import { type TablerIconsProps } from "@tabler/icons-react";

type Props = {
  providerId: LiteralUnion<BuiltInProviderType, string>;
  providerName: string;
  icon: React.ReactNode;
  color: string;
};

export default function SignInButton({
  providerId,
  providerName,
  icon,
  color,
}: Props) {
  return (
    <Button
      className={color}
      startContent={icon}
      onClick={() => signIn(providerId)}
    >
      Sign In with {providerName}
    </Button>
  );
}
