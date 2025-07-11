
"use client"

import { useEffect, useState } from "react";
import { DateTime } from "luxon";
import { UserHeader } from "@/components/admin-panel/user-header";
import { MenuMovil } from "@/components/admin-panel/menu-movil";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  const [fechaActual, setFechaActual] = useState("");

  useEffect(() => {
    const fecha = DateTime.now()
      .setZone("America/Lima")
      .setLocale("es")
      .toLocaleString({
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
      });

    setFechaActual(fecha);
  }, []);

  return (
    <header className="sticky top-0 z-10 w-full bg-[#00bff9]">
      <div className="mx-4 sm:mx-8 flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <MenuMovil />
          <h1 className="font-bold">{title}</h1>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <UserHeader />
        </div>
      </div>
      <div className="bg-neutral-200 py-1">
        <p className="flex justify-center items-center font-medium">{fechaActual}</p>
      </div>
    </header>
  );
}
