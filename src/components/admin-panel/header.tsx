import { CambioTema } from "@/components/cambio-tema";
import { UserHeader } from "@/components/admin-panel/user-header";
import { SheetMenu } from "@/components/admin-panel/sheet-menu";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 w-full shadow bg-primary dark:shadow-secondary">
      <div className="mx-4 sm:mx-8 flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <SheetMenu />
          <h1 className="font-bold">{title}</h1>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <CambioTema />
          <UserHeader />
        </div>
      </div>
    </header>
  );
}
