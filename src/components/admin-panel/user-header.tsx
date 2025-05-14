"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";
import { MenuDesplegable, MenuDesplegableContent, MenuDesplegableGroup, MenuDesplegableItem, MenuDesplegableLabel, MenuDesplegableSeparator, MenuDesplegableTrigger } from "@/components/ui/menu-desplegable";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";

export function UserHeader() {
  const router = useRouter();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <MenuDesplegable>
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <MenuDesplegableTrigger asChild>
              <Button
                variant="outline"
                className="relative h-8 w-8 rounded-full"
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage src="#" alt="Avatar" />
                  <AvatarFallback className="bg-transparent">
                    {user ? user.vch_nombre.charAt(0).toUpperCase() : "U"}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </MenuDesplegableTrigger>
          </TooltipTrigger>
          <TooltipContent side="bottom">Perfil</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <MenuDesplegableContent className="w-56" align="end" forceMount>
        <MenuDesplegableLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-4">
              {user ? user.vch_nombre : "Usuario"}
            </p>
            <p className="text-xs leading-4 text-muted-foreground">
              {user ? user.vch_email : "correo@ejemplo.com"}
            </p>
          </div>
        </MenuDesplegableLabel>
        <MenuDesplegableSeparator />
        <MenuDesplegableItem className="hover:cursor-pointer" onClick={handleLogout}>
          <LogOut className="w-4 h-4 mr-3 text-muted-foreground" />
            Cerrar Sesión
        </MenuDesplegableItem>
      </MenuDesplegableContent>
    </MenuDesplegable>
  );
}
