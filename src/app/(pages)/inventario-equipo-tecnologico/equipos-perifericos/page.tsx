import ProtectedRoute from "@/components/auth/protectedRoute";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { RutaNavegacion, RutaList, RutaItem, RutaLink, RutaPage, RutaSeparator } from "@/components/ui/ruta-navegacion";
import Link from "next/link";
import InventarioEquiposPerifericosContent from "@/components/content/inventario-equipo-tecnologico/inventario-equipos-perifericos-content";

export default function InventarioEquiposPerifericosPage() {
  return (
    <ProtectedRoute>
      <ContentLayout title="Inventario de Equipos y Periféricos">
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
              <RutaPage>Equipos y Periféricos</RutaPage>
            </RutaItem>
          </RutaList>
        </RutaNavegacion>
        <InventarioEquiposPerifericosContent />
      </ContentLayout>
    </ProtectedRoute>
  );
}
