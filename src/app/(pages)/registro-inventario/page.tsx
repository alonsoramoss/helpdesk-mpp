import ProtectedRoute from "@/components/auth/protectedRoute";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { RutaNavegacion, RutaList, RutaItem, RutaLink, RutaPage, RutaSeparator } from "@/components/ui/ruta-navegacion";
import Link from "next/link";
import RegistroInventarioContent from "@/components/content/registro-inventario-content/registro-inventario-content";

export default function RegistroInventarioPage() {
  return (
    <ProtectedRoute>
      <ContentLayout title="Registro de Inventario">
        <RutaNavegacion>
          <RutaList>
            <RutaItem>
              <RutaLink asChild>
                <Link href="/inicio">Inicio</Link>
              </RutaLink>
            </RutaItem>
            <RutaSeparator />
            <RutaItem>
              <RutaPage>Registro de Inventario</RutaPage>
            </RutaItem>
          </RutaList>
        </RutaNavegacion>
        <RegistroInventarioContent/>
      </ContentLayout>
    </ProtectedRoute>
  );
}
