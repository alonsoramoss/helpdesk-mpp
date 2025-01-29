import Link from "next/link";

import { ContentLayout } from "@/components/admin-panel/content-layout";
import { RutaNavegacion, RutaList, RutaItem, RutaLink, RutaPage, RutaSeparator } from "@/components/ui/ruta-navegacion";

export default function InventarioPage() {
  return (
    <ContentLayout title="Inventario de Equipo Tecnológico">
      <RutaNavegacion>
        <RutaList>
          <RutaItem>
            <RutaLink asChild>
              <Link href="/inicio">Inicio</Link>
            </RutaLink>
          </RutaItem>
          <RutaSeparator />
          <RutaItem>
            <RutaPage>Inventario de Equipo Tecnológico</RutaPage>
          </RutaItem>
        </RutaList>
      </RutaNavegacion>
    </ContentLayout>
  );
}
