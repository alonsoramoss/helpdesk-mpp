"use client";

import Link from "next/link";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export function UserHeader() {
  return (
    <DropdownMenu>
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="relative h-8 w-8 rounded-full"
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage src="#" alt="Avatar" />
                  <AvatarFallback className="bg-transparent">U</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent side="bottom">Perfil</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-4">Usuario</p>
            <p className="text-sm font-medium leading-4">Cargo</p>
            <p className="text-xs leading-4 text-muted-foreground">
              usuario@muni.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="hover:cursor-pointer" onClick={() => {}}>
          <LogOut className="w-4 h-4 mr-3 text-muted-foreground" />
          Cerrar Sesión
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
