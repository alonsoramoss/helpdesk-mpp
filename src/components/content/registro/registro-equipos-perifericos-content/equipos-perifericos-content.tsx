import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";


export default function RegistroEquiposPerifericosContent() {
  return (
    <Card>
      <CardContent>
        <div className="flex">
          <div>
            REGISTRO DE EQUIPOS Y PERIFÉRICOS
            <Image
              src="/assets/muniPisco.webp"
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
