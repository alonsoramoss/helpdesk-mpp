import { useState, useEffect, useCallback } from "react";
import { fetchIncidentes, createIncidente, updateIncidente, deleteIncidente } from "@/services/incidentesService";
import { Incidente } from "@/services/incidentesService";

export const useFetchIncidentes = () => {
  const [incidentes, setIncidentes] = useState<Incidente[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getIncidentes = async () => {
      setLoading(true);
      try {
        const data = await fetchIncidentes();
        setIncidentes(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    getIncidentes();
  }, []);

  const addIncidente = useCallback(async (nuevoIncidente: Omit<Incidente, "int_idIncidente">) => {
    try {
      const incidenteCreado = await createIncidente(nuevoIncidente);
      setIncidentes((prev) => [...prev, incidenteCreado]);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error al crear incidente");
    }
  }, []);

  const editIncidente = useCallback(async (int_idIncidente: number, datosActualizados: Partial<Incidente>) => {
    try {
      const incidenteActualizado = await updateIncidente(int_idIncidente, datosActualizados);
      setIncidentes((prev) =>
        prev.map((inc) => (inc.int_idIncidente === int_idIncidente ? incidenteActualizado : inc))
      );
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error al actualizar incidente");
    }
  }, []);

  const removeIncidente = useCallback(async (int_idIncidente: number) => {
    try {
      await deleteIncidente(int_idIncidente);
      setIncidentes((prev) => prev.filter((inc) => inc.int_idIncidente !== int_idIncidente));
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error al eliminar incidente");
    }
  }, []);

  return { incidentes, loading, error, addIncidente, editIncidente, removeIncidente };
};
