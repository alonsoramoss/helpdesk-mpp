"use client"

import InventarioTable from "@/components/data/inventarioTable";
import { Card, CardContent } from "@/components/ui/card";

export default function InventarioAccesoriosContent() {
  return (
    <Card>
      <CardContent>
        <div className="flex justify-center">
          <InventarioTable />
        </div>
      </CardContent>
    </Card>
  );
}
