import ProtectedRoute from "@/components/auth/protectedRoute";
import TicketContent from "@/components/content/tickets-content";
import { RutaNavegacion, RutaList, RutaItem, RutaLink, RutaPage, RutaSeparator } from "@/components/ui/ruta-navegacion";
import Link from "next/link";
import { ContentLayout } from "@/components/admin-panel/content-layout";

export default function TicketPage() {
  return (
    <ProtectedRoute>
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
    </ProtectedRoute>
  );
}
