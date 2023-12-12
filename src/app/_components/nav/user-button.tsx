"use client";

import React from "react";

import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

type prop = {
  userImg: string;
  userName: string;
  email: string;
};

export default function UserButton({ userImg, userName, email }: prop) {
  const [firstName, lastName] = userName.split(" ");
  const avatarFallback = `${firstName?.charAt(0).toUpperCase()} ${
    lastName ? `${lastName.charAt(0).toUpperCase()}` : ""
  }`;
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          as="button"
          src={userImg}
          aria-label="User menu"
          name={avatarFallback}
        />
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem key="profile">
          <p className="font-semibold">{userName}</p>
          <p>{email}</p>
        </DropdownItem>
        <DropdownItem
          className="text-danger"
          color="danger"
          key="sign_out"
          href="/auth/signOut"
        >
          Sign out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
