import { useState, useEffect, useRef } from "react";
import { useFetchUsuario } from "@/hooks/use-usuarios";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Usuario } from "@/services/usuariosService";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react"; 

const UsuarioTable = () => {
    const { usuarios, loading, error, addUsuario, editUsuario, removeUsuario } = useFetchUsuario();
    const [search, setSearch] = useState("");
    const [openCreate, setOpenCreate] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [selectedUsuario, setSelectedUsuario] = useState<Usuario | null>(null);
    const [mostrarContraseña, setMostrarContraseña] = useState<{ [key: number]: boolean }>({});
    const contraseñaTimers = useRef<{ [key: number]: NodeJS.Timeout }>({});
    const [mostrarContraseñaCrear, setMostrarContraseñaCrear] = useState(false);
    const [mostrarContraseñaEditar, setMostrarContraseñaEditar] = useState(false);
    
    const [nuevoUsuario, setNuevoUsuario] = useState<Omit<Usuario, "int_idUsuario">>({
        vch_nombre: "",
        vch_email: "",
        vch_contrasena: "",
        vch_cargo: "",
        chr_estado: 1,
    });
    
    useEffect(() => {
        if (!openCreate) {
            setMostrarContraseñaCrear(false);
            setNuevoUsuario({
                vch_nombre: "",
                vch_email: "",
                vch_contrasena: "",
                vch_cargo: "",
                chr_estado: 1,
            });
        }
    }, [openCreate]);

    useEffect (() => {
        if (!openEdit) {
            setMostrarContraseñaEditar(false)
        }
    }, [openEdit]);

    const handleTogglePassword = (id: number) => {
        setMostrarContraseña((prev) => {
            const shownContraseña = prev[id];

            if (shownContraseña) {
                clearTimeout(contraseñaTimers.current[id]);
                return { ...prev, [id]: false };
            } else {
                const timer = setTimeout(() => {
                    setMostrarContraseña((p) => ({ ...p, [id]: false }));
                }, 3000);
                contraseñaTimers.current[id] = timer;
                return { ...prev, [id]: true };
            }
        });
    };
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setNuevoUsuario((prev) => ({ ...prev, [name]: value }));
    };

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();

        await addUsuario({
            ...nuevoUsuario,
        });

        toast.success("Usuario creado correctamente.");

        setNuevoUsuario({
            vch_nombre: "",
            vch_email: "",
            vch_contrasena: "",
            vch_cargo: "",
            chr_estado: 1,
        });

        setOpenCreate(false);
    };
    
    if (loading) return <p className="text-center text-neutral-600">Cargando...</p>;
    if (error) return <p className="text-center text-red-500">Error: {error}</p>;

    const normalizeText = (text: string) =>
        text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

    const handleEdit = (usuario: Usuario) => {
        setSelectedUsuario(usuario);
        setOpenEdit(true);
    };

    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSelectedUsuario((prev) => prev ? { ...prev, [name]: value } : null);
    };

    const handleDelete = (id: number) => {
        if (confirm("¿Estás seguro de que quieres eliminar este usuario?")) {
            removeUsuario(id);
        }
    };

    const usuarioOrd = [...usuarios]
        .filter(usuario =>
            Object.values(usuario).some(value => {
                if (typeof value !== "string" && typeof value !== "number") return false;
                return normalizeText(value.toString()).includes(normalizeText(search));
            })
        )
        .sort((a, b) => b.int_idUsuario - a.int_idUsuario);

    return (
        <div className="overflow-x-auto">
            <div className="sticky left-0 py-4">
                <h2 className="text-2xl font-bold mb-2 text-center">USUARIOS</h2>
                <div className="flex justify-between items-center ml-1">
                    <Input type="text" placeholder="Buscar usuarios..." value={search} onChange={handleSearch} className="truncate mr-2 p-2 rounded-md" />
                    <Button onClick={() => setOpenCreate(true)} className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-5 rounded-md">
                        Crear usuario
                    </Button>
                </div>
            </div>

            <table>
                <thead className="bg-primary/50">
                    <tr>
                        <th className="p-2 border text-sm">ID Usuario</th>
                        <th className="p-2 border text-sm">Nombre</th>
                        <th className="p-2 border text-sm">Correo</th>
                        <th className="p-2 border text-sm">Contraseña</th>
                        <th className="p-2 border text-sm">Cargo</th>
                        <th className="p-2 border text-sm">Estado</th>
                        <th className="p-2 border text-sm">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarioOrd.map((usuario) => (
                        <tr key={usuario.int_idUsuario}>
                            <td className="p-2 text-center border text-sm">{usuario.int_idUsuario}</td>
                            <td className="p-2 border text-sm">{usuario.vch_nombre}</td>
                            <td className="p-2 border text-sm">{usuario.vch_email}</td>
                            <td className="p-2 border text-sm">
                                <div className="min-w-[5rem] flex items-center justify-between">
                                    <span>{mostrarContraseña[usuario.int_idUsuario] ? usuario.vch_contrasena : "********"}</span>
                                    <button
                                        type="button"
                                        onClick={() => handleTogglePassword(usuario.int_idUsuario)}
                                        title={mostrarContraseña[usuario.int_idUsuario] ? "Ocultar contraseña" : "Mostrar contraseña"}
                                        aria-label={mostrarContraseña[usuario.int_idUsuario] ? "Ocultar contraseña" : "Mostrar contraseña"}
                                        className="text-neutral-950 hover:text-neutral-700 transition-colors duration-300 ease-in-out"
                                    >
                                        {mostrarContraseña[usuario.int_idUsuario] ? (
                                            <EyeOff className="w-4 h-4" />
                                        ) : (
                                            <Eye className="w-4 h-4" />
                                        )}
                                    </button>
                                </div>
                            </td>
                            <td className="p-2 border text-sm">{usuario.vch_cargo}</td>
                            <td className="p-2 text-center border text-sm">{usuario.chr_estado}</td>
                            <td className="p-2 text-center border text-sm">
                                <Button onClick={() => handleEdit(usuario)} className="w-full bg-amber-500 hover:bg-amber-400 text-white px-1 py-1 rounded-md mb-2">Editar</Button>
                                <Button onClick={() => handleDelete(usuario.int_idUsuario)} className="w-full bg-red-500 hover:bg-red-400 text-white px-1 py-1 rounded-md">Eliminar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Dialog open={openCreate} onOpenChange={setOpenCreate}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Crear nuevo usuario</DialogTitle>
                    </DialogHeader>
                    <form className="space-y-4" onSubmit={handleCreate}>
                        <Input id="nombre" name="vch_nombre" type="text" value={nuevoUsuario.vch_nombre} onChange={handleChange} placeholder="Nombre" required aria-label="Nombre" />
                        <Input id="email" name="vch_email" type="email" value={nuevoUsuario.vch_email} onChange={handleChange} placeholder="Email" required aria-label="Email" />
                        <div className="relative w-full">
                            <Input id="password" name="vch_contrasena" type={mostrarContraseñaCrear ? "text" : "password"} value={nuevoUsuario.vch_contrasena} onChange={handleChange} placeholder="Contraseña" required className="pr-10" aria-label="Contraseña" />
                            <button
                                type="button"
                                onClick={() => setMostrarContraseñaCrear((prev) => !prev)}
                                title={mostrarContraseñaCrear ? "Ocultar contraseña" : "Mostrar contraseña"}
                                aria-label={mostrarContraseñaCrear ? "Ocultar contraseña" : "Mostrar contraseña"}
                                className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-gray-600 transition-colors duration-300 ease-in-out"
                            >
                                {mostrarContraseñaCrear ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                        </div>
                        <Input id="cargo" name="vch_cargo" type="text" value={nuevoUsuario.vch_cargo} onChange={handleChange} placeholder="Cargo" required aria-label="Cargo" />
                        <Input id="estado" name="chr_estado" value={nuevoUsuario.chr_estado} onChange={handleChange} placeholder="Estado" required aria-label="Estado" />
                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white">Crear</Button>
                    </form>
                </DialogContent>
            </Dialog>

            {selectedUsuario && (
                <Dialog open={openEdit} onOpenChange={setOpenEdit}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Editar usuario</DialogTitle>
                        </DialogHeader>
                        <form className="space-y-4" onSubmit={(e) => {
                            e.preventDefault();
                            if (selectedUsuario) {
                                editUsuario(selectedUsuario.int_idUsuario, selectedUsuario);
                                setOpenEdit(false);
                            }
                        }}>
                            <Input id="nombre" name="vch_nombre" type="text" value={selectedUsuario?.vch_nombre || ""} onChange={handleEditChange} placeholder="Nombre" required aria-label="Nombre" />
                            <Input id="email" name="vch_email" type="email" value={selectedUsuario?.vch_email || ""} onChange={handleEditChange} placeholder="Email" required aria-label="Email" />
                            <div className="relative w-full">
                                <Input id="password" name="vch_contrasena" type={mostrarContraseñaEditar ? "text" : "password"} value={selectedUsuario?.vch_contrasena} onChange={handleEditChange} placeholder="Contraseña" required className="pr-10" aria-label="Contraseña" />
                                <button
                                    type="button"
                                    onClick={() => setMostrarContraseñaEditar((prev) => !prev)}
                                    title={mostrarContraseñaEditar ? "Ocultar contraseña" : "Mostrar contraseña"}
                                    aria-label={mostrarContraseñaEditar ? "Ocultar contraseña" : "Mostrar contraseña"}
                                    className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-gray-600 transition-colors duration-300 ease-in-out"
                                >
                                    {mostrarContraseñaEditar ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                            <Input id="cargo" name="vch_cargo" type="text" value={selectedUsuario?.vch_cargo || ""} onChange={handleEditChange} placeholder="Cargo" required aria-label="Cargo" />
                            <Input id="estado" name="chr_estado" value={selectedUsuario?.chr_estado || ""} onChange={handleEditChange} placeholder="Estado" required aria-label="Estado" />
                            <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-white">Actualizar</Button>
                        </form>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    );
};

export default UsuarioTable;
