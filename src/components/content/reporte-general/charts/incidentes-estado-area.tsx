import { useFetchIncidentes } from "@/hooks/use-incidente";
import { useFiltroData } from "@/hooks/use-filtro-data";
import { useEffect, useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend} from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const cantidadPorMes = (data: any[]) => {
  return data.reduce((acc, incidente) => {
    const date = new Date(incidente.dat_fechaRegistro);
    const month = `${date.getMonth() + 1}-${date.getFullYear()}`;

    if (!acc[month]) acc[month] = 0;
    acc[month] += 1;
    return acc;
  }, {} as Record<string, number>);
};

const IncidentesAreaChart = () => {
  const { incidentes, loading, error } = useFetchIncidentes();
  const { filtroData, isLoading } = useFiltroData(incidentes);
  const [data, setData] = useState<{ month: string; cantidad: number }[]>([]);

  useEffect(() => {
    const groupedData = cantidadPorMes(filtroData);

    const chartData = Object.keys(groupedData).map((month) => ({
      month,
      cantidad: groupedData[month],
    }));

    chartData.sort((a, b) => {
      const [monthA, yearA] = a.month.split("-");
      const [monthB, yearB] = b.month.split("-");
      return new Date(`${yearA}-${monthA}-01`).getTime() - new Date(`${yearB}-${monthB}-01`).getTime();
    });

    setData(chartData);
  }, [filtroData]);

  if (loading || isLoading) return <p className="text-center text-gray-600">Cargando gráfico...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <Card className="max-w-lg mx-auto my-6 shadow-lg">
      <CardContent>
        <h2 className="text-xl font-bold mb-4 text-center">Cantidad de Incidentes Mensuales</h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="cantidad" stroke="#8884d8" fill="url(#gradient1)" activeDot={{ r: 5 }}/>
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default IncidentesAreaChart;
