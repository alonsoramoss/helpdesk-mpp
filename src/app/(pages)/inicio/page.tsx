import ProtectedRoute from "@/components/auth/protectedRoute";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { RutaNavegacion, RutaItem, RutaLink, RutaList } from "@/components/ui/ruta-navegacion";
import Link from "next/link";
import InicioContent from "@/components/content/inicio-content/inicio-content";

export default function InicioPage() {
  return (
    <ProtectedRoute>
      <ContentLayout title="Inicio">
        <RutaNavegacion>
          <RutaList>
            <RutaItem>
              <RutaLink asChild>
                <Link href="/inicio">Inicio</Link>
              </RutaLink>
            </RutaItem>
          </RutaList>
        </RutaNavegacion>
        <InicioContent/>
      </ContentLayout>
    </ProtectedRoute>
  );
}
