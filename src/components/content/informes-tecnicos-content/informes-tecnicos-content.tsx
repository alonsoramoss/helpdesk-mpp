"use client"

import { Card, CardContent } from "@/components/ui/card";
import FichaTecnica from "./ficha-tecnica";

export default function InformeTecnicoContent() {
  return (
    <Card className="mx-auto max-w-[1200px] my-4 border shadow-2xl rounded-none">
      <CardContent>
        <FichaTecnica/>
      </CardContent>
    </Card>
  );
}
