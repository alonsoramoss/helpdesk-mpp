import { CambioTema } from "@/components/cambio-tema";
import { UserHeader } from "@/components/admin-panel/user-header";
import { MenuMovil } from "@/components/admin-panel/menu-movil";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  const fechaActual = new Date().toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <header className="sticky top-0 z-10 w-full bg-gradient-to-r from-primary to-indigo-700">
        <div className="mx-4 sm:mx-8 flex h-14 items-center">
          <div className="flex items-center space-x-4 lg:space-x-0">
            <MenuMovil />
            <h1 className="font-bold">{title}</h1>
          </div>
          <div className="flex flex-1 items-center justify-end">
            <CambioTema />
            <UserHeader />
          </div>
        </div>
      </header>
      
      <div className="bg-neutral-200 dark:bg-neutral-800 py-2">
        <p className="flex justify-center items-center font-medium">{fechaActual}</p>
      </div>
    </>
  );
}
