"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { Button } from "./ui/button";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      size="icon"
      variant="ghost"
      className="w-8 h-8"
    >
      {theme === "dark" ? <Moon /> : <Sun />}
    </Button>
  );
}
