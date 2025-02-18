import ProtectedRoute from "@/components/auth/protectedRoute";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { RutaNavegacion, RutaList, RutaItem, RutaLink, RutaPage, RutaSeparator } from "@/components/ui/ruta-navegacion";
import Link from "next/link";
import ConfiguracionContent from "@/components/content/configuracion-content/configuracion-content";

export default function ConfiguracionPage() {
  return (
    <ProtectedRoute>
      <ContentLayout title="Configuración">
        <RutaNavegacion>
          <RutaList>
            <RutaItem>
              <RutaLink asChild>
                <Link href="/inicio">Inicio</Link>
              </RutaLink>
            </RutaItem>
            <RutaSeparator />
            <RutaItem>
              <RutaPage>Configuración</RutaPage>
            </RutaItem>
          </RutaList>
        </RutaNavegacion>
        <ConfiguracionContent />
      </ContentLayout>
    </ProtectedRoute>
  );
}
