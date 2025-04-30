import ProtectedRoute from "@/components/auth/protectedRoute";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { RutaNavegacion, RutaList, RutaItem, RutaLink, RutaPage, RutaSeparator } from "@/components/ui/ruta-navegacion";
import Link from "next/link";
import InformeTecnicoContent from "@/components/content/informes-tecnicos/informes-tecnicos-content";

export default function InformeTecnicoPage() {
  return (
    <ProtectedRoute>
      <ContentLayout title="Informes Técnicos">
        <RutaNavegacion>
          <RutaList>
            <RutaItem>
              <RutaLink asChild>
                <Link href="/inicio">Inicio</Link>
              </RutaLink>
            </RutaItem>
            <RutaSeparator />
            <RutaItem>
              <RutaPage>Informes Técnicos</RutaPage>
            </RutaItem>
          </RutaList>
        </RutaNavegacion>
        <InformeTecnicoContent />
      </ContentLayout>
    </ProtectedRoute>
  );
}
