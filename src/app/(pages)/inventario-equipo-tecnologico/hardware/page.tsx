import ProtectedRoute from "@/components/auth/protectedRoute";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { RutaNavegacion, RutaList, RutaItem, RutaLink, RutaPage, RutaSeparator } from "@/components/ui/ruta-navegacion";
import Link from "next/link";
import HardwareContent from "@/components/content/inventario-equipo-tecnologico-content/hardware-content";

export default function HardwarePage() {
  return (
    <ProtectedRoute>
      <ContentLayout title="Hardware">
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
              <RutaPage>Hardware</RutaPage>
            </RutaItem>
          </RutaList>
        </RutaNavegacion>
        <HardwareContent />
      </ContentLayout>
    </ProtectedRoute>
  );
}
