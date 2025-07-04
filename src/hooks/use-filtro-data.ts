import { useAuth } from "@/context/authContext";

export function useFiltroData<T extends { int_idUsuario: number }>(data: T[]) {
    const { user, isAuthenticated, isLoading } = useAuth();

    if (isLoading) return { filtroData: [], isLoading: true };
    if (!isAuthenticated || !user) return { filtroData: [], isLoading: false };

    const admins = ["admin@mpp.com", "soporte@mpp.com", "redes@mpp.com"];
    const esAdminOTecnico = admins.includes(user.vch_email);

    const filtroData = esAdminOTecnico ? data : data.filter(item => item.int_idUsuario === user.int_idUsuario);

    return { filtroData, isLoading: false };
}
