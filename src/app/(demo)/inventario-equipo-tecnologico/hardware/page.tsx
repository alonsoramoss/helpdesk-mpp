import Link from "next/link";

import HardwareContent from "@/components/content/hardware-content";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { RutaNavegacion, RutaList, RutaItem, RutaLink, RutaPage, RutaSeparator } from "@/components/ui/ruta-navegacion";

export default function HardwarePage() {
  return (
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
  );
}
