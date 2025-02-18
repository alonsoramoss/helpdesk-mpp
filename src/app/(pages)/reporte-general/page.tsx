import ProtectedRoute from "@/components/auth/protectedRoute";
import ReporteGeneralContent from "@/components/content/reporte-general-content/reporte-general-content";
import { RutaNavegacion, RutaList, RutaItem, RutaLink, RutaPage, RutaSeparator } from "@/components/ui/ruta-navegacion";
import Link from "next/link";
import { ContentLayout } from "@/components/admin-panel/content-layout";

export default function ReporteGeneralPage() {
  return (
    <ProtectedRoute>
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
    </ProtectedRoute>
  );
}
