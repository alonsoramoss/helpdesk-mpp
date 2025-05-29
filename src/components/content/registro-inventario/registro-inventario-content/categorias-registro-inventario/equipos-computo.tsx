"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Search, PlusCircle } from "lucide-react";
import { RegistroEquiposComputo } from "@/types/registroInventario";

interface EquiposComputoProps {
    formData: RegistroEquiposComputo;
    handleInputChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => void;
    cancelForm: () => void;
    removerListenerBeforeUnload: () => void;
}

export default function EquiposComputo({ formData, handleInputChange, cancelForm, removerListenerBeforeUnload }: EquiposComputoProps) {
    const [seccionActiva, setSeccionActiva] = useState<"general" | "especificas">("general");
    
    const camposGeneralesEquipoComputo = [
        // Información General
        "numRegistro", "tipoDoc", "numDoc",

        // Equipo
        "codPatrimonialEquipo", "estadoEquipo", "hostnameEquipo", "ipEquipo"
    ];
    
    const camposEspecificosEquiposComputo = [
        // Placa Base
        "codPatrimonialPlaca", "estadoPlaca", "fechaInstalacionPlaca", "fechaDesinstalacionPlaca",
        "estadoProcesador", "estadoDiscoDuro", "estadoMemoria", "estadoUnidExtraible",
        "observacion",

        // Monitor
        "codPatrimonialMonitor", "estadoMonitor",

        // Teclado
        "codPatrimonialTeclado", "estadoTeclado",
        
        // Mouse
        "codPatrimonialMouse", "estadoMouse",
    
        // Parlantes
        "codPatrimonialParlantes", "estadoParlantes",
    
        // Estabilizador
        "codPatrimonialEstabilizador", "estadoEstabilizador",
    
        // Supresor de Pico
        "codPatrimonialSupresorPico", "estadoSupresorPico",
    
        // Tarjeta adicional
        "tarjeta", "estadoTarjeta",
    
        // Sistema Operativo
        "tipoSO", "licenciaSistema",
    
        // Software
        "nomSoftware", "añoSoftware", "licenciaSoftware",
        "fechaInicioSoftware", "fechaFinSoftware"
    ];

    function validarCampos(formData: RegistroEquiposComputo, campos: string[]) {
        for (const campo of campos) {
            if (!formData[campo as keyof RegistroEquiposComputo]) {
            return false;
            }
        }
        return true;
    }
    
    function handleNextSection() {
        if (!validarCampos(formData, camposGeneralesEquipoComputo)) {
            alert("Por favor completa todos los campos obligatorios antes de continuar.");
            return;
        }
        setSeccionActiva("especificas");
    }
    
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!validarCampos(formData, camposEspecificosEquiposComputo)) {
            alert("Por favor completa todos los campos obligatorios antes de guardar.");
            return;
        }
        removerListenerBeforeUnload();
        // console.log("Formulario enviado correctamente:", formData);
    
        window.location.hash = "#";
        setTimeout(() => {
            window.location.reload();
        }, 100);
    }

    return (
        <>
            <h1 className="text-lg md:text-2xl font-bold text-center mb-6">Registro de Inventario Físico y Lógico de Equipos de Cómputo y Periféricos de MPP</h1>
            <Card className="border shadow-2xl rounded-none">
                <CardContent className="p-0">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 border-b">
                            <button type="button" onClick={() => setSeccionActiva("general")}
                                className={`text-xs sm:text-base py-2 font-semibold ${seccionActiva === "general" ? "bg-gray-300 text-blue-700" : "bg-gray-100"}`}>
                                INFORMACIÓN GENERAL
                            </button>
                            <button type="button" onClick={handleNextSection}
                                className={`text-xs sm:text-base py-2 font-semibold ${seccionActiva === "especificas" ? "bg-gray-300 text-blue-700" : "bg-gray-100"}`}>
                                ESPECIFICACIONES TÉCNICAS
                            </button>
                        </div>

                        {seccionActiva === "general" && (
                            <div className="p-6">
                                <div className="flex flex-col lg:flex-row lg:items-center mb-4">
                                    <label htmlFor="numRegistro" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">N° de Registro</label>
                                    <input type="text" id="numRegistro" name="numRegistro" required 
                                        value={formData.numRegistro} 
                                        onChange={handleInputChange}
                                        className="w-full text-sm md:text-base p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-4" placeholder="000-2025-US-MPP" />
                                </div>

                                <fieldset className="border border-gray-300 pt-3 md:pt-4 pb-5 md:pb-7 px-5 md:px-7 rounded-md mb-5">
                                    <legend className="px-2 text-base md:text-lg font-semibold">Información Personal</legend>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="tipoDoc" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Tipo de Documento</label>
                                            <select name="tipoDoc" id="tipoDoc" required
                                                value={formData.tipoDoc}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4 truncate">
                                                <option selected hidden>Seleccione tipo de documento</option>
                                                <option value="DNI">DNI</option>
                                                <option value="Carnet de Extranjería">Carnet de Extranjería</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="numDoc" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">N° de Documento</label>
                                            <div className="flex items-center w-full">
                                                <input type="text" id="numDoc" name="numDoc" required
                                                    value={formData.numDoc}
                                                    onChange={handleInputChange}
                                                    className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                <div className="bg-primary text-white p-2 rounded-full cursor-pointer hover:bg-primary/80 ml-2 shrink-0">
                                                    <Search size={20} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-4 items-center">
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="usuario" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap sm:w-60">Usuario</label>
                                            <input type="text" id="usuario" name="usuario" required disabled
                                                value={formData.usuario}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="cargo" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap sm:w-60">Cargo</label>
                                            <input type="text" id="cargo" name="cargo" required disabled
                                                value={formData.cargo}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="sede" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap sm:w-60">Sede</label>
                                            <input type="text" id="sede" name="sede" required disabled
                                                value={formData.sede}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="nomOficina" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap sm:w-60">Nombre de Oficina</label>
                                            <input type="text" id="nomOficina" name="nomOficina" required disabled
                                                value={formData.nomOficina}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                        </div>
                                    </div>
                                </fieldset>

                                <fieldset className="border border-gray-300 pt-3 md:pt-4 pb-5 md:pb-7 px-5 md:px-7 rounded-md">
                                    <legend className="px-2 text-base md:text-lg font-semibold">Información del Equipo</legend>
                                    <div className="grid grid-cols-1 gap-4 items-center mb-4">
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="codPatrimonialEquipo" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Código Patrimonial</label>
                                            <div className="flex items-center w-full">
                                                <input type="text" id="codPatrimonialEquipo" name="codPatrimonialEquipo" required
                                                    value={formData.codPatrimonialEquipo}
                                                    onChange={handleInputChange}
                                                    className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                <div className="bg-primary text-white p-2 rounded-full cursor-pointer hover:bg-primary/80 ml-2 shrink-0">
                                                    <Search size={20} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="tipoEquipo" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap sm:w-60">Tipo de Equipo</label>
                                            <input type="text" id="tipoEquipo" name="tipoEquipo" required disabled
                                                value={formData.tipoEquipo}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="fabricanteEquipo" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Fabricante</label>
                                            <input type="text" id="fabricanteEquipo" name="fabricanteEquipo" required disabled
                                                value={formData.fabricantEquipo}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="modeloEquipo" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Modelo</label>
                                            <input type="text" id="modeloEquipo" name="modeloEquipo" required disabled
                                                value={formData.modeloEquipo}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:flex-row lg:items-center my-4">
                                        <label htmlFor="numSerieEquipo" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap sm:w-60">Número de Serie</label>
                                        <input type="text" id="numSerieEquipo" name="numSerieEquipo" required disabled
                                            value={formData.numSerieEquipo}
                                                onChange={handleInputChange}
                                            className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="fechaAdquisicionEquipo" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3">Fecha de Adquisición</label>
                                            <input type="date" id="fechaAdquisicionEquipo" name="fechaAdquisicionEquipo" required disabled
                                                value={formData.fechaAdquisicionEquipo}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="estadoEquipo" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Estado</label>
                                            <select name="estadoEquipo" id="estadoEquipo" required 
                                                value={formData.estadoEquipo}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4 truncate">
                                                <option selected hidden>Seleccione estado de equipo</option>
                                                <option value="Bueno">Bueno</option>
                                                <option value="Regular">Regular</option>
                                                <option value="Malo">Malo</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="hostnameEquipo" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">HOSTNAME</label>
                                            <input type="text" id="hostnameEquipo" name="hostnameEquipo" required
                                                value={formData.hostnameEquipo}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="ipEquipo" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">IP</label>
                                            <input type="text" id="ipEquipo" name="ipEquipo" required
                                                value={formData.ipEquipo}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="flex justify-center md:justify-end gap-4 pt-6">
                                    <button type="button" onClick={() => cancelForm()}
                                        className="bg-gray-300 hover:bg-gray-200 font-semibold p-3 rounded-md text-sm md:text-base transition duration-200 ease-in-out">
                                        Cancelar
                                    </button>
                                    <button type="button" onClick={handleNextSection}
                                        className="bg-gray-900 hover:bg-gray-700 text-white font-semibold p-3 rounded-md text-sm md:text-base transition duration-200 ease-in-out">
                                        Siguiente
                                    </button>
                                </div>
                            </div>
                        )}

                        {seccionActiva === "especificas" && (
                            <>
                                <div className="m-6">
                                    <fieldset className="md:border border-gray-300 pt-2 md:pb-7 md:px-7 rounded-md mb-5">
                                        <legend className="px-2 text-base md:text-lg font-semibold">CPU/CASE</legend>
                                        <fieldset className="border border-gray-300 pt-3 md:pt-4 pb-5 md:pb-7 px-5 md:px-7 rounded-md mb-5">
                                            <legend className="px-2 text-base md:text-lg font-semibold">Placa Base</legend>
                                            <div className="flex flex-col lg:flex-row lg:items-center mb-4">
                                                <label htmlFor="codPatrimonialPlaca" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Código Patrimonial</label>
                                                <div className="flex items-center w-full">
                                                    <input type="text" id="codPatrimonialPlaca" name="codPatrimonialPlaca" required 
                                                        value={formData.codPatrimonialPlaca}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                    <div className="bg-primary text-white p-2 rounded-full cursor-pointer hover:bg-primary/80 ml-2 shrink-0">
                                                        <Search size={20} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="fabricantePlaca" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Fabricante</label>
                                                    <input type="text" id="fabricantePlaca" name="fabricantePlaca" required disabled
                                                        value={formData.fabricantePlaca}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="numSeriePlaca" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">N° de Serie</label>
                                                    <input type="text" id="numSeriePlaca" name="numSeriePlaca" required disabled
                                                        value={formData.numSeriePlaca}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="modeloPlaca" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Modelo</label>
                                                    <input type="text" id="modeloPlaca" name="modeloPlaca" required disabled
                                                        value={formData.modeloPlaca}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="estadoPlaca" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Estado</label>
                                                    <select name="estadoPlaca" id="estadoPlaca" required 
                                                        value={formData.estadoPlaca}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4 truncate">
                                                        <option selected hidden>Seleccione estado de placa base</option>
                                                        <option value="Bueno">Bueno</option>
                                                        <option value="Regular">Regular</option>
                                                        <option value="Malo">Malo</option>
                                                    </select>
                                                </div>
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="fechaInstalacionPlaca" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3">Fecha de Instalación</label>
                                                    <input type="date" id="fechaInstalacionPlaca" name="fechaInstalacionPlaca" required
                                                        value={formData.fechaInstalacionPlaca}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 mt-1 lg:mt-0 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="fechaDesinstalacionPlaca" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3">Fecha de Desinstalación</label>
                                                    <input type="date" id="fechaDesinstalacionPlaca" name="fechaDesinstalacionPlaca" required
                                                        value={formData.fechaDesinstalacionPlaca}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 mt-1 lg:mt-0 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                            </div>
                                        </fieldset>
                                        <div className="grid grid-cols-1 md:grid-cols-2 px-1 gap-4 my-4">
                                            <div className="flex flex-col lg:flex-row lg:items-center">
                                                <label htmlFor="procesador" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Procesador</label>
                                                <input type="text" id="procesador" name="procesador" required disabled
                                                    value={formData.procesador}
                                                        onChange={handleInputChange}
                                                    className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                            </div>
                                            <div className="flex flex-col lg:flex-row lg:items-center">
                                                <label htmlFor="estadoProcesador" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Estado</label>
                                                <select name="estadoProcesador" id="estadoProcesador" required 
                                                    value={formData.estadoProcesador}
                                                    onChange={handleInputChange}
                                                    className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4 truncate">
                                                    <option selected hidden>Seleccione estado de procesador</option>
                                                    <option value="Bueno">Bueno</option>
                                                    <option value="Regular">Regular</option>
                                                    <option value="Malo">Malo</option>
                                                </select>
                                            </div>
                                            <div className="flex flex-col lg:flex-row lg:items-center">
                                                <label htmlFor="discoDuro" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Disco Duro</label>
                                                <input type="text" id="discoDuro" name="discoDuro" required disabled
                                                    value={formData.discoDuro}
                                                        onChange={handleInputChange}
                                                    className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                            </div>
                                            <div className="flex flex-col lg:flex-row lg:items-center">
                                                <label htmlFor="estadoDiscoDuro" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Estado</label>
                                                <select name="estadoDiscoDuro" id="estadoDiscoDuro" required
                                                    value={formData.estadoDiscoDuro}
                                                    onChange={handleInputChange}
                                                    className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4 truncate">
                                                    <option selected hidden>Seleccione estado de disco duro</option>
                                                    <option value="Bueno">Bueno</option>
                                                    <option value="Regular">Regular</option>
                                                    <option value="Malo">Malo</option>
                                                </select>
                                            </div>
                                            <div className="flex flex-col lg:flex-row lg:items-center">
                                                <label htmlFor="memoria" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Memoria</label>
                                                <input type="text" id="memoria" name="memoria" required disabled
                                                    value={formData.memoria}
                                                        onChange={handleInputChange}
                                                    className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                            </div>
                                            <div className="flex flex-col lg:flex-row lg:items-center">
                                                <label htmlFor="estadoMemoria" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Estado</label>
                                                <select name="estadoMemoria" id="estadoMemoria" required
                                                    value={formData.estadoMemoria}
                                                    onChange={handleInputChange}
                                                    className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4 truncate">
                                                    <option selected hidden>Seleccione estado de memoria</option>
                                                    <option value="Bueno">Bueno</option>
                                                    <option value="Regular">Regular</option>
                                                    <option value="Malo">Malo</option>
                                                </select>
                                            </div>
                                            <div className="flex flex-col lg:flex-row lg:items-center">
                                                <label htmlFor="unidExtraible" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Unidad Extraible 1</label>
                                                <input type="text" id="unidExtraible" name="unidExtraible" required disabled
                                                    value={formData.unidExtraible}
                                                        onChange={handleInputChange}
                                                    className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                            </div>
                                            <div className="flex flex-col lg:flex-row lg:items-center">
                                                <label htmlFor="estadoUnidExtraible" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Estado</label>
                                                <select name="estadoUnidExtraible" id="estadoUnidExtraible" required
                                                    value={formData.estadoUnidExtraible}
                                                    onChange={handleInputChange}
                                                    className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4 truncate">
                                                    <option selected hidden>Seleccione estado de unidad extraible</option>
                                                    <option value="Bueno">Bueno</option>
                                                    <option value="Regular">Regular</option>
                                                    <option value="Malo">Malo</option>
                                                </select>
                                            </div>
                                        </div>
                                        <button type="button" className="flex items-center gap-3 text-sm md:text-base font-semibold">
                                            <PlusCircle size={20} /> <span>Añadir otra unidad extraible</span>
                                        </button>
                                    </fieldset>
                                    <div className="px-1">
                                        <label htmlFor="observacion" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap sm:w-60">Observaciones</label>
                                        <textarea id="observacion" name="observacion" required
                                            value={formData.observacion}
                                            onChange={handleInputChange}
                                            className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                    </div>
                                </div>

                                <div className="flex md:hidden w-full my-5 md:mb-0 border border-gray-300"/>

                                <div className="m-6 mt-0">
                                    <fieldset className="md:border border-gray-300 pt-2 md:pb-7 md:px-7 rounded-md mb-5">
                                        <legend className="px-2 text-base md:text-lg font-semibold">Periféricos</legend>
                                        <fieldset className="border border-gray-300 pt-3 md:pt-4 pb-5 md:pb-7 px-5 md:px-7 rounded-md mb-5">
                                            <legend className="px-2 text-base md:text-lg font-semibold">Monitor</legend>
                                            <div className="flex flex-col lg:flex-row lg:items-center mb-4">
                                                <label htmlFor="codPatrimonialMonitor" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Código Patrimonial</label>
                                                <div className="flex items-center w-full">
                                                    <input type="text" id="codPatrimonialMonitor" name="codPatrimonialMonitor" required 
                                                        value={formData.codPatrimonialMonitor}
                                                            onChange={handleInputChange}
                                                            className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                    <div className="bg-primary text-white p-2 rounded-full cursor-pointer hover:bg-primary/80 ml-2 shrink-0">
                                                        <Search size={20} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="fabricanteMonitor" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Fabricante</label>
                                                    <input type="text" id="fabricanteMonitor" name="fabricanteMonitor" required disabled
                                                        value={formData.fabricanteMonitor}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="numSerieMonitor" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">N° de Serie</label>
                                                    <input type="text" id="numSerieMonitor" name="numSerieMonitor" required disabled
                                                        value={formData.numSerieMonitor}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="modeloMonitor" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Modelo</label>
                                                    <input type="text" id="modeloMonitor" name="modeloMonitor" required disabled
                                                        value={formData.modeloMonitor}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="estadoMonitor" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Estado</label>
                                                    <select name="estadoMonitor" id="estadoMonitor" required 
                                                        value={formData.estadoMonitor}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4 truncate">
                                                        <option selected hidden>Seleccione estado de monitor</option>
                                                        <option value="Bueno">Bueno</option>
                                                        <option value="Regular">Regular</option>
                                                        <option value="Malo">Malo</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </fieldset>
                                        <fieldset className="border border-gray-300 pt-3 md:pt-4 pb-5 md:pb-7 px-5 md:px-7 rounded-md mb-5">
                                            <legend className="px-2 text-base md:text-lg font-semibold">Teclado</legend>
                                            <div className="flex flex-col lg:flex-row lg:items-center mb-4">
                                                <label htmlFor="codPatrimonialTeclado" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Código Patrimonial</label>
                                                <div className="flex items-center w-full">
                                                    <input type="text" id="codPatrimonialTeclado" name="codPatrimonialTeclado" required 
                                                        value={formData.codPatrimonialTeclado}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                    <div className="bg-primary text-white p-2 rounded-full cursor-pointer hover:bg-primary/80 ml-2 shrink-0">
                                                        <Search size={20} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="fabricanteTeclado" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Fabricante</label>
                                                    <input type="text" id="fabricanteTeclado" name="fabricanteTeclado" required disabled
                                                        value={formData.fabricanteTeclado}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="numSerieTeclado" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">N° de Serie</label>
                                                    <input type="text" id="numSerieTeclado" name="numSerieTeclado" required disabled
                                                        value={formData.numSerieTeclado}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="modeloTeclado" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Modelo</label>
                                                    <input type="text" id="modeloTeclado" name="modeloTeclado" required disabled
                                                        value={formData.modeloTeclado}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="estadoTeclado" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Estado</label>
                                                    <select name="estadoTeclado" id="estadoTeclado" required 
                                                        value={formData.estadoTeclado}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4 truncate">
                                                        <option selected hidden>Seleccione estado de teclado</option>
                                                        <option value="Bueno">Bueno</option>
                                                        <option value="Regular">Regular</option>
                                                        <option value="Malo">Malo</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </fieldset>
                                        <fieldset className="border border-gray-300 pt-3 md:pt-4 pb-5 md:pb-7 px-5 md:px-7 rounded-md mb-5">
                                            <legend className="px-2 text-base md:text-lg font-semibold">Mouse</legend>
                                            <div className="flex flex-col lg:flex-row lg:items-center mb-4">
                                                <label htmlFor="codPatrimonialMouse" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Código Patrimonial</label>
                                                <div className="flex items-center w-full">
                                                    <input type="text" id="codPatrimonialMouse" name="codPatrimonialMouse" required 
                                                        value={formData.codPatrimonialMouse}
                                                            onChange={handleInputChange}
                                                            className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                    <div className="bg-primary text-white p-2 rounded-full cursor-pointer hover:bg-primary/80 ml-2 shrink-0">
                                                        <Search size={20} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="fabricanteMouse" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Fabricante</label>
                                                    <input type="text" id="fabricanteMouse" name="fabricanteMouse" required disabled
                                                        value={formData.fabricanteMouse}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="numSerieMouse" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">N° de Serie</label>
                                                    <input type="text" id="numSerieMouse" name="numSerieMouse" required disabled
                                                        value={formData.numSerieMouse}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="modeloMouse" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Modelo</label>
                                                    <input type="text" id="modeloMouse" name="modeloMouse" required disabled
                                                        value={formData.modeloMouse}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="estadoMouse" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Estado</label>
                                                    <select name="estadoMouse" id="estadoMouse" required 
                                                        value={formData.estadoMouse}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4 truncate">
                                                        <option selected hidden>Seleccione estado de mouse</option>
                                                        <option value="Bueno">Bueno</option>
                                                        <option value="Regular">Regular</option>
                                                        <option value="Malo">Malo</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </fieldset>
                                        <fieldset className="border border-gray-300 pt-3 md:pt-4 pb-5 md:pb-7 px-5 md:px-7 rounded-md mb-5">
                                            <legend className="px-2 text-base md:text-lg font-semibold">Parlantes</legend>
                                            <div className="flex flex-col lg:flex-row lg:items-center mb-4">
                                                <label htmlFor="codPatrimonialParlantes" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Código Patrimonial</label>
                                                <div className="flex items-center w-full">
                                                    <input type="text" id="codPatrimonialParlantes" name="codPatrimonialParlantes" required 
                                                        value={formData.codPatrimonialParlantes}
                                                            onChange={handleInputChange}
                                                            className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                    <div className="bg-primary text-white p-2 rounded-full cursor-pointer hover:bg-primary/80 ml-2 shrink-0">
                                                        <Search size={20} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="fabricanteParlantes" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Fabricante</label>
                                                    <input type="text" id="fabricanteParlantes" name="fabricanteParlantes" required disabled
                                                        value={formData.fabricanteParlantes}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="numSerieParlantes" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">N° de Serie</label>
                                                    <input type="text" id="numSerieParlantes" name="numSerieParlantes" required disabled
                                                        value={formData.numSerieParlantes}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="modeloParlantes" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Modelo</label>
                                                    <input type="text" id="modeloParlantes" name="modeloParlantes" required disabled
                                                        value={formData.modeloParlantes}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="estadoParlantes" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Estado</label>
                                                    <select name="estadoParlantes" id="estadoParlantes" required
                                                        value={formData.estadoParlantes}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4 truncate">
                                                        <option selected hidden>Seleccione estado de parlantes</option>
                                                        <option value="Bueno">Bueno</option>
                                                        <option value="Regular">Regular</option>
                                                        <option value="Malo">Malo</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </fieldset>
                                        <fieldset className="border border-gray-300 pt-3 md:pt-4 pb-5 md:pb-7 px-5 md:px-7 rounded-md mb-5">
                                            <legend className="px-2 text-base md:text-lg font-semibold">Estabilizador</legend>
                                            <div className="flex flex-col lg:flex-row lg:items-center mb-4">
                                                <label htmlFor="codPatrimonialEstabilizador" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Código Patrimonial</label>
                                                <div className="flex items-center w-full">
                                                    <input type="text" id="codPatrimonialEstabilizador" name="codPatrimonialEstabilizador" required 
                                                            value={formData.codPatrimonialEstabilizador}
                                                            onChange={handleInputChange}
                                                            className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                    <div className="bg-primary text-white p-2 rounded-full cursor-pointer hover:bg-primary/80 ml-2 shrink-0">
                                                        <Search size={20} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="fabricanteEstabilizador" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Fabricante</label>
                                                    <input type="text" id="fabricanteEstabilizador" name="fabricanteEstabilizador" required disabled
                                                        value={formData.fabricanteEstabilizador}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="numSerieEstabilizador" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">N° de Serie</label>
                                                    <input type="text" id="numSerieEstabilizador" name="numSerieEstabilizador" required disabled
                                                        value={formData.numSerieEstabilizador}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="modeloEstabilizador" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Modelo</label>
                                                    <input type="text" id="modeloEstabilizador" name="modeloEstabilizador" required disabled
                                                        value={formData.modeloEstabilizador}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="estadoEstabilizador" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Estado</label>
                                                    <select name="estadoEstabilizador" id="estadoEstabilizador" required
                                                        value={formData.estadoEstabilizador}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4 truncate">
                                                        <option selected hidden>Seleccione estado de estabilizador</option>
                                                        <option value="Bueno">Bueno</option>
                                                        <option value="Regular">Regular</option>
                                                        <option value="Malo">Malo</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </fieldset>
                                        <fieldset className="border border-gray-300 pt-3 md:pt-4 pb-5 md:pb-7 px-5 md:px-7 rounded-md mb-5">
                                            <legend className="px-2 text-base md:text-lg font-semibold">Supresor de Pico</legend>
                                            <div className="flex flex-col lg:flex-row lg:items-center mb-4">
                                                <label htmlFor="codPatrimonialSupresorPico" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Código Patrimonial</label>
                                                <div className="flex items-center w-full">
                                                    <input type="text" id="codPatrimonialSupresorPico" name="codPatrimonialSupresorPico" required 
                                                        value={formData.codPatrimonialSupresorPico}
                                                            onChange={handleInputChange}
                                                            className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                    <div className="bg-primary text-white p-2 rounded-full cursor-pointer hover:bg-primary/80 ml-2 shrink-0">
                                                        <Search size={20} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="fabricanteSupresorPico" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Fabricante</label>
                                                    <input type="text" id="fabricanteSupresorPico" name="fabricanteSupresorPico" required disabled
                                                        value={formData.fabricanteSupresorPico}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="numSerieSupresorPico" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">N° de Serie</label>
                                                    <input type="text" id="numSerieSupresorPico" name="numSerieSupresorPico" required disabled
                                                        value={formData.numSerieSupresorPico}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="modeloSupresorPico" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Modelo</label>
                                                    <input type="text" id="modeloSupresorPico" name="modeloSupresorPico" required disabled
                                                        value={formData.modeloSupresorPico}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="estadoSupresorPico" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Estado</label>
                                                    <select name="estadoSupresorPico" id="estadoSupresorPico" required
                                                        value={formData.estadoSupresorPico}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4 truncate">
                                                        <option selected hidden>Seleccione estado de supresor de pico</option>
                                                        <option value="Bueno">Bueno</option>
                                                        <option value="Regular">Regular</option>
                                                        <option value="Malo">Malo</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </fieldset>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="tarjeta" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Tarjeta 1</label>
                                                    <input type="text" id="tarjeta" name="tarjeta" required
                                                        value={formData.tarjeta}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="estadoTarjeta" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Estado</label>
                                                    <select name="estadoTarjeta" id="estadoTarjeta" required
                                                        value={formData.estadoTarjeta}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4 truncate">
                                                        <option selected hidden>Seleccione estado de tarjeta</option>
                                                        <option value="Bueno">Bueno</option>
                                                        <option value="Regular">Regular</option>
                                                        <option value="Malo">Malo</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <button type="button" className="flex items-center gap-3 text-sm md:text-base font-semibold mt-4">
                                                <PlusCircle size={20} /> <span>Añadir otra tarjeta</span>
                                            </button>
                                            </fieldset>
                                        <fieldset className="border border-gray-300 pt-3 md:pt-4 pb-5 md:pb-7 px-5 md:px-7 rounded-md mb-5">
                                            <legend className="px-2 text-base md:text-lg font-semibold">Sistema</legend>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                <label htmlFor="tipoSO" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Tipo de SO</label>
                                                    <select name="tipoSO" id="tipoSO" required
                                                        value={formData.tipoSO}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4 truncate">
                                                        <option selected hidden>Seleccione tipo de sistema operativo</option>
                                                        <option value="Windows">Windows</option>
                                                        <option value="macOS">macOS</option>
                                                        <option value="Linux">Linux</option>
                                                        <option value="Unix">Unix</option>
                                                        <option value="FreeBSD">FreeBSD</option>
                                                        <option value="Otro">Otro</option>
                                                    </select>
                                                </div>
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowra">Licencia</label>
                                                    <div className="flex flex-wrap gap-4 h-full items-center">
                                                        <div className="flex items-center">
                                                            <input type="radio" name="licenciaSistema" id="licenciaSistemaSi" required 
                                                                value="Si"
                                                                checked={formData.licenciaSistema === "Si"}
                                                                onChange={handleInputChange}
                                                                className="mr-2 w-4 h-4 accent-blue-600 cursor-pointer"/>
                                                            <label htmlFor="licenciaSistemaSi" className="text-sm md:text-base">SI</label>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <input type="radio" name="licenciaSistema" id="licenciaSistemaNo" required 
                                                                value="No"
                                                                checked={formData.licenciaSistema === "No"}
                                                                onChange={handleInputChange}
                                                                className="mr-2 w-4 h-4 accent-blue-600 cursor-pointer"/>
                                                            <label htmlFor="licenciaSistemaNo" className="text-sm md:text-base">NO</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                        <fieldset className="border border-gray-300 pt-3 md:pt-4 pb-5 md:pb-7 px-5 md:px-7 rounded-md">
                                            <legend className="px-2 text-base md:text-lg font-semibold">Software</legend>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="nomSoftware" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Nombre del Software</label>
                                                    <input type="text" id="nomSoftware" name="nomSoftware" required
                                                        value={formData.nomSoftware}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="añoSoftware" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Año</label>
                                                    <select name="añoSoftware" id="añoSoftware" required
                                                        value={formData.añoSoftware}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4 truncate">
                                                        <option selected hidden>Seleccione año del software</option>
                                                        <option value="2025">2025</option>
                                                        <option value="2024">2024</option>
                                                        <option value="2023">2023</option>
                                                        <option value="2022">2022</option>
                                                        <option value="2021">2021</option>
                                                        <option value="2020">2020</option>
                                                        <option value="2019">2019</option>
                                                        <option value="2018">2018</option>
                                                        <option value="2017">2017</option>
                                                        <option value="2016">2016</option>
                                                        <option value="2015">2015</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="flex flex-col lg:flex-row lg:items-center">
                                                <label className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowra">Licencia</label>
                                                <div className="flex flex-wrap gap-4">
                                                    <div className="flex items-center">
                                                        <input type="radio" name="licenciaSoftware" id="licenciaSoftwareSi" required 
                                                            value="Si"
                                                            checked={formData.licenciaSoftware === "Si"}
                                                            onChange={handleInputChange}
                                                            className="mr-2 w-4 h-4 accent-blue-600 cursor-pointer"/>
                                                        <label htmlFor="licenciaSoftwareSi" className="text-sm md:text-base">SI</label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input type="radio" name="licenciaSoftware" id="licenciaSoftwareNo" required 
                                                            value="No"
                                                            checked={formData.licenciaSoftware === "No"}
                                                            onChange={handleInputChange}
                                                            className="mr-2 w-4 h-4 accent-blue-600 cursor-pointer"/>
                                                        <label htmlFor="licenciaSoftwareNo" className="text-sm md:text-base">NO</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="fechaInicioSoftware" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Fecha de Inicio</label>
                                                    <input type="date" id="fechaInicioSoftware" name="fechaInicioSoftware" required
                                                        value={formData.fechaInicioSoftware}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="fechaFinSoftware" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Fecha de Fin</label>
                                                    <input type="date" id="fechaFinSoftware" name="fechaFinSoftware" required
                                                        value={formData.fechaFinSoftware}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                            </div>
                                            <button type="button" className="flex items-center gap-3 text-sm md:text-base font-semibold">
                                                <PlusCircle size={20} /> <span>Añadir otro software</span>
                                            </button>
                                        </fieldset>
                                    <div className="flex justify-center md:justify-end gap-4 pt-6">
                                        <button type="button" onClick={() => cancelForm()}
                                            className="bg-gray-300 hover:bg-gray-200 font-semibold p-3 rounded-md text-sm md:text-base transition duration-200 ease-in-out">
                                            Cancelar
                                        </button>
                                        <button type="button" onClick={() => setSeccionActiva("general")} className="bg-gray-900 hover:bg-gray-700 px-6 text-white font-semibold p-3 rounded-md text-sm md:text-base transition duration-200 ease-in-out">
                                            Atrás
                                        </button>
                                        <button type="submit" className="bg-primary hover:bg-primary/80 text-white font-semibold p-3 rounded-md text-sm md:text-base transition duration-200 ease-in-out">
                                            Guardar
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </form>
                </CardContent>
            </Card>
        </>
    );
}
