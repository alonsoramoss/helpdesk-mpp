"use client"

import { Card, CardContent } from "@/components/ui/card";
import IncidentesAlertas from "./incio-content/incidentes-alertas";
import IncidentesTable from "@/components/tablas/incidentesTable";

export default function InicioContent() {
  return (
    <Card>
      <CardContent>
        <IncidentesAlertas />
        <div className="flex justify-center">
          <IncidentesTable />
        </div>
      </CardContent>
    </Card>
  );
}
