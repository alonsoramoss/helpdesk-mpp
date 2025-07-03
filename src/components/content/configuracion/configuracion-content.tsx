"use client"

import { useStore } from "@/hooks/use-store";
import { useSidebar } from "@/hooks/use-sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
// import PersonasContent from "./configuracion-content/personasContent";
import UsuariosTable from "@/components/tablas/usuariosTable";

export default function ConfiguracionContent() {
  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) return null;
  const { settings, setSettings } = sidebar;
  return (
    <Card>
      <CardContent>
        <div className="flex items-center space-x-2">
          <Switch
            id="is-hover-open"
            onCheckedChange={(x) => setSettings({ isHoverOpen: x })}
            checked={settings.isHoverOpen}
          />
          <Label htmlFor="is-hover-open">Sidebar automático</Label>
        </div>
        <div className="flex justify-center">
          {/* <PersonasContent/> */}
          <UsuariosTable/>
        </div>
      </CardContent>
    </Card>
  );
}
