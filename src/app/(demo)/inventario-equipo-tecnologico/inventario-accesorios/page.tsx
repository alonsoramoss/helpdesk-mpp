import Link from "next/link";

import InventarioAccesoriosContent from "@/components/content/inventario-accesorios-content";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { RutaNavegacion, RutaList, RutaItem, RutaLink, RutaPage, RutaSeparator } from "@/components/ui/ruta-navegacion";

export default function InventarioAccesoriosPage() {
  return (
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
  );
}
