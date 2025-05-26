"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";
import { RegistroEquiposComputo } from "@/types/registroEquiposPerifericos";

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
        "sede",
        "nomOficina",

        // Equipo
        "codPatrimonialEquipo", "tipoEquipo", "fabricanteEquipo", "modeloEquipo", "numSerieEquipo", "fechAdquisicionEquipo", 
        "estadoEquipo", "hostnameEquipo", "ipEquipo", "factorFormaEquipo", "numFacturaEquipo"
    ];

    const camposEspecificosEquiposComputo = [
        // Placa Base
        "codPatrimonialPlaca", "fabricantePlaca", "numSeriePlaca",
        "modeloPlaca", "estadoPlaca",

        // Procesador
        "fabricanteProcesador", "estadoProcesador", "modeloProcesador",

        // Disco Duro
        "DescripcionDiscoDuro", "interfazDiscoDuro", "tipoDiscoDuro",
        "estadoDiscoDuro", "capacidadDiscoDuro",

        // Memoria
        "moduloMemoria", "velocidadMemoria", "capacidadMemoria", "estadoMemoria",

        // Fuente
        "fabricanteFuente", "tipoFuente", "modeloFuente", "estadoFuente", "potenciaFuente",

        // Unidad Extraíble
        "unidExtraible", "estadoUnidExtraible",

        "observacion",

        // Monitor
        "codPatrimonialMonitor", "fabricanteMonitor", "numSerieMonitor",
        "modeloMonitor", "estadoMonitor", "tamañoMonitor", "tipoMonitor",

        // Teclado
        "codPatrimonialTeclado", "fabricanteTeclado", "numSerieTeclado",
        "modeloTeclado", "estadoTeclado",

        // Mouse
        "codPatrimonialMouse", "fabricanteMouse", "numSerieMouse",
        "modeloMouse", "estadoMouse",

        // Parlantes
        "codPatrimonialParlantes", "fabricanteParlantes", "numSerieParlantes",
        "modeloParlantes", "estadoParlantes",

        // Estabilizador
        "codPatrimonialEstabilizador", "fabricanteEstabilizador", "numSerieEstabilizador",
        "modeloEstabilizador", "estadoEstabilizador",

        // Supresor de Pico
        "codPatrimonialSupresorPico", "fabricanteSupresorPico", "numSerieSupresorPico",
        "modeloSupresorPico", "estadoSupresorPico",

        // Tarjeta adicional
        "tarjeta", "estadoTarjeta",

        // Sistema Operativo
        "tipoSO", "licenciaSistema"
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
            <h1 className="text-lg md:text-2xl font-bold text-center mb-6">Registro de Equipo Físico y Lógico de Equipos de Cómputo y Periféricos de MPP</h1>
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
                                <fieldset className="border border-gray-300 pt-3 md:pt-4 pb-5 md:pb-7 px-5 md:px-7 rounded-md mb-5">
                                    <legend className="px-2 text-base md:text-lg font-semibold">Ubicación del Equipo</legend>
                                    <div className="grid grid-cols-1 gap-4">
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="tipoDoc" className="text-sm md:text-base mr-3 font-medium whitespace-normal sm:whitespace-nowrap">Sede</label>
                                            <select name="sede" id="sede" required 
                                                value={formData.sede}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4 truncate">
                                                <option selected hidden>Seleccione una sede</option>
                                                <option value="Palacio Municipal">Palacio Municipal</option>
                                                <option value="Oficina de Transportes">Oficina de Transportes</option>
                                                <option value="Planta de Serenazgo">Planta de Serenazgo</option>
                                                <option value="Biblioteca Municipal">Biblioteca Municipal</option>
                                                <option value="Teatro Municipal">Teatro Municipal</option>
                                                <option value="Oficinas de Desarrollo Social">Oficinas de Desarrollo Social</option>
                                                <option value="Oficina de Gestión Ambiental">Oficina de Gestión Ambiental</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="tipoDoc" className="text-sm md:text-base mr-3 font-medium whitespace-normal sm:whitespace-nowrap">Nombre de Oficina</label>
                                            <select name="nomOficina" id="nomOficina" required 
                                                value={formData.nomOficina}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4 truncate">
                                                <option selected hidden>Seleccione una oficina</option>
                                                <option value="Alcaldía">Alcaldía</option>
                                                <option value="Gerencia Municipal">Gerencia Municipal</option>
                                                <option value="Oficina de Recursos Humanos">Oficina de Recursos Humanos</option>
                                                <option value="Oficina de Tesorería">Oficina de Tesorería</option>
                                                <option value="Oficina de Contabilidad">Oficina de Contabilidad</option>
                                                <option value="Oficina de Logística">Oficina de Logística</option>
                                                <option value="Oficina de Planeamiento y Presupuesto">Oficina de Planeamiento y Presupuesto</option>
                                                <option value="Oficina de Asesoría Jurídica">Oficina de Asesoría Jurídica</option>
                                                <option value="Secretaría General">Secretaría General</option>
                                            </select>
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
                                            <label htmlFor="tipoEquipo" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Tipo de Equipo</label>
                                            <select name="tipoEquipo" id="tipoEquipo" required 
                                                value={formData.tipoEquipo}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4 truncate">
                                                <option selected hidden>Seleccione un tipo de equipo</option>
                                                <option value="Equipos de Cómputo">Equipos de Cómputo</option>
                                                <option value="Impresora y Fotocopiadora">Impresora y Fotocopiadora</option>
                                                <option value="Servidor">Servidor</option>
                                                <option value="Pantalla">Pantalla</option>
                                                <option value="Equipo Biométrico">Equipo Biométrico</option>
                                                <option value="Contador de Billetes">Contador de Billetes</option>
                                                <option value="Impresora de Tarjeta PVC">Impresora de Tarjeta PVC</option>
                                                <option value="Cámara">Cámara</option>
                                                <option value="Escáner">Escaner</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="fabricanteEquipo" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Fabricante</label>
                                            <select name="fabricanteEquipo" id="fabricanteEquipo" required 
                                                value={formData.fabricanteEquipo}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4 truncate">
                                                <option selected hidden>Seleccione fabricante de equipo</option>
                                                <option value="Dell">Dell</option>
                                                <option value="HP">HP</option>
                                                <option value="Lenovo">Lenovo</option>
                                                <option value="Asus">Asus</option>
                                                <option value="Acer">Acer</option>
                                                <option value="Cisco">Cisco</option>
                                                <option value="Apple">Apple</option>
                                                <option value="Samsung">Samsung</option>
                                            </select>
                                        </div>

                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="modeloEquipo" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Modelo</label>
                                            <input type="text" id="modeloEquipo" name="modeloEquipo" required
                                                value={formData.modeloEquipo}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:flex-row lg:items-center my-4">
                                        <label htmlFor="numSerieEquipo" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap sm:w-60">Número de Serie</label>
                                        <input type="text" id="numSerieEquipo" name="numSerieEquipo" required
                                            value={formData.numSerieEquipo}
                                                onChange={handleInputChange}
                                            className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="fechAdquisicionEquipo" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Fecha de Adquisición</label>
                                            <input type="date" id="fechAdquisicionEquipo" name="fechAdquisicionEquipo" required
                                                value={formData.fechAdquisicionEquipo}
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
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="factorFormaEquipo" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Factor de forma</label>
                                            <select name="factorFormaEquipo" id="factorFormaEquipo" required 
                                                value={formData.factorFormaEquipo}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4 truncate">
                                                <option selected hidden>Seleccione factor de forma</option>
                                                <option value="Tower">Tower (Torre)</option>
                                                <option value="Rackmount 1U">Rackmount 1U</option>
                                                <option value="Rackmount 2U">Rackmount 2U</option>
                                                <option value="Rackmount 4U">Rackmount 4U</option>
                                                <option value="Blade">Blade</option>
                                                <option value="Mini-ITX">Mini-ITX</option>
                                                <option value="Micro-ATX">Micro-ATX</option>
                                                <option value="ATX">ATX</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="imagenEquipo" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Anexar Imagen</label>
                                            <input type="file" id="imagenEquipo" name="imagenEquipo"
                                                value={formData.imagenEquipo}
                                                onChange={handleInputChange}
                                                className="w-full border border-gray-300 rounded-md file:mr-4 file:py-2 file:px-4 file:border-0 
                                                file:text-sm file:md:text-base file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="garantiaEquipo" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Garantía</label>
                                            <input type="checkbox" id="garantiaEquipo" name="garantiaEquipo"
                                                value={formData.garantiaEquipo}
                                                onChange={handleInputChange}
                                                className="w-4 h-4 ml-2 accent-blue-600" />
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="numFacturaEquipo" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">N° de Factura</label>
                                            <input type="text" id="numFacturaEquipo" name="numFacturaEquipo" required
                                                value={formData.numFacturaEquipo}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="flex justify-center md:justify-end gap-4 pt-6">
                                    <button type="button" onClick={() => cancelForm()}
                                        className="bg-gray-300 hover:bg-gray-200 font-semibold p-3 rounded-md text-sm md:text-base">
                                        Cancelar
                                    </button>
                                    <button type="button"  onClick={handleNextSection}
                                        className="bg-gray-900 hover:bg-gray-700 text-white font-semibold p-3 rounded-md text-sm md:text-base">
                                        Siguiente
                                    </button>
                                </div>
                            </div>
                        )}

                        {seccionActiva === "especificas" && (
                            <>
                                <div className="m-6 md:mb-6 mb-0">
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
                                                    <input type="text" id="fabricantePlaca" name="fabricantePlaca" required
                                                        value={formData.fabricantePlaca}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="numSeriePlaca" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">N° de Serie</label>
                                                    <input type="text" id="numSeriePlaca" name="numSeriePlaca" required
                                                        value={formData.numSeriePlaca}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="modeloPlaca" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Modelo</label>
                                                    <input type="text" id="modeloPlaca" name="modeloPlaca" required
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
                                            </div>
                                        </fieldset>
                                        <fieldset className="border border-gray-300 pt-3 md:pt-4 pb-5 md:pb-7 px-5 md:px-7 rounded-md mb-5">
                                            <legend className="px-2 text-base md:text-lg font-semibold">Procesador</legend>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="fabricanteProcesador" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Fabricante</label>
                                                    <input type="text" id="fabricanteProcesador" name="fabricanteProcesador" required
                                                        value={formData.fabricanteProcesador}
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
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="modeloProcesador" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Modelo</label>
                                                    <input type="text" id="modeloProcesador" name="modeloProcesador" required
                                                        value={formData.modeloProcesador}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                            </div>
                                        </fieldset>
                                        <fieldset className="border border-gray-300 pt-3 md:pt-4 pb-5 md:pb-7 px-5 md:px-7 rounded-md mb-5">
                                            <legend className="px-2 text-base md:text-lg font-semibold">Disco Duro</legend>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="DescripcionDiscoDuro" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Descripción</label>
                                                    <input type="text" id="DescripcionDiscoDuro" name="DescripcionDiscoDuro" required
                                                        value={formData.DescripcionDiscoDuro}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="interfazDiscoDuro" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Interfaz</label>
                                                    <input type="text" id="interfazDiscoDuro" name="interfazDiscoDuro" required
                                                        value={formData.interfazDiscoDuro}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                                
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="tipoDiscoDuro" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Tipo</label>
                                                    <select name="tipoDiscoDuro" id="tipoDiscoDuro" required 
                                                        value={formData.tipoDiscoDuro}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4 truncate">
                                                        <option selected hidden>Seleccione tipo de disco duro</option>
                                                        <option value="HDD">HDD (Disco duro mecánico)</option>
                                                        <option value="SSD">SSD (Unidad de estado sólido)</option>
                                                        <option value="NVMe">NVMe (Unidad de estado sólido ultrarrápida)</option>
                                                        <option value="SSHD">SSHD (Disco híbrido)</option>
                                                        <option value="SATA">SATA</option>
                                                        <option value="SAS">SAS</option>
                                                    </select>
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
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="capacidadDiscoDuro" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Capacidad</label>
                                                    <input type="text" id="capacidadDiscoDuro" name="capacidadDiscoDuro" required
                                                        value={formData.capacidadDiscoDuro}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                            </div>
                                        </fieldset>
                                        <fieldset className="border border-gray-300 pt-3 md:pt-4 pb-5 md:pb-7 px-5 md:px-7 rounded-md mb-5">
                                            <legend className="px-2 text-base md:text-lg font-semibold">Memoria</legend>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="moduloMemoria" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Módulo</label>
                                                    <input type="text" id="moduloMemoria" name="moduloMemoria" required
                                                        value={formData.moduloMemoria}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="velocidadMemoria" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Velocidad</label>
                                                    <input type="text" id="velocidadMemoria" name="velocidadMemoria" required
                                                        value={formData.velocidadMemoria}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="capacidadMemoria" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Capacidad</label>
                                                    <input type="text" id="capacidadMemoria" name="capacidadMemoria" required
                                                        value={formData.capacidadMemoria}
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
                                            </div>
                                        </fieldset>
                                        <fieldset className="border border-gray-300 pt-3 md:pt-4 pb-5 md:pb-7 px-5 md:px-7 rounded-md">
                                            <legend className="px-2 text-base md:text-lg font-semibold">Fuente</legend>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="fabricanteFuente" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Fabricante</label>
                                                    <input type="text" id="fabricanteFuente" name="fabricanteFuente" required
                                                        value={formData.fabricanteFuente}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="tipoFuente" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Tipo</label>
                                                    <select name="tipoFuente" id="tipoFuente" required 
                                                        value={formData.tipoFuente}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4 truncate">
                                                        <option selected hidden>Seleccione tipo de fuente</option>
                                                        <option value="ATX">ATX</option>
                                                        <option value="SFX">SFX</option>
                                                        <option value="TFX">TFX</option>
                                                        <option value="Redundante">Fuente redundante</option>
                                                        <option value="Modular">Fuente modular</option>
                                                        <option value="No modular">Fuente no modular</option>
                                                    </select>
                                                </div>
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="modeloFuente" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Modelo</label>
                                                    <input type="text" id="modeloFuente" name="modeloFuente" required
                                                        value={formData.modeloFuente}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="estadoFuente" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Estado</label>
                                                    <select name="estadoFuente" id="estadoFuente" required 
                                                        value={formData.estadoFuente}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4 truncate">
                                                        <option selected hidden>Seleccione estado de fuente</option>
                                                        <option value="Bueno">Bueno</option>
                                                        <option value="Regular">Regular</option>
                                                        <option value="Malo">Malo</option>
                                                    </select>
                                                </div>
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="potenciaFuente" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Potencia</label>
                                                    <input type="text" id="potenciaFuente" name="potenciaFuente" required
                                                        value={formData.potenciaFuente}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                            </div>
                                        </fieldset>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-7 mb-4">
                                            <div className="flex flex-col lg:flex-row lg:items-center">
                                                <label htmlFor="unidExtraible" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Unidad Extraible 1</label>
                                                <input type="text" id="unidExtraible" name="unidExtraible" required
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
                                            <div className="font-semibold">
                                                +  Añadir otra unidad extraible
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="observacion" className="block font-medium">Observaciones</label>
                                            <textarea id="observacion" name="observacion" required
                                                value={formData.observacion}
                                                onChange={handleInputChange}
                                                className="w-full h-24 mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-4"></textarea>
                                        </div>
                                    </fieldset>
                                </div>

                                <div className="flex md:hidden w-full my-4 md:mb-0 border border-gray-300"/>
                                
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
                                                    <input type="text" id="fabricanteMonitor" name="fabricanteMonitor" required
                                                        value={formData.fabricanteMonitor}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="numSerieMonitor" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">N° de Serie</label>
                                                    <input type="text" id="numSerieMonitor" name="numSerieMonitor" required
                                                        value={formData.numSerieMonitor}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="modeloMonitor" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Modelo</label>
                                                    <input type="text" id="modeloMonitor" name="modeloMonitor" required
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
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="tamañoMonitor" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Tamaño</label>
                                                    <input type="text" id="tamañoMonitor" name="tamañoMonitor" required
                                                        value={formData.tamañoMonitor}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="tipoMonitor" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Tipo de Monitor</label>
                                                    <select name="tipoMonitor" id="tipoMonitor" required 
                                                        value={formData.tipoMonitor}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4 truncate">
                                                        <option selected hidden>Seleccione tipo de monitor</option>
                                                        <option value="LCD">LCD</option>
                                                        <option value="LED">LED</option>
                                                        <option value="OLED">OLED</option>
                                                        <option value="Curvo">Curvo</option>
                                                        <option value="Táctil">Táctil</option>
                                                        <option value="Ultrapanorámico">Ultrapanorámico</option>
                                                        <option value="Gaming">Gaming</option>
                                                        <option value="Profesional">Profesional</option>
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
                                                    <input type="text" id="fabricanteTeclado" name="fabricanteTeclado" required
                                                        value={formData.fabricanteTeclado}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="numSerieTeclado" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">N° de Serie</label>
                                                    <input type="text" id="numSerieTeclado" name="numSerieTeclado" required
                                                        value={formData.numSerieTeclado}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="modeloTeclado" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Modelo</label>
                                                    <input type="text" id="modeloTeclado" name="modeloTeclado" required
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
                                                    <input type="text" id="fabricanteMouse" name="fabricanteMouse" required
                                                        value={formData.fabricanteMouse}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="numSerieMouse" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">N° de Serie</label>
                                                    <input type="text" id="numSerieMouse" name="numSerieMouse" required
                                                        value={formData.numSerieMouse}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="modeloMouse" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Modelo</label>
                                                    <input type="text" id="modeloMouse" name="modeloMouse" required
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
                                                    <input type="text" id="fabricanteParlantes" name="fabricanteParlantes" required
                                                        value={formData.fabricanteParlantes}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="numSerieParlantes" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">N° de Serie</label>
                                                    <input type="text" id="numSerieParlantes" name="numSerieParlantes" required
                                                        value={formData.numSerieParlantes}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="modeloParlantes" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Modelo</label>
                                                    <input type="text" id="modeloParlantes" name="modeloParlantes" required
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
                                                    <input type="text" id="fabricanteEstabilizador" name="fabricanteEstabilizador" required
                                                        value={formData.fabricanteEstabilizador}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="numSerieEstabilizador" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">N° de Serie</label>
                                                    <input type="text" id="numSerieEstabilizador" name="numSerieEstabilizador" required
                                                        value={formData.numSerieEstabilizador}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="modeloEstabilizador" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Modelo</label>
                                                    <input type="text" id="modeloEstabilizador" name="modeloEstabilizador" required
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
                                            <legend className="px-2 text-base md:text-lg font-semibold">Supresor de pico</legend>
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
                                                    <input type="text" id="fabricanteSupresorPico" name="fabricanteSupresorPico" required
                                                        value={formData.fabricanteSupresorPico}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="numSerieSupresorPico" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">N° de Serie</label>
                                                    <input type="text" id="numSerieSupresorPico" name="numSerieSupresorPico" required
                                                        value={formData.numSerieSupresorPico}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="flex flex-col lg:flex-row lg:items-center">
                                                    <label htmlFor="modeloSupresorPico" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Modelo</label>
                                                    <input type="text" id="modeloSupresorPico" name="modeloSupresorPico" required
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
                                            <div className="font-semibold">
                                                + Añadir otra tarjeta
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset className="border border-gray-300 pt-3 md:pt-4 pb-5 md:pb-7 px-5 md:px-7 rounded-md">
                                        <legend className="px-2 text-base md:text-lg font-semibold">Sistema</legend>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="flex flex-col lg:flex-row lg:items-center">
                                                <label htmlFor="tipoSO" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Tipo de SO</label>
                                                <select name="tipoSO" id="tipoSO" required
                                                    value={formData.tipoSO}
                                                    onChange={handleInputChange}
                                                    className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4 truncate">
                                                    <option selected hidden>Seleccione estado de SO</option>
                                                    <option value="Windows">Windows</option>
                                                    <option value="MacOS">MacOS</option>
                                                    <option value="Linux">Linux</option>
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
                                                            className="mr-2 w-4 h-4 accent-blue-600"/>
                                                        <label htmlFor="licenciaSistemaSi">SI</label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input type="radio" name="licenciaSistema" id="licenciaSistemaNo" required 
                                                            value="No"
                                                            checked={formData.licenciaSistema === "No"}
                                                            onChange={handleInputChange}
                                                            className="mr-2 w-4 h-4 accent-blue-600"/>
                                                        <label htmlFor="licenciaSistemaNo">NO</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <div className="flex justify-center md:justify-end gap-4 pt-6">
                                        <button type="button" onClick={() => cancelForm()}
                                            className="bg-gray-300 hover:bg-gray-200 font-semibold p-3 rounded-md text-sm md:text-base">
                                            Cancelar
                                        </button>
                                        <button type="button" onClick={() => setSeccionActiva("general")} className="bg-gray-900 hover:bg-gray-700 px-6 text-white font-semibold p-3 rounded-md text-sm md:text-base">
                                            Atrás
                                        </button>
                                        <button type="submit" className="bg-primary hover:bg-primary text-white font-semibold p-3 rounded-md text-sm md:text-base">
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
