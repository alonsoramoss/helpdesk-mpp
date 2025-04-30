"use client"

import { useState } from "react";
import { RegistroInventario, RegistroEquiposComputo, RegistroServidor, RegistroPantalla } from "@/types/registroInventario";
import EquiposComputo from "./categorias-registro-inventario/equipos-computo";
import ImpresoraFotocopiadora from "./categorias-registro-inventario/impresora-fotocopiadora";
import Servidor from "./categorias-registro-inventario/servidor";
import Pantalla from "./categorias-registro-inventario/pantalla";
import EquipoBiometrico from "./categorias-registro-inventario/equipo-biometrico";
import ContadorBilletes from "./categorias-registro-inventario/contador-billetes";
import ImpresoraTarjetaPVC from "./categorias-registro-inventario/impresora-tarjeta-pvc";
import Camara from "./categorias-registro-inventario/camara";
import Escaner from "./categorias-registro-inventario/escaner";
import OtrosDispositivos from "./categorias-registro-inventario/otros-dispositivos";

export default function EleccionRegistroInventario() {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
    const [formData, setFormData] = useState<RegistroInventario>({} as RegistroInventario);
    const [formVisible, setFormVisible] = useState(false);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const cancelForm = () => {
        const hayDatos = Object.values(formData).some(
            (valor) => typeof valor === "string" && valor.trim() !== ""
        );

        if (!hayDatos) {
            setFormData({} as RegistroInventario);
            setCategoriaSeleccionada("");
            setFormVisible(false);
            return;
        }

        if (confirm("¿Estás seguro de que deseas cancelar y borrar la información ingresada?")) {
            setFormData({} as RegistroInventario);
            setCategoriaSeleccionada("");
            setFormVisible(false);
        }
    };
    
    const handleCategoriaChange = (newCategoria: string) => {
        const hayDatos = Object.values(formData).some(
            (valor) => valor !== null && valor !== undefined && valor !== ""
        );
        
        if (hayDatos) {
        const confirmChange = confirm("Tienes información no guardada. ¿Estás seguro de cambiar de categoría?");
        if (confirmChange) {
            setFormData({} as RegistroInventario);
            setCategoriaSeleccionada(newCategoria);
            setFormVisible(true);
        }
        } else {
        setCategoriaSeleccionada(newCategoria);
        setFormVisible(true);
        }
    };
    
    const mostrarForm = () => {
        const props = { formData, handleInputChange, cancelForm };
        switch (categoriaSeleccionada) {
            case "Equipos de Cómputo":
                return <EquiposComputo {...props} formData={formData as RegistroEquiposComputo} />;
            case "Impresora y Fotocopiadora":
                return <ImpresoraFotocopiadora {...props} />;
            case "Servidor":
                return <Servidor {...props} formData={formData as RegistroServidor}/>;
            case "Pantalla":
                return <Pantalla {...props} formData={formData as RegistroPantalla}/>;
            case "Equipo Biométrico":
                return <EquipoBiometrico {...props} />;
            case "Contador de Billetes":
                return <ContadorBilletes {...props} />;
            case "Impresora de Tarjeta PVC":
                return <ImpresoraTarjetaPVC {...props} />;
            case "Cámara":
                return <Camara {...props} />;
            case "Escáner":
                return <Escaner {...props} />;
            case "Otros Dispositivos":
                return <OtrosDispositivos {...props} />;
            default:
                return null;
        }
    };

    return (
        <div className="pt-4 p-2">
            <h1 className="text-lg sm:text-2xl font-bold text-center">
                Registro de Inventario Físico y Lógico de los Equipos de Cómputo y Periférico de MPP
            </h1>
            <div className="flex items-center my-6">
                <label htmlFor="categoria" className="text-sm md:text-base font-semibold mr-3">Categoría</label>
                <select
                    id="categoria"
                    name="categoria"
                    value={categoriaSeleccionada}
                    onChange={(e) => handleCategoriaChange(e.target.value)}
                    className="w-full text-sm md:text-base p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-4">
                    <option value="">Seleccione una opción</option>
                    <option value="Equipos de Cómputo">Equipos de Cómputo</option>
                    <option value="Impresora y Fotocopiadora">Impresora y Fotocopiadora</option>
                    <option value="Servidor">Servidor</option>
                    <option value="Pantalla">Pantalla</option>
                    <option value="Equipo Biométrico">Equipo Biométrico</option>
                    <option value="Contador de Billetes">Contador de Billetes</option>
                    <option value="Impresora de Tarjeta PVC">Impresora de Tarjeta PVC</option>
                    <option value="Cámara">Cámara</option>
                    <option value="Escáner">Escáner</option>
                    <option value="Otros Dispositivos">Otros dispositivos</option>
                </select>
            </div>
            {formVisible && mostrarForm()}
        </div>
    );
}
