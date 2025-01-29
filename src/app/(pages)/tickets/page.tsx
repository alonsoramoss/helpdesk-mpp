import Link from "next/link";

import TicketContent from "@/components/content/tickets-content";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { RutaNavegacion, RutaList, RutaItem, RutaLink, RutaPage, RutaSeparator } from "@/components/ui/ruta-navegacion";

export default function TicketPage() {
  return (
    <ContentLayout title="Tickets">
      <RutaNavegacion>
        <RutaList>
          <RutaItem>
            <RutaLink asChild>
              <Link href="/inicio">Inicio</Link>
            </RutaLink>
          </RutaItem>
          <RutaSeparator />
          <RutaItem>
            <RutaPage>Tickets</RutaPage>
          </RutaItem>
        </RutaList>
      </RutaNavegacion>
      <TicketContent />
    </ContentLayout>
  );
}
