import Link from "next/link";

import ReporteGeneralContent from "@/components/content/reporte-general-content";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { RutaNavegacion, RutaList, RutaItem, RutaLink, RutaPage, RutaSeparator } from "@/components/ui/ruta-navegacion";

export default function ReporteGeneralPage() {
  return (
    <ContentLayout title="Reporte General">
      <RutaNavegacion>
        <RutaList>
          <RutaItem>
            <RutaLink asChild>
              <Link href="/inicio">Inicio</Link>
            </RutaLink>
          </RutaItem>
          <RutaSeparator />
          <RutaItem>
            <RutaPage>Reporte General</RutaPage>
          </RutaItem>
        </RutaList>
      </RutaNavegacion>
      <ReporteGeneralContent />
    </ContentLayout>
  );
}
