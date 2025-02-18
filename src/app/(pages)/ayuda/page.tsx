import ProtectedRoute from "@/components/auth/protectedRoute";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { RutaNavegacion, RutaList, RutaItem, RutaLink, RutaPage, RutaSeparator } from "@/components/ui/ruta-navegacion";
import Link from "next/link";
import AyudaContent from "@/components/content/ayuda-content/ayuda-content";

export default function AyudaPage() {
  return (
    <ProtectedRoute>
      <ContentLayout title="Ayuda">
        <RutaNavegacion>
          <RutaList>
            <RutaItem>
              <RutaLink asChild>
                <Link href="/inicio">Inicio</Link>
              </RutaLink>
            </RutaItem>
            <RutaSeparator />
            <RutaItem>
              <RutaPage>Ayuda</RutaPage>
            </RutaItem>
          </RutaList>
        </RutaNavegacion>
        <AyudaContent />
      </ContentLayout>
    </ProtectedRoute>
  );
}
