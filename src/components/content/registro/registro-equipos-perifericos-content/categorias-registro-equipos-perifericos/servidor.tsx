"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { RegistroServidor } from "@/types/registroEquiposPerifericos";

interface ServidorProps {
    formData: RegistroServidor;
    handleInputChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => void;
    cancelForm: () => void;
    removerListenerBeforeUnload: () => void;
}

export default function Servidor({ formData, handleInputChange, cancelForm, removerListenerBeforeUnload }: ServidorProps) {
    const [seccionActiva, setSeccionActiva] = useState<"general" | "especificas">("general");
    
    const camposGeneralesServidor = [
        // Información General
        "sede",
        "nomOficina",

        // Equipo
        "codPatrimonialEquipo", "tipoEquipo", "fabricanteEquipo", "modeloEquipo", "numSerieEquipo", "fechAdquisicionEquipo", 
        "estadoEquipo", "hostnameEquipo", "ipEquipo", "factorFormaEquipo", "numFacturaEquipo"
    ];

    const camposEspecificosServidor = [
        // Detalles Técnicos
        "tipoServidor",

        // Especificaciones de Hardware
        "procesador", "frecuenciaProcesador", "numNucleos", "memoriaRam", "tipoRam",
        "capacidadAlmacenamiento", "tipoAlmacenamiento", "numDiscos", "interfazAlmacenamiento",
        "fuentePoder", "tarjetaRed", "puertosUsb", "fuenteAlimentacion", "sistemaRefrigeracion",
        "numVentiladores", "observacion",

        // Especificaciones de Red y Conectividad
        "interfazRed", "configuracionRed",

        // Sistema Operativo
        "tipoSo", "versionSo", "licenciaSoftware", "otrosServicios",

        // Seguridad y Respaldo
        "firewall", "proteccionSobretension", "sistemaBackup", "encriptacionDatos",
        "sistemaRecuperacionDesastres", "wifi"
    ];

    function validarCampos(formData: RegistroServidor, campos: string[]) {
        for (const campo of campos) {
            if (!formData[campo as keyof RegistroServidor]) {
            return false;
            }
        }
        return true;
    }
    
    function handleNextSection() {
        if (!validarCampos(formData, camposGeneralesServidor)) {
            alert("Por favor completa todos los campos obligatorios antes de continuar.");
            return;
        }
        setSeccionActiva("especificas");
    }
    
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!validarCampos(formData, camposEspecificosServidor)) {
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
            <h1 className="text-lg md:text-2xl font-bold text-center mb-6"> Registro Equipo Físico y Lógico de Servidor de MPP</h1>
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
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4">
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
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4">
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
                                            </div>
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="tipoEquipo" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Tipo de Equipo</label>
                                            <select name="tipoEquipo" id="tipoEquipo" required 
                                                value={formData.tipoEquipo}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4">
                                                <option selected hidden>Seleccione una opción</option>
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
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4">
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
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4">
                                                <option selected hidden>Seleccione una opción</option>
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
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4">
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
                                            <input type="number" id="numFacturaEquipo" name="numFacturaEquipo" required
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
                            <div className="px-6 md:px-10 py-6">
                                <div className="mb-5">
                                    <h1 className="text-base md:text-lg font-semibold">Detalles Técnicos</h1>
                                    <div className="flex flex-col lg:flex-row lg:items-center mt-1">
                                        <label htmlFor="tipoServidor" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Tipo de Servidor</label>
                                        <select name="tipoServidor" id="tipoServidor" required 
                                            value={formData.tipoServidor}
                                            onChange={handleInputChange}
                                            className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4">
                                            <option selected hidden>Seleccione un tipo de servidor</option>
                                            <option value="TIER I">TIER I</option>
                                            <option value="TIER II">TIER II</option>
                                            <option value="TIER III">TIER III</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <h1 className="text-base md:text-lg font-semibold">Especificaciones de Hardware</h1>
                                    <div className="flex flex-col lg:flex-row lg:items-center mt-1 mb-4">
                                        <label htmlFor="procesador" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Procesador (CPU)</label>
                                        <div className="flex items-center w-full">
                                            <input type="text" id="procesador" name="procesador" required 
                                                value={formData.procesador}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="frecuenciaProcesador" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3">Frecuencia del Procesador</label>
                                            <input type="text" id="frecuenciaProcesador" name="frecuenciaProcesador" required
                                                value={formData.frecuenciaProcesador}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="numNucleos" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">N° de Núcleos</label>
                                            <input type="text" id="numNucleos" name="numNucleos" required
                                                value={formData.numNucleos}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="memoriaRam" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Memoria RAM</label>
                                            <input type="text" id="memoriaRam" name="memoriaRam" required
                                                value={formData.memoriaRam}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="tipoRam" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Tipo RAM</label>
                                            <select name="tipoRam" id="tipoRam" required 
                                                value={formData.tipoRam}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4">
                                                <option selected hidden>Seleccione un tipo de RAM</option>
                                                <option value="DDR3">DDR3</option>
                                                <option value="DDR4">DDR4</option>
                                                <option value="DDR5">DDR5</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="capacidadAlmacenamiento" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3">Capacidad de Almacenamiento</label>
                                            <input type="text" id="capacidadAlmacenamiento" name="capacidadAlmacenamiento" required
                                                value={formData.capacidadAlmacenamiento}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="tipoAlmacenamiento" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3">Tipo de Almacenamiento</label>
                                            <select name="tipoAlmacenamiento" id="tipoAlmacenamiento" required 
                                                value={formData.tipoAlmacenamiento}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4">
                                                <option selected hidden>Seleccione un tipo de almacenamiento</option>
                                                <option value="HDD">HDD</option>
                                                <option value="SSD">SSD</option>
                                                <option value="NVMe">NVMe</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="fuentePoder" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Fuente de Poder</label>
                                            <input type="text" id="fuentePoder" name="fuentePoder" required
                                                value={formData.fuentePoder}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="tarjetaRed" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Tarjeta de Red</label>
                                            <select name="tarjetaRed" id="tarjetaRed" required 
                                                value={formData.tarjetaRed}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4">
                                                <option selected hidden>Seleccione un tipo de tarjeta de red</option>
                                                <option value="Ethernet 1 Gbps">Ethernet 1 Gbps</option>
                                                <option value="Ethernet 10 Gbps">Ethernet 10 Gbps</option>
                                                <option value="Wi-Fi 5 (802.11ac)">Wi-Fi 5 (802.11ac)</option>
                                                <option value="Wi-Fi 6 (802.11ax)">Wi-Fi 6 (802.11ax)</option>
                                                <option value="Wi-Fi 6E / 7">Wi-Fi 6E / 7</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="sistemaRefrigeracion" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Sistema de Refrigeración</label>
                                            <input type="text" id="sistemaRefrigeracion" name="sistemaRefrigeracion" required
                                                value={formData.sistemaRefrigeracion}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="numVentiladores" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">N° de Ventiladores</label>
                                            <select name="numVentiladores" id="numVentiladores" required 
                                                value={formData.numVentiladores}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4">
                                                <option selected hidden>Seleccione número de ventiladores</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5 o más">5 o más</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="observacion" className="block font-medium">Observaciones</label>
                                        <textarea id="observacion" name="observacion" required
                                            value={formData.observacion}
                                            onChange={handleInputChange}
                                            className="w-full h-24 mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-4"></textarea>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <h1 className="text-base md:text-lg font-semibold">Especificaciones de Red y Conectividad</h1>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-1">
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="interfazRed" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Interfaz de Red</label>
                                            <input type="text" id="interfazRed" name="interfazRed" required
                                                value={formData.interfazRed}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="configuracionRed" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3">Configuración de Red (IP,LAN)</label>
                                            <input type="text" id="configuracionRed" name="configuracionRed" required
                                                value={formData.configuracionRed}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <h1 className="text-base md:text-lg font-semibold">Sistema Operativo</h1>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-1">
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="tipoSo" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Tipo de SO</label>
                                            <input type="text" id="tipoSo" name="tipoSo" required
                                                value={formData.tipoSo}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="versionSo" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Versión del SO</label>
                                            <select name="versionSo" id="versionSo" required 
                                                value={formData.versionSo}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4">
                                                <option selected hidden>Seleccione una versión del SO</option>
                                                <option value="Windows Server 2016">Windows Server 2016</option>
                                                <option value="Windows Server 2019">Windows Server 2019</option>
                                                <option value="Windows Server 2022">Windows Server 2022</option>
                                                <option value="Ubuntu Server 20.04 LTS">Ubuntu Server 20.04 LTS</option>
                                                <option value="Ubuntu Server 22.04 LTS">Ubuntu Server 22.04 LTS</option>
                                                <option value="CentOS 7">CentOS 7</option>
                                                <option value="Red Hat Enterprise Linux 8">Red Hat Enterprise Linux 8</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowra">Licencia del Software</label>
                                            <div className="flex flex-wrap gap-4 h-full items-center">
                                                <div className="flex items-center">
                                                    <input type="radio" name="licenciaSoftware" id="licenciaSoftwareSi" required 
                                                        value="Si"
                                                        checked={formData.licenciaSoftware === "Si"}
                                                        onChange={handleInputChange}
                                                        className="mr-2 w-4 h-4 accent-blue-600"/>
                                                    <label htmlFor="licenciaSoftwareSi">SI</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input type="radio" name="licenciaSoftware" id="licenciaSoftwareNo" required 
                                                        value="No"
                                                        checked={formData.licenciaSoftware === "No"}
                                                        onChange={handleInputChange}
                                                        className="mr-2 w-4 h-4 accent-blue-600"/>
                                                    <label htmlFor="licenciaSoftwareNo">NO</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="otrosServicios" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Otros Servicios</label>
                                            <select name="otrosServicios" id="otrosServicios" required
                                                value={formData.otrosServicios}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4">
                                                <option selected hidden>Seleccione un servicio adicional</option>
                                                <option value="Virtualización (VMware, Hyper-V)">Virtualización (VMware, Hyper-V)</option>
                                                <option value="Copias de seguridad (Backups)">Copias de seguridad (Backups)</option>
                                                <option value="Monitoreo de red">Monitoreo de red</option>
                                                <option value="Firewall / Seguridad">Firewall / Seguridad</option>
                                                <option value="Soporte remoto">Soporte remoto</option>
                                                <option value="Actualización de software">Actualización de software</option>
                                                <option value="Gestión de base de datos">Gestión de base de datos</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex justify-end mt-4">
                                        + Añadir otro servicio
                                    </div>
                                </div>
                                <div className="mb-10">
                                    <h1 className="text-base md:text-lg font-semibold">Seguridad y Respaldo</h1>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-1">
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="firewall" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3">Firewall / Seguridad de Red</label>
                                            <input type="text" id="firewall" name="firewall" required
                                                value={formData.firewall}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="proteccionSobretension" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3">Protección contra Sobretensión</label>
                                            <input type="text" id="proteccionSobretension" name="proteccionSobretension" required
                                                value={formData.proteccionSobretension}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="sistemaBackup" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Sistema de Backup</label>
                                            <input type="text" id="sistemaBackup" name="sistemaBackup" required
                                                value={formData.sistemaBackup}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="encriptacionDatos" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3">Encriptación de Datos</label>
                                            <input type="text" id="encriptacionDatos" name="encriptacionDatos" required
                                                value={formData.encriptacionDatos}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="sistemaRecuperacionDesastres" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3">Sistema de Recuperacion ante Desastres</label>
                                            <input type="text" id="sistemaRecuperacionDesastres" name="sistemaRecuperacionDesastres" required
                                                value={formData.sistemaRecuperacionDesastres}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="wifi" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Wi-Fi</label>
                                            <input type="text" id="wifi" name="wifi" required
                                                value={formData.wifi}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center md:justify-end gap-4">
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
                        )}
                    </form>
                </CardContent>
            </Card>
        </>
    );
}
