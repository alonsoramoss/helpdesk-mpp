import ProtectedRoute from "@/components/auth/protectedRoute";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { RutaNavegacion, RutaList, RutaItem, RutaLink, RutaPage, RutaSeparator } from "@/components/ui/ruta-navegacion";
import Link from "next/link";
import MaterialesContent from "@/components/content/registro/registro-materiales-content/materiales-content";

export default function MaterialesPage() {
  return (
    <ProtectedRoute>
      <ContentLayout title="Materiales">
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
              <RutaPage>Materiales</RutaPage>
            </RutaItem>
          </RutaList>
        </RutaNavegacion>
        <MaterialesContent />
      </ContentLayout>
    </ProtectedRoute>
  );
}
