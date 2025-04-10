import { useFetchIncidentes } from "@/hooks/use-incidente";
import { useFiltroData } from "@/hooks/use-filtro-data";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const COLORS = ["#EF4444", "#10B981"];

const IncidentesEstadoPie = () => {
    const { incidentes, loading, error } = useFetchIncidentes();
    const { filtroData, isLoading } = useFiltroData(incidentes);
    const [data, setData] = useState<{ estado: string; cantidad: number }[]>([]);

    useEffect(() => {
        const estadoCounts = filtroData.reduce((acc, incidente) => {
            const estado = incidente.chr_estado === "A" ? "Abierto" : "Cerrado";
            acc[estado] = (acc[estado] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);

        const chartData = Object.keys(estadoCounts).map((estado) => ({
            estado,
            cantidad: estadoCounts[estado],
        }));

        setData(chartData);
    }, [filtroData]);

    if (loading || isLoading) return <p className="text-center text-gray-600">Cargando gráfico...</p>;
    if (error) return <p className="text-center text-red-500">Error: {error}</p>;

    return (
        <Card className="max-w-lg mx-auto my-6 shadow-lg">
            <CardContent>
                <h2 className="text-xl font-bold mb-4 text-center">Estado de Incidentes</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie data={data} dataKey="cantidad" nameKey="estado" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend
                            formatter={(value, entry, index) => (
                                <span className="text-gray-700">{value}</span>
                            )}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

export default IncidentesEstadoPie;
