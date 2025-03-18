export interface Incidente {
  int_idIncidente: number;
  int_idUsuario: number;
  int_idEquipo: number;
  vch_descripcion: string;
  dat_fechaRegistro: string;
  tim_horaRegistro: string;
  int_idEstadoAtencion: number;
  vch_observacion?: string;
  dat_fechaResuelto?: string;
  tim_horaResuelto?: string;
  chr_estado: string;
}

const API_URL = "https://67b35dc0392f4aa94fa6e97f.mockapi.io/prueba/incidentes";

const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(`Error ${response.status}: ${errorMessage}`);
  }
  return response.json();
};

export const fetchIncidentes = async (): Promise<Incidente[]> => {
  return handleResponse<Incidente[]>(await fetch(API_URL));
};

export const createIncidente = async (incidente: Omit<Incidente, 'int_idIncidente'>): Promise<Incidente> => {
  return handleResponse<Incidente>(
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(incidente),
    })
  );
};

export const updateIncidente = async (int_idIncidente: number, incidente: Partial<Incidente>): Promise<Incidente> => {
  return handleResponse<Incidente>(
    await fetch(`${API_URL}/${int_idIncidente}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(incidente),
    })
  );
};

export const deleteIncidente = async (int_idIncidente: number): Promise<void> => {
  await handleResponse<void>(await fetch(`${API_URL}/${int_idIncidente}`, { method: "DELETE" }));
};
