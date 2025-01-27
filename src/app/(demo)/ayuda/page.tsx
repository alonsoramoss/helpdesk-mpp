import Link from "next/link";

import AyudaContent from "@/components/content/ayuda-content";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { RutaNavegacion, RutaList, RutaItem, RutaLink, RutaPage, RutaSeparator } from "@/components/ui/ruta-navegacion";

export default function AyudaPage() {
  return (
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
  );
}
