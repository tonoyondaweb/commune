import React from "react";

import { getServerAuthSession } from "@/server/auth";

import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/react";

import { ThemeSwitcher } from "../theme-switcher";
import UserButton from "./user-button";

export default async function NavContainer() {
  const session = await getServerAuthSession();

  return (
    <Navbar>
      <NavbarBrand>
        <p className="text-2xl font-semibold text-foreground">Commune.</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <ThemeSwitcher />
        {!session ? (
          <Button as={Link} href="/auth/signIn">
            Sign in
          </Button>
        ) : (
          <UserButton
            userImg={session.user.image!}
            userName={session.user.name!}
            email={session.user.email!}
          />
        )}
      </NavbarContent>
    </Navbar>
  );
}
