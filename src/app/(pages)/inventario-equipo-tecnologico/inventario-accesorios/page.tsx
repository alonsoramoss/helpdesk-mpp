import ProtectedRoute from "@/components/auth/protectedRoute";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { RutaNavegacion, RutaList, RutaItem, RutaLink, RutaPage, RutaSeparator } from "@/components/ui/ruta-navegacion";
import Link from "next/link";
import InventarioAccesoriosContent from "@/components/content/inventario-equipo-tecnologico/inventario-accesorios-content/inventario-accesorios-content";

export default function InventarioAccesoriosPage() {
  return (
    <ProtectedRoute>
      <ContentLayout title="Inventario y Accesorios">
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
              <RutaPage>Inventario y Accesorios</RutaPage>
            </RutaItem>
          </RutaList>
        </RutaNavegacion>
        <InventarioAccesoriosContent />
      </ContentLayout>
    </ProtectedRoute>
  );
}
