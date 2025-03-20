import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function SoftwareContent() {
  return (
    <Card>
      <CardContent>
        <div className="flex">
          <div>
            SOFTWARE
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
