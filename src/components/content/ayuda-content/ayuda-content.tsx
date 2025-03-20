import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function AyudaContent() {
  return (
    <Card>
      <CardContent>
        <div className="flex">
          <div>
            AYUDA
            <Image
              src="/muniPisco.webp"
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
