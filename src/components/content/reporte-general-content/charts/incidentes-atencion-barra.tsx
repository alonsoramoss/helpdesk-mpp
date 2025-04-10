import { useFetchIncidentes } from "@/hooks/use-incidente";
import { useFiltroData } from "@/hooks/use-filtro-data";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const estadosMap: Record<number, { nombre: string; color: string }> = {
    1: { nombre: "Pendiente", color: "#EF4444" },
    2: { nombre: "En proceso", color: "#F59E0B" },
    3: { nombre: "Resuelto", color: "#10B981" }
};

const IncidentesAtencionBarra = () => {
    const { incidentes, loading, error } = useFetchIncidentes();
    const { filtroData, isLoading } = useFiltroData(incidentes);
    const [data, setData] = useState<{ estado: string; cantidad: number; color: string }[]>([]);

    useEffect(() => {
        const incidentesPorEstado: Record<number, number> = filtroData.reduce((acc, incidente) => {
            acc[incidente.int_idEstadoAtencion] = (acc[incidente.int_idEstadoAtencion] || 0) + 1;
            return acc;
        }, {} as Record<number, number>);

        const chartData = Object.keys(estadosMap).map((key) => ({
            estado: estadosMap[Number(key)].nombre,
            cantidad: incidentesPorEstado[Number(key)] || 0,
            color: estadosMap[Number(key)].color
        }));

        setData(chartData);
    }, [filtroData]);

    if (loading || isLoading) return <p className="text-center text-gray-600">Cargando gráfico...</p>;
    if (error) return <p className="text-center text-red-500">Error: {error}</p>;

    return (
        <Card className="max-w-4xl mx-auto my-6 shadow-lg">
            <CardContent>
                <h2 className="text-xl font-bold mb-4 text-center">Estado de Atención de Incidentes</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="estado" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="cantidad" name="Incidentes">
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

export default IncidentesAtencionBarra;
