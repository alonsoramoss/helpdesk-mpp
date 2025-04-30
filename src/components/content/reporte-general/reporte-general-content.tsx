"use client"

import { Card, CardContent } from "@/components/ui/card";
import IncidentesAtencionBarra from "./charts/incidentes-atencion-barra";
import IncidentesEstadoPie from "./charts/incidentes-estado-pie";
import IncidentesLinea from "./charts/incidentes-linea";
import IncidentesEstadoArea from "./charts/incidentes-estado-area";

export default function ReporteGeneralContent() {
  return (
    <Card>
      <CardContent>
        <div className="my-5 text-center text-2xl font-bold">
          REPORTE DE INCIDENTES
        </div>
        <div className="flex flex-col gap-4">
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
