import Link from "next/link";

import ReportesEstadisticasContent from "@/components/content/reportes-estadisticas-content";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { RutaNavegacion, RutaList, RutaItem, RutaLink, RutaPage, RutaSeparator } from "@/components/ui/ruta-navegacion";

export default function ReportesEstadisticasPage() {
  return (
    <ContentLayout title="Reportes y Estadísticas">
      <RutaNavegacion>
        <RutaList>
          <RutaItem>
            <RutaLink asChild>
              <Link href="/inicio">Inicio</Link>
            </RutaLink>
          </RutaItem>
          <RutaSeparator />
          <RutaItem>
            <RutaLink>Inventario de Equipo Tecnológico</RutaLink>
          </RutaItem>
          <RutaSeparator />
          <RutaItem>
            <RutaPage>Reportes y Estadísticas</RutaPage>
          </RutaItem>
        </RutaList>
      </RutaNavegacion>
      <ReportesEstadisticasContent />
    </ContentLayout>
  );
}
