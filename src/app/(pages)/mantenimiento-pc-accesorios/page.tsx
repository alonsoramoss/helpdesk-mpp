import ProtectedRoute from "@/components/auth/protectedRoute";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { RutaNavegacion, RutaList, RutaItem, RutaLink, RutaPage, RutaSeparator } from "@/components/ui/ruta-navegacion";
import Link from "next/link";
import MantenimientoContent from "@/components/content/mantenimiento-pc-accesorios-content";

export default function MantenimientoPage() {
  return (
    <ProtectedRoute>
      <ContentLayout title="Mantenimiento de PC y Accesorios">
        <RutaNavegacion>
          <RutaList>
            <RutaItem>
              <RutaLink asChild>
                <Link href="/inicio">Inicio</Link>
              </RutaLink>
            </RutaItem>
            <RutaSeparator />
            <RutaItem>
              <RutaPage>Mantenimiento de pc y accesorios</RutaPage>
            </RutaItem>
          </RutaList>
        </RutaNavegacion>
        <MantenimientoContent />
      </ContentLayout>
    </ProtectedRoute>
  );
}
