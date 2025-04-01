import { useFetchIncidentes } from "@/hooks/useIncidentes";
import { useFiltroData } from "@/hooks/useFiltroData";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const IncidentesLineaChart = () => {
    const { incidentes, loading, error } = useFetchIncidentes();
    const { filtroData, isLoading } = useFiltroData(incidentes);
    const [data, setData] = useState<{ fecha: string; cantidad: number }[]>([]);

    useEffect(() => {
        const incidentesPorFecha: Record<string, number> = filtroData.reduce((acc, incidente) => {
            acc[incidente.dat_fechaRegistro] = (acc[incidente.dat_fechaRegistro] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);

        const chartData = Object.keys(incidentesPorFecha).map((fecha) => ({
            fecha,
            cantidad: incidentesPorFecha[fecha],
        }));

        setData(chartData);
    }, [filtroData]);

    if (loading || isLoading) return <p className="text-center text-neutral-600">Cargando gráfico...</p>;
    if (error) return <p className="text-center text-red-500">Error: {error}</p>;

    return (
        <Card className="max-w-4xl mx-auto my-6 shadow-lg">
            <CardContent>
                <h2 className="text-xl font-bold mb-4 text-center">Incidentes por Día</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="fecha" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="cantidad" stroke="#3B82F6" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

export default IncidentesLineaChart;
