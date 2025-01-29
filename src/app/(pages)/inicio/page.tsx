"use client";
import Link from "next/link";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { RutaNavegacion, RutaItem, RutaLink, RutaList } from "@/components/ui/ruta-navegacion";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";

export default function InicioPage() {
  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) return null;
  const { settings, setSettings } = sidebar;
  return (
    <ContentLayout title="Inicio">
      <RutaNavegacion>
        <RutaList>
          <RutaItem>
            <RutaLink asChild>
              <Link href="/inicio">Inicio</Link>
            </RutaLink>
          </RutaItem>
        </RutaList>
      </RutaNavegacion>
      <TooltipProvider>
        <div className="flex gap-6 mt-6">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center space-x-2">
                <Switch
                  id="is-hover-open"
                  onCheckedChange={(x) => setSettings({ isHoverOpen: x })}
                  checked={settings.isHoverOpen}
                />
                <Label htmlFor="is-hover-open">Sidebar Automático</Label>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Al pasar el cursor sobre la barra lateral en estado mini, se abrirá</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </ContentLayout>
  );
}
