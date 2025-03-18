import { useState, useEffect } from "react";
import { fetchUsuario, createUsuario, updateUsuario, deleteUsuario } from "@/services/usuariosService";
import { Usuario } from "@/services/usuariosService";

export const useFetchUsuario = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUsuarios = async () => {
      try {
        const data = await fetchUsuario();
        setUsuarios(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    };
    getUsuarios();
  }, []);

  const addUsuario = async (nuevoUsuario: Omit<Usuario, "int_idUsuario">) => {
    try {
      const usuarioCreado = await createUsuario(nuevoUsuario);
      setUsuarios([...usuarios, usuarioCreado]);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error al crear usuario");
    }
  };
  
  const editUsuario = async (int_idUsuario: number, datosActualizados: Partial<Usuario>) => {
    try {
      const usuarioActualizado = await updateUsuario(int_idUsuario, datosActualizados);
      setUsuarios(
        usuarios.map((inc) => (inc.int_idUsuario === int_idUsuario ? usuarioActualizado : inc))
      );
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error al actualizar usuario");
    }
  };

  const removeUsuario = async (int_idUsuario: number) => {
    try {
      await deleteUsuario(int_idUsuario);
      setUsuarios(usuarios.filter((inc) => inc.int_idUsuario !== int_idUsuario));
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error al eliminar usuario");
    }
  };

  return { usuarios, loading, error, addUsuario, editUsuario, removeUsuario };
};