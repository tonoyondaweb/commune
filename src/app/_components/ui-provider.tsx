"use client";

import React from "react";

import { useRouter } from "next/navigation";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

type Props = {
  children: React.ReactNode;
};

export default function UIProvider({ children }: Props) {
  const router = useRouter();
  return (
    // eslint-disable-next-line @typescript-eslint/unbound-method
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider attribute="class" defaultTheme="system">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
