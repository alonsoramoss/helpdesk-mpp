import { useFetchIncidentes } from "@/hooks/use-incidente";
import { useFiltroData } from "@/hooks/use-filtro-data";
import { useEffect, useState } from "react";
import { Calendar, AlertTriangle, Settings, CheckCircle } from "lucide-react";

const totalIncidentesHoy = (data: any[]) => {
  const peruTime = new Date();
  peruTime.setHours(peruTime.getHours() - 5);
  const today = peruTime.toISOString().split('T')[0];

  return data.filter((incidente) => incidente.dat_fechaRegistro.startsWith(today)).length;
};

const IncidentesAlertas = () => {
  const { incidentes, loading, error } = useFetchIncidentes();
  const { filtroData, isLoading } = useFiltroData(incidentes);

  const [totalHoy, setTotalHoy] = useState(0);
  const [incidentesPendientes, setIncidentesPendientes] = useState(0);
  const [incidentesEnProceso, setIncidentesEnProceso] = useState(0);
  const [incidentesResueltas, setIncidentesResueltas] = useState(0);

  useEffect(() => {
    if (filtroData.length > 0) {
      setTotalHoy(totalIncidentesHoy(filtroData));

      const pendientes = filtroData.filter(incidente => incidente.int_idEstadoAtencion === 1);
      const enProceso = filtroData.filter(incidente => incidente.int_idEstadoAtencion === 2);
      const resueltas = filtroData.filter(incidente => incidente.int_idEstadoAtencion === 3);

      setIncidentesPendientes(pendientes.length);
      setIncidentesEnProceso(enProceso.length);
      setIncidentesResueltas(resueltas.length);
    }
  }, [filtroData]);

  if (loading || isLoading) return <p className="text-center text-gray-600">Cargando datos...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white">

      <div className="shadow p-5 md:p-10 flex flex-col text-center items-center bg-[#005eff]">
        <Calendar className="w-10 h-10 mx-auto my-2" />
        <h3 className="text-xl my-2">Incidentes de hoy</h3>
        <p className="font-medium text-5xl">{totalHoy}</p>
      </div>

      <div className="shadow p-5 md:p-10 flex flex-col text-center items-center bg-[#ff0000]">
        <AlertTriangle className="w-10 h-10 mx-auto my-2" />
        <h3 className="text-xl my-2">Incidentes pendientes</h3>
        <p className="font-medium text-5xl">{incidentesPendientes}</p>
      </div>

      <div className="shadow p-5 md:p-10 flex flex-col text-center items-center bg-[#ffa200]">
        <Settings className="w-10 h-10 mx-auto my-2" />
        <h3 className="text-xl my-2">Incidentes en proceso</h3>
        <p className="font-medium text-5xl">{incidentesEnProceso}</p>
      </div>

      <div className="shadow p-5 md:p-10 flex flex-col text-center items-center bg-[#019b00]">
        <CheckCircle className="w-10 h-10 mx-auto my-2" />
        <h3 className="text-xl my-2">Incidentes resueltos</h3>
        <p className="font-medium text-5xl">{incidentesResueltas}</p>
      </div>
    </div>
  );
};

export default IncidentesAlertas;
