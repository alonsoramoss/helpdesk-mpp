import ProtectedRoute from "@/components/auth/protectedRoute";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { RutaNavegacion, RutaList, RutaItem, RutaLink, RutaPage, RutaSeparator } from "@/components/ui/ruta-navegacion";
import Link from "next/link";
import InventarioMaterialesContent from "@/components/content/inventario-equipo-tecnologico/inventario-materiales-content";

export default function InventarioMaterialesPage() {
  return (
    <ProtectedRoute>
      <ContentLayout title="Inventario de Materiales">
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
              <RutaPage>Materiales</RutaPage>
            </RutaItem>
          </RutaList>
        </RutaNavegacion>
        <InventarioMaterialesContent />
      </ContentLayout>
    </ProtectedRoute>
  );
}
