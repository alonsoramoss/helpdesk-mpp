import Link from "next/link";
import { MenuIcon, PanelsTopLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Menu } from "@/components/admin-panel/menu";
import { Panel, PanelHeader, PanelContent, PanelTrigger, PanelTitle } from "@/components/ui/panel";

export function MenuMovil() {
  return (
    <Panel>
      <PanelTrigger className="lg:hidden" asChild>
        <Button className="h-8" variant="outline" size="icon">
          <MenuIcon size={25} />
        </Button>
      </PanelTrigger>
      <PanelContent className="sm:w-72 px-3 h-full flex flex-col" side="left">
        <PanelHeader>
          <Button
            className="flex justify-center items-center pb-2 pt-1"
            variant="link"
            asChild
          >
            <Link href="/inicio" className="flex items-center text-center">
              <PanelTitle className="text-base font-black">SISTEMA DE HELP DESK <br /> Y REGISTRO US</PanelTitle>
            </Link>
          </Button>
        </PanelHeader>
        <Menu isOpen />
      </PanelContent>
    </Panel>
  );
}
