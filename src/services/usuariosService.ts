export interface Usuario {
    int_idUsuario: number;
    vch_usuario: string;
    vch_contrasena: string;
    int_idTrabajador: number;
    chr_estado: string;
  }
  
  const API_URL = "https://67b35dc0392f4aa94fa6e97f.mockapi.io/prueba/usuarios";
  
  export const fetchUsuario = async (): Promise<Usuario[]> => {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Error al obtener los datos");
    }
    return response.json();
  };
  
  export const createUsuario = async (usuario: Omit<Usuario, 'int_idUsuario'>): Promise<Usuario> => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario),
    });
    if (!response.ok) {
      throw new Error("Error al crear el usuario");
    }
    return response.json();
  };
  
  export const updateUsuario = async (int_idUsuario: number, usuario: Partial<Usuario>): Promise<Usuario> => {
    const response = await fetch(`${API_URL}/${int_idUsuario}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario),
    });
    if (!response.ok) {
      throw new Error("Error al actualizar el usuario");
    }
    return response.json();
  };
  
  export const deleteUsuario = async (int_idUsuario: number): Promise<void> => {
    const response = await fetch(`${API_URL}/${int_idUsuario}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Error al eliminar el usuario");
    }
  };
  