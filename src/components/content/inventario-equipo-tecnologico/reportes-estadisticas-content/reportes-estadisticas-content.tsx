import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";


export default function ReportesEstadisticasContent() {
  return (
    <Card>
      <CardContent>
        <div className="flex">
          <div>
            REPORTES Y ESTADISTICAS
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
