import { useState, useEffect } from "react";
import { useFetchUsuario } from "@/hooks/use-usuarios";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Usuario } from "@/services/usuariosService";
import { toast } from "sonner";

const UsuarioTable = () => {
    const { usuarios, loading, error, addUsuario, editUsuario, removeUsuario } = useFetchUsuario();
    const [search, setSearch] = useState("");
    const [openCreate, setOpenCreate] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [selectedUsuario, setSelectedUsuario] = useState<Usuario | null>(null);

    const [nuevoUsuario, setNuevoUsuario] = useState<Omit<Usuario, "int_idUsuario">>({
        vch_nombre: "",
        vch_email: "",
        vch_contrasena: "",
        vch_cargo: "",
        chr_estado: 1,
    });
    
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

    useEffect(() => {
        if (!openCreate) {
            setNuevoUsuario({
                vch_nombre: "",
                vch_email: "",
                vch_contrasena: "",
                vch_cargo: "",
                chr_estado: 1,
            });
        }
    }, [openCreate]);

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
        <div className="pt-6">
            <h2 className="text-2xl font-bold mb-4 text-center">USUARIOS</h2>

            <div className="flex justify-between items-center mb-4">
                <Input type="text" placeholder="Buscar usuarios..." value={search} onChange={handleSearch} className="w-full mr-4 p-2 border rounded-md" />
                <Button onClick={() => setOpenCreate(true)} className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md">
                    Crear Usuario
                </Button>
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
                            <td className="p-2 border text-sm">********</td>
                            <td className="p-2 border text-sm">{usuario.vch_cargo}</td>
                            <td className="p-2 text-center border text-sm">{usuario.chr_estado}</td>
                            <td className="p-2 text-center border text-sm">
                                <Button className="w-full bg-amber-500 hover:bg-amber-400 text-white px-1 py-1 rounded-md mb-2" onClick={() => handleEdit(usuario)}>Editar</Button>
                                <Button className="w-full bg-red-500 hover:bg-red-400 text-white px-1 py-1 rounded-md" onClick={() => handleDelete(usuario.int_idUsuario)}>Eliminar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Dialog open={openCreate} onOpenChange={setOpenCreate}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Crear Nuevo Usuario</DialogTitle>
                    </DialogHeader>
                    <form className="space-y-4" onSubmit={handleCreate}>
                        <Input name="vch_nombre" placeholder="Nombre" value={nuevoUsuario.vch_nombre} onChange={handleChange} required />
                        <Input name="vch_email" placeholder="Email" value={nuevoUsuario.vch_email} onChange={handleChange} required />
                        <Input name="vch_contrasena" placeholder="Contraseña" value={nuevoUsuario.vch_contrasena} onChange={handleChange} required />
                        <Input name="vch_cargo" placeholder="Cargo" value={nuevoUsuario.vch_cargo} onChange={handleChange} required />
                        <Input name="chr_estado" placeholder="Estado" value={nuevoUsuario.chr_estado} onChange={handleChange} required />
                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white">Crear</Button>
                    </form>
                </DialogContent>
            </Dialog>

            {selectedUsuario && (
                <Dialog open={openEdit} onOpenChange={setOpenEdit}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Editar Usuario</DialogTitle>
                        </DialogHeader>
                        <form className="space-y-4" onSubmit={(e) => {
                            e.preventDefault();
                            if (selectedUsuario) {
                                editUsuario(selectedUsuario.int_idUsuario, selectedUsuario);
                                setOpenEdit(false);
                            }
                        }}>
                            <Input name="vch_nombre" value={selectedUsuario?.vch_nombre || ""} onChange={handleEditChange} required />
                            <Input name="vch_email" value={selectedUsuario?.vch_email || ""} onChange={handleEditChange} required />
                            <Input name="vch_contrasena" value={selectedUsuario?.vch_contrasena || ""} onChange={handleEditChange} required />
                            <Input name="vch_cargo" value={selectedUsuario?.vch_cargo || ""} onChange={handleEditChange} required />
                            <Input name="chr_estado" value={selectedUsuario?.chr_estado || ""} onChange={handleEditChange} required />
                            <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-white">Actualizar</Button>
                        </form>

                    </DialogContent>
                </Dialog>
            )}
        </div>
    );
};

export default UsuarioTable;
