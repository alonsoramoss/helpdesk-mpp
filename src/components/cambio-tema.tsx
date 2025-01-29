"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";

export function CambioTema() {
  const { setTheme, theme } = useTheme();

  const handleThemeChange = () => {
    const root = document.documentElement;
    root.classList.add("desactivar-transicion");

    setTheme(theme === "dark" ? "light" : "dark");

    setTimeout(() => {
      root.classList.remove("desactivar-transicion");
    }, 100);
  };

  return (
    <TooltipProvider disableHoverableContent>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Button
            className="rounded-full w-8 h-8 bg-background mr-2"
            variant="outline"
            size="icon"
            onClick={handleThemeChange}
          >
            <Sun className="w-[1.2rem] h-[1.2rem] dark:hidden" />
            <Moon className="absolute w-[1.2rem] h-[1.2rem] dark:block hidden" />
            <span className="sr-only">Cambiar Tema</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Cambiar Tema</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
