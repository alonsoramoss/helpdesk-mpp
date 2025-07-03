import { useState, useEffect } from "react";
import { useFetchIncidentes } from "@/hooks/use-incidente";
import { useFiltroData } from "@/hooks/use-filtro-data";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Incidente } from "@/services/incidentesService";
import { toast } from "sonner";

const IncidentesTable = () => {
    const { incidentes, loading, error, addIncidente, editIncidente, removeIncidente } = useFetchIncidentes();
    const { filtroData, isLoading } = useFiltroData(incidentes);
    const [search, setSearch] = useState("");
    const [openCreate, setOpenCreate] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [selectedIncidente, setSelectedIncidente] = useState<Incidente | null>(null);

    const [nuevoIncidente, setNuevoIncidente] = useState<Omit<Incidente, "int_idIncidente">>({
        int_idUsuario: 0,
        int_idEquipo: 0,
        vch_descripcion: "",
        dat_fechaRegistro: new Date().toISOString().split("T")[0],
        tim_horaRegistro: new Date().toLocaleTimeString("es-ES", { hour12: false }),
        int_idEstadoAtencion: 1,
        vch_observacion: "",
        dat_fechaResuelto: "",
        tim_horaResuelto: "",
        chr_estado: "A",
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
    
        if (["int_idUsuario", "int_idEquipo", "int_idEstadoAtencion"].includes(name)) {
            const numericValue = Number(value);
            if (numericValue < 0) return;
        }
    
        setNuevoIncidente((prev) => ({ ...prev, [name]: value }));
    };
    
    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
    
        if (!nuevoIncidente.vch_descripcion.trim()) {
            toast.error("La descripción no puede estar vacía.");
            return;
        }
    
        if (
            nuevoIncidente.int_idUsuario < 0 ||
            nuevoIncidente.int_idEquipo < 0 ||
            nuevoIncidente.int_idEstadoAtencion < 0
        ) {
            toast.error("Los valores numéricos no pueden ser negativos.");
            return;
        }
    
        const ahora = new Date();
        const horaExacta = ahora.toLocaleTimeString("es-ES", { hour12: false });
    
        await addIncidente({
            ...nuevoIncidente,
            tim_horaRegistro: horaExacta,
            vch_observacion: "",
            dat_fechaResuelto: "",
            tim_horaResuelto: "",
        });
    
        toast.success("Incidente creado correctamente.");
    
        setNuevoIncidente({
            int_idUsuario: 0,
            int_idEquipo: 0,
            vch_descripcion: "",
            dat_fechaRegistro: new Date().toISOString().split("T")[0],
            tim_horaRegistro: "",
            int_idEstadoAtencion: 1,
            vch_observacion: "",
            dat_fechaResuelto: "",
            tim_horaResuelto: "",
            chr_estado: "A",
        });
    
        setOpenCreate(false);
    };

    useEffect(() => {
        if (!openCreate) {
            setNuevoIncidente({
                int_idUsuario: 0,
                int_idEquipo: 0,
                vch_descripcion: "",
                dat_fechaRegistro: new Date().toISOString().split("T")[0],
                tim_horaRegistro: "",
                int_idEstadoAtencion: 1,
                vch_observacion: "",
                dat_fechaResuelto: "",
                tim_horaResuelto: "",
                chr_estado: "A",
            });
        }
    }, [openCreate]);
    
    if (loading || isLoading) return <p className="text-center text-neutral-600">Cargando...</p>;
    if (error) return <p className="text-center text-red-500">Error: {error}</p>;

    const normalizeText = (text: string) => 
        text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);
    
    const handleEdit = (incidente: Incidente) => {
        setSelectedIncidente(incidente);
        setOpenEdit(true);
    };

    const handleDelete = (id: number) => {
        if (confirm("¿Estás seguro de que quieres eliminar este incidente?")) {
            removeIncidente(id);
        }
    };
    
    const incidentesOrd = [...filtroData]
        .filter(incidente =>
            Object.values(incidente).some(value => {
                if (typeof value !== "string" && typeof value !== "number") return false;
                return normalizeText(value.toString()).includes(normalizeText(search));
            })
        )
        .sort((a, b) => b.int_idIncidente - a.int_idIncidente);
        
    return (
        <div className="overflow-x-auto">
            <div className="sticky left-0 pt-5 pb-4">
                <h2 className="text-2xl font-bold mb-2 text-center">INCIDENTES</h2>
                <div className="flex justify-between items-center ml-1">
                    <Input type="text" placeholder="Buscar incidentes..." value={search} onChange={handleSearch} className="truncate mr-2 p-2 rounded-md"/>
                    <Button onClick={() => setOpenCreate(true)} className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-5 rounded-md">
                        Crear incidente
                    </Button>
                </div>
            </div>
            
            <table>
                <thead className="bg-primary/50">
                    <tr>
                        <th className="p-2 border text-sm">ID Incidente</th>
                        <th className="p-2 border text-sm">ID Usuario</th>
                        <th className="p-2 border text-sm">ID Equipo</th>
                        <th className="p-2 border min-w-[10rem] text-sm">Descripción</th>
                        <th className="p-2 border min-w-[7rem] text-sm">Fecha Registro</th>
                        <th className="p-2 border text-sm">Hora Registro</th>
                        <th className="p-2 border text-sm">ID Estado Atención</th>
                        <th className="p-2 border min-w-[10rem] text-sm">Observación</th>
                        <th className="p-2 border min-w-[7rem] text-sm">Fecha Resuelto</th>
                        <th className="p-2 border text-sm">Hora Resuelto</th>
                        <th className="p-2 border text-sm">Estado</th>
                        <th className="p-2 border text-sm">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {incidentesOrd.map((incidente) => (
                        <tr key={incidente.int_idIncidente}>
                            <td className="p-2 text-center border text-sm">{incidente.int_idIncidente}</td>
                            <td className="p-2 text-center border text-sm">{incidente.int_idUsuario}</td>
                            <td className="p-2 text-center border text-sm">{incidente.int_idEquipo}</td>
                            <td className="p-2 border text-sm">{incidente.vch_descripcion}</td>
                            <td className="p-2 text-center border text-sm">{incidente.dat_fechaRegistro}</td>
                            <td className="p-2 text-center border text-sm">{incidente.tim_horaRegistro}</td>
                            <td className="p-2 text-center border text-sm">{incidente.int_idEstadoAtencion}</td>
                            <td className="p-2 border text-sm">{incidente.vch_observacion}</td>
                            <td className="p-2 text-center border text-sm">{incidente.dat_fechaResuelto}</td>
                            <td className="p-2 text-center border text-sm">{incidente.tim_horaResuelto}</td>
                            <td className="p-2 text-center border text-sm">{incidente.chr_estado}</td>
                            <td className="p-2 text-center border text-sm">
                            <Button className="w-full bg-amber-500 hover:bg-amber-400 text-white px-1 py-1 rounded-md mb-2" onClick={() => handleEdit(incidente)}>Editar</Button>
                            <Button className="w-full bg-red-500 hover:bg-red-400 text-white px-1 py-1 rounded-md" onClick={() => handleDelete(incidente.int_idIncidente)}>Eliminar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            <Dialog open={openCreate} onOpenChange={setOpenCreate}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Crear Nuevo Incidente</DialogTitle>
                    </DialogHeader>
                    <form className="space-y-4" onSubmit={handleCreate}>
                        <Input name="int_idUsuario" placeholder="ID Usuario" type="number" value={nuevoIncidente.int_idUsuario} onChange={handleChange} required />
                        <Input name="int_idEquipo" placeholder="ID Equipo" type="number" value={nuevoIncidente.int_idEquipo} onChange={handleChange} required />
                        <Input name="vch_descripcion" placeholder="Descripción" value={nuevoIncidente.vch_descripcion} onChange={handleChange} required />
                        <Input name="dat_fechaRegistro" placeholder="Fecha de Registro" type="date" value={nuevoIncidente.dat_fechaRegistro} disabled/>
                        <Input name="tim_horaRegistro" placeholder="Hora de Registro" type="time" value={nuevoIncidente.tim_horaRegistro} disabled/>
                        <Input name="int_idEstadoAtencion" placeholder="ID Estado Atención" type="number" value={nuevoIncidente.int_idEstadoAtencion} onChange={handleChange} required />
                        <Input name="observacion" placeholder="Observación" value={nuevoIncidente.vch_observacion} disabled/>
                        <Input name="dat_fechaResuelto" placeholder="Fecha Resuelto" type="date" value={nuevoIncidente.dat_fechaResuelto} disabled/>
                        <Input name="tim_horaResuelto" placeholder="Hora Resuelto" type="time" value={nuevoIncidente.tim_horaResuelto} disabled/>
                        <Input name="chr_estado" placeholder="Estado" value={nuevoIncidente.chr_estado} onChange={handleChange} required />
                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white">Crear</Button>
                    </form>
                </DialogContent>
            </Dialog>
                
            {selectedIncidente && (
                <Dialog open={openEdit} onOpenChange={setOpenEdit}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Editar Incidente</DialogTitle>
                        </DialogHeader>
                        <form className="space-y-4" onSubmit={(e) => { 
                            e.preventDefault(); 
                            editIncidente(selectedIncidente.int_idIncidente, { /* Nuevos valores */ });
                            setOpenEdit(false);
                        }}>
                            <Input placeholder="ID Incidente" value={selectedIncidente?.int_idIncidente || ""}/>
                            <Input placeholder="ID Usuario" value={selectedIncidente?.int_idUsuario || ""}/>
                            <Input placeholder="ID Equipo" value={selectedIncidente?.int_idEquipo || ""}/>
                            <Input placeholder="Descripción" value={selectedIncidente?.vch_descripcion || ""}/>
                            <Input placeholder="Fecha de Registro" value={selectedIncidente?.dat_fechaRegistro || ""} type="date"/>
                            <Input placeholder="Hora de Registro" value={selectedIncidente?.tim_horaRegistro || ""} type="time"/>
                            <Input placeholder="ID Estado Atención" value={selectedIncidente?.int_idEstadoAtencion || ""}/>
                            <Input placeholder="Observación" value={selectedIncidente?.vch_observacion || ""}/>
                            <Input placeholder="Fecha Resuelto" value={selectedIncidente?.dat_fechaResuelto || ""} type="date"/>
                            <Input placeholder="Hora Resuelto" value={selectedIncidente?.tim_horaResuelto || ""} type="time"/>
                            <Input placeholder="Estado" value={selectedIncidente?.chr_estado || ""} required/>
                            <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-white">Actualizar</Button>
                        </form>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    );
};

export default IncidentesTable;
