import Link from "next/link";

import ConfiguracionContent from "@/components/content/configuracion-content";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { RutaNavegacion, RutaList, RutaItem, RutaLink, RutaPage, RutaSeparator } from "@/components/ui/ruta-navegacion";

export default function ConfiguracionPage() {
  return (
    <ContentLayout title="Configuración">
      <RutaNavegacion>
        <RutaList>
          <RutaItem>
            <RutaLink asChild>
              <Link href="/inicio">Inicio</Link>
            </RutaLink>
          </RutaItem>
          <RutaSeparator />
          <RutaItem>
            <RutaPage>Configuración</RutaPage>
          </RutaItem>
        </RutaList>
      </RutaNavegacion>
      <ConfiguracionContent />
    </ContentLayout>
  );
}
