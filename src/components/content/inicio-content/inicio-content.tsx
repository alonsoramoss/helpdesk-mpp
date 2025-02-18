"use client"

import { Card, CardContent } from "@/components/ui/card";
import IncidentesAlertas from "./charts/incidentes-alertas";
import IncidentesTable from "../../data/incidentesTable";
import IncidentesLinea from "./charts/incidentes-linea";
import IncidentesAtencionBarra from "./charts/incidentes-atencion-barra";
import IncidentesEstadoPie from "./charts/incidentes-estado-pie";
import IncidentesEstadoArea from "./charts/incidentes-estado-area";

export default function InicioContent() {
  return (
    <Card>
      <CardContent>
        <IncidentesAlertas />
        <div className="flex flex-col gap-4">
          <div className="w-full">
            <IncidentesTable />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <IncidentesAtencionBarra  />
            <IncidentesEstadoPie  />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <IncidentesLinea  />
            <IncidentesEstadoArea  />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
