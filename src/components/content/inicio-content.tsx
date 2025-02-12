"use client"

import { Card, CardContent } from "@/components/ui/card";
import IncidentesTable from "../data/incidentesTable";
import IncidentesLinea from "../charts/incidentes-linea";
import IncidentesAtencionBarra from "../charts/incidentes-atencion-barra";
import IncidentesEstadoPie from "../charts/incidentes-estado-pie";

export default function InicioContent() {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row">
            <IncidentesTable/>
          </div>
          <div className="flex flex-col md:flex-row">
            <IncidentesLinea/>
            <IncidentesAtencionBarra/>
            <IncidentesEstadoPie/>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
