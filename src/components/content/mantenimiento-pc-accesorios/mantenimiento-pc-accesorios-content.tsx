import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function MantenimientoContent() {
  return (
    <Card>
      <CardContent>
        <div className="flex">
          <div>
            MANTENIMIENTO PC Y ACCESORIOS
            <Image
              src="/assets/municipalidad-pisco.webp"
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
