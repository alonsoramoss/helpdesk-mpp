import ProtectedRoute from "@/components/auth/protectedRoute";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { RutaNavegacion, RutaList, RutaItem, RutaLink, RutaPage, RutaSeparator } from "@/components/ui/ruta-navegacion";
import Link from "next/link";
import RegistroEquiposPerifericosContent from "@/components/content/registro/registro-equipos-perifericos-content";

export default function RegistroEquiposPerifericosPage() {
  return (
    <ProtectedRoute>
      <ContentLayout title="Registro de Equipos y Periféricos">
        <RutaNavegacion>
          <RutaList>
            <RutaItem>
              <RutaLink asChild>
                <Link href="/inicio">Inicio</Link>
              </RutaLink>
            </RutaItem>
            <RutaSeparator />
            <RutaItem>
              <RutaLink>Registro</RutaLink>
            </RutaItem>
            <RutaSeparator />
            <RutaItem>
              <RutaPage>Equipos y Periféricos</RutaPage>
            </RutaItem>
          </RutaList>
        </RutaNavegacion>
        <RegistroEquiposPerifericosContent />
      </ContentLayout>
    </ProtectedRoute>
  );
}
