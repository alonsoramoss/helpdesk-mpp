import ProtectedRoute from "@/components/auth/protectedRoute";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { RutaNavegacion, RutaList, RutaItem, RutaLink, RutaPage, RutaSeparator } from "@/components/ui/ruta-navegacion";
import Link from "next/link";
import SoftwareContent from "@/components/content/inventario-equipo-tecnologico/software-content/software-content";

export default function Software() {
  return (
    <ProtectedRoute>
      <ContentLayout title="Software">
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
              <RutaPage>Software</RutaPage>
            </RutaItem>
          </RutaList>
        </RutaNavegacion>
        <SoftwareContent />
      </ContentLayout>
    </ProtectedRoute>
  );
}
