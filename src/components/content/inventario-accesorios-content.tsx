import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";


export default function InventarioAccesoriosContent() {
  return (
    <Card>
      <CardContent>
        <div className="flex">
          <div>
            INVENTARIO ACCESORIOS
            <Image
              src="/MuniPisco.png"
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
