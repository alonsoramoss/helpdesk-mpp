"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";
import { MenuDesplegable, MenuDesplegableContent, MenuDesplegableItem, MenuDesplegableLabel, MenuDesplegableSeparator, MenuDesplegableTrigger } from "@/components/ui/menu-desplegable";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";

export function UserHeader() {
  const router = useRouter();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    router.replace("/");
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
                  <AvatarFallback className="bg-transparent">
                    {user?.vch_nombre?.charAt(0)?.toUpperCase() ?? "U"}
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
            <p className="text-sm font-medium leading-none">
              {user?.vch_nombre ?? "Usuario"}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {user?.vch_email ?? "correo@correo.com"}
            </p>
          </div>
        </MenuDesplegableLabel>
        <MenuDesplegableSeparator />
        <MenuDesplegableItem className="font-medium hover:cursor-pointer" onClick={handleLogout}>
          <LogOut className="w-4 h-4 mr-3" />
            Cerrar sesión
        </MenuDesplegableItem>
      </MenuDesplegableContent>
    </MenuDesplegable>
  );
}
