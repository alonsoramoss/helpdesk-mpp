"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Dot, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";
import { Colapsable, ColapsableContent, ColapsableTrigger } from "@/components/ui/colapsable";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { MenuDesplegable, MenuDesplegableItem, MenuDesplegableLabel, MenuDesplegableTrigger, MenuDesplegableContent, MenuDesplegableSeparator } from "@/components/ui/menu-desplegable";
import { usePathname } from "next/navigation";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
  disabled?: boolean;
};

interface MenuColapsableButtonProps {
  icon: LucideIcon;
  label: string;
  active: boolean;
  submenus: Submenu[];
  isOpen: boolean | undefined;
}

export function SubMenuButton({ icon: Icon, label, active, submenus, isOpen }: MenuColapsableButtonProps) {
  const pathname = usePathname();
  const isSubmenuActive = submenus.some((submenu) =>
    submenu.active === undefined ? submenu.href === pathname : submenu.active
  );
  const [isCollapsed, setIsCollapsed] = useState<boolean>(isSubmenuActive);

  return isOpen ? (
    <Colapsable
      open={isCollapsed}
      onOpenChange={setIsCollapsed}
      className="w-full"
    >
      <ColapsableTrigger
        className="[&[data-state=open]>div>div>svg]:rotate-180 mb-1"
        asChild
      >
        <Button
          variant={isSubmenuActive ? "secondary" : "ghost"}
          className="w-full justify-start h-10"
        >
          <div className="w-full items-center flex justify-between">
            <div className="flex items-center">
              <span className="mr-4">
                <Icon size={18} />
              </span>
              <p
                className={cn(
                  "max-w-[150px] truncate",
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-96 opacity-0"
                )}
              >
                {label}
              </p>
            </div>
            <div
              className={cn(
                "whitespace-nowrap",
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-96 opacity-0"
              )}
            >
              <ChevronDown
                size={18}
                className="transition-transform duration-200"
              />
            </div>
          </div>
        </Button>
      </ColapsableTrigger>
      <ColapsableContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
        {submenus.map(({ href, label, active, disabled }, index) => (
          <Button
            key={index}
            variant={
              disabled
                ? "ghost"
                : (active === undefined && pathname === href) || active
                ? "secondary"
                : "ghost"
            }
            className={cn(
              "w-full justify-start h-10 mb-1",
              disabled && "opacity-50 cursor-not-allowed"
            )}
            asChild
            disabled={disabled}
          >
            {disabled ? (
              <div className="flex items-center">
                <span className="mr-4 ml-2">
                  <Dot size={18} />
                </span>
                <p
                  className={cn(
                    "max-w-[170px] truncate",
                    isOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-96 opacity-0"
                  )}
                >
                  {label}
                </p>
              </div>
            ) : (
              <Link href={href}>
                <span className="mr-4 ml-2">
                  <Dot size={18} />
                </span>
                <p
                  className={cn(
                    "max-w-[170px] truncate",
                    isOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-96 opacity-0"
                  )}
                >
                  {label}
                </p>
              </Link>
            )}
          </Button>
        ))}
      </ColapsableContent>
    </Colapsable>
  ) : (
    <MenuDesplegable>
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <MenuDesplegableTrigger asChild>
              <Button
                variant={isSubmenuActive ? "secondary" : "ghost"}
                className="w-full justify-start h-10 mb-1"
              >
                <div className="w-full items-center flex justify-between">
                  <div className="flex items-center">
                    <span className={cn(isOpen === false ? "" : "mr-4")}>
                      <Icon size={18} />
                    </span>
                    <p
                      className={cn(
                        "max-w-[200px] truncate",
                        isOpen === false ? "opacity-0" : "opacity-100"
                      )}
                    >
                      {label}
                    </p>
                  </div>
                </div>
              </Button>
            </MenuDesplegableTrigger>
          </TooltipTrigger>
          <TooltipContent className="mt-1" side="right" align="start" alignOffset={2}>
            {label}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <MenuDesplegableContent side="right" sideOffset={25} align="start">
        <MenuDesplegableLabel className="max-w-[190px]">
          {label}
        </MenuDesplegableLabel>
        <MenuDesplegableSeparator />
        {submenus.map(({ href, label, active, disabled }, index) =>
          disabled ? (
            <div
              key={index}
              className="cursor-not-allowed opacity-50 mt-1 max-w-[180px] truncate px-3 py-1 text-sm"
            >
              {label}
            </div>
          ) : (
            <MenuDesplegableItem key={index} asChild>
              <Link
                className={`cursor-pointer mt-1 ${
                  ((active === undefined && pathname === href) || active) &&
                  "bg-primary"
                }`}
                href={href}
              >
                <p className="max-w-[180px] truncate">{label}</p>
              </Link>
            </MenuDesplegableItem>
          )
        )}
        <DropdownMenuArrow className="fill-border" />
      </MenuDesplegableContent>
    </MenuDesplegable>
  );
}
