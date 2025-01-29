import Link from "next/link";

import InformeTecnicoContent from "@/components/content/informes-tecnicos-content";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { RutaNavegacion, RutaList, RutaItem, RutaLink, RutaPage, RutaSeparator } from "@/components/ui/ruta-navegacion";

export default function InformeTecnicoPage() {
  return (
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
  );
}
