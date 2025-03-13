import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function TicketContent() {
  return (
    <Card>
      <CardContent>
        <div className="flex">
          <div>
            TICKETS
            <Image
              src="/muniPisco.png"
              alt="Municipalidad de Pisco"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
