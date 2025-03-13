"use client"

import { useStore } from "@/hooks/use-store";
import { useSidebar } from "@/hooks/use-sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import UsuarioTable from "@/components/data/usuariosTable";

export default function ConfiguracionContent() {
  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) return null;
  const { settings, setSettings } = sidebar;
  return (
    <Card>
      <CardContent>
        <div className="flex">
          <TooltipProvider>
            <div className="mb-5">
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
        </div>
        <div className="flex justify-center">
          <UsuarioTable/>
        </div>
      </CardContent>
    </Card>
  );
}
