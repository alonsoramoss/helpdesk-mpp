"use client"

import { Card, CardContent } from "@/components/ui/card";
import FormularioRegistroInventario from "./formulario-registro-inventario";

export default function RegistroInventarioContent() {
  return (
    <div className="mx-auto max-w-[1200px]">
        <FormularioRegistroInventario/>
    </div>
  );
}
