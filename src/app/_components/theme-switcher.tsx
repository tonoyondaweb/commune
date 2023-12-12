// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import {
  IconDeviceDesktop,
  IconMoonFilled,
  IconSunFilled,
} from "@tabler/icons-react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly>
          {theme === "light" && <IconSunFilled />}
          {theme === "dark" && <IconMoonFilled />}
          {theme === "system" && <IconDeviceDesktop />}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Theme dropdown menu">
        <DropdownItem
          key="light"
          startContent={<IconSunFilled />}
          onClick={() => setTheme("light")}
        >
          Light
        </DropdownItem>
        <DropdownItem
          key="light"
          startContent={<IconMoonFilled />}
          onClick={() => setTheme("dark")}
        >
          Dark
        </DropdownItem>
        <DropdownItem
          key="light"
          startContent={<IconDeviceDesktop />}
          onClick={() => setTheme("system")}
        >
          System
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
