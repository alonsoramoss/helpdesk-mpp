"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";
import { RegistroPantalla } from "@/types/registroEquiposPerifericos";

interface PantallaProps {
    formData: RegistroPantalla;
    handleInputChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => void;
    cancelForm: () => void;
    removerListenerBeforeUnload: () => void;
}

export default function Pantalla({ formData, handleInputChange, cancelForm, removerListenerBeforeUnload }: PantallaProps) {
    const [seccionActiva, setSeccionActiva] = useState<"general" | "especificas">("general");
    
    const camposGeneralesPantalla = [
        // Información General
        "sede",
        "nomOficina",

        // Equipo
        "codPatrimonialEquipo", "tipoEquipo", "fabricanteEquipo", "modeloEquipo", "numSerieEquipo", "fechaAdquisicionEquipo", 
        "estadoEquipo", "hostnameEquipo", "ipEquipo", "factorFormaEquipo", "numFacturaEquipo"
    ];

    const camposEspecificosPantalla = [
        // Detalles Técnicos
        "tipoPantalla",

        // Especificaciones Técnicas
        "tamañoPantalla", "resolucion", "tecnologiaPantalla", "discoDuro",
        "memoriaRam", "conectividad", "soporteMontaje"
    ];

    function validarCampos(formData: RegistroPantalla, campos: string[]) {
        for (const campo of campos) {
            if (!formData[campo as keyof RegistroPantalla]) {
            return false;
            }
        }
        return true;
    }
    
    function handleNextSection() {
        if (!validarCampos(formData, camposGeneralesPantalla)) {
            alert("Por favor completa todos los campos obligatorios antes de continuar.");
            return;
        }
        setSeccionActiva("especificas");
    }
    
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!validarCampos(formData, camposEspecificosPantalla)) {
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
            <h1 className="text-lg md:text-2xl font-bold text-center mb-6">Registro Físico y Lógico de Pantallas de MPP</h1>
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
                                                <option selected hidden>Seleccione sede</option>
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
                                                <option selected hidden>Seleccione oficina</option>
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
                                                <option selected hidden>Seleccione tipo de equipo</option>
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
                                            <label htmlFor="fechaAdquisicionEquipo" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3">Fecha de Adquisición</label>
                                            <input type="date" id="fechaAdquisicionEquipo" name="fechaAdquisicionEquipo" required
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
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="factorFormaEquipo" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Factor de Forma</label>
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
                                                className="text-sm md:text-base w-full border border-gray-300 rounded-md file:mr-4 file:py-2 file:px-4 file:border-0 
                                                file:text-sm file:md:text-base file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="garantiaEquipo" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Garantía</label>
                                            <input type="checkbox" id="garantiaEquipo" name="garantiaEquipo"
                                                checked={formData.garantiaEquipo}
                                                onChange={handleInputChange}
                                                className="w-4 h-4 ml-2 accent-blue-600 cursor-pointer" />
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
                                        className="bg-gray-300 hover:bg-gray-200 font-semibold p-3 rounded-md text-sm md:text-base transition duration-200 ease-in-out">
                                        Cancelar
                                    </button>
                                    <button type="button"  onClick={handleNextSection}
                                        className="bg-gray-900 hover:bg-gray-700 text-white font-semibold p-3 rounded-md text-sm md:text-base transition duration-200 ease-in-out">
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
                                        <label htmlFor="tipoPantalla" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Tipo de Pantalla</label>
                                        <select name="tipoPantalla" id="tipoPantalla" required 
                                            value={formData.tipoPantalla}
                                            onChange={handleInputChange}
                                            className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4 truncate">
                                            <option selected hidden>Seleccione tipo de pantalla</option>
                                            <option value="LED">LED</option>
                                            <option value="LCD">LCD</option>
                                            <option value="IPS">IPS</option>
                                            <option value="TN">TN</option>
                                            <option value="VA">VA</option>
                                            <option value="OLED">OLED</option>
                                            <option value="Touchscreen">Pantalla táctil</option>
                                            <option value="Curva">Pantalla curva</option>
                                            <option value="UltraWide">UltraWide</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <h1 className="text-base md:text-lg font-semibold">Especificaciones de Hardware</h1>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-1">
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="tamañoPantalla" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3">Tamaño de Pantalla</label>
                                            <input type="text" id="tamañoPantalla" name="tamañoPantalla" required
                                                value={formData.tamañoPantalla}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="resolucion" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Resolución</label>
                                            <input type="text" id="resolucion" name="resolucion" required
                                                value={formData.resolucion}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="tecnologiaPantalla" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3">Tecnología de Pantalla</label>
                                            <select name="tecnologiaPantalla" id="tecnologiaPantalla" required 
                                                value={formData.tecnologiaPantalla}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4 truncate">
                                                <option selected hidden>Seleccione tecnología de pantalla</option>
                                                <option value="LED">LED</option>
                                                <option value="LCD">LCD</option>
                                                <option value="OLED">OLED</option>
                                                <option value="IPS">IPS</option>
                                                <option value="TN">TN</option>
                                                <option value="VA">VA</option>
                                                <option value="Mini LED">Mini LED</option>
                                                <option value="QLED">QLED</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="discoDuro" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Memoria RAM</label>
                                            <input type="text" id="discoDuro" name="discoDuro" required
                                                value={formData.discoDuro}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="memoriaRam" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3">Memoria RAM</label>
                                            <input type="text" id="memoriaRam" name="memoriaRam" required
                                                value={formData.memoriaRam}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="conectividad" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Conectividad</label>
                                            <select name="conectividad" id="conectividad" required 
                                                value={formData.conectividad}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4 truncate">
                                                <option selected hidden>Seleccione tipo de conectividad</option>
                                                <option value="HDMI">HDMI</option>
                                                <option value="DisplayPort">DisplayPort</option>
                                                <option value="VGA">VGA</option>
                                                <option value="DVI">DVI</option>
                                                <option value="USB-C">USB-C</option>
                                                <option value="Thunderbolt">Thunderbolt</option>
                                                <option value="Wi-Fi">Wi-Fi</option>
                                                <option value="Bluetooth">Bluetooth</option>
                                                <option value="Ethernet (RJ45)">Ethernet (RJ45)</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="soporteMontaje" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Soporte de Montaje</label>
                                            <select name="soporteMontaje" id="soporteMontaje" required 
                                                value={formData.soporteMontaje}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4 truncate">
                                                <option selected hidden>Seleccione soporte de montaje</option>
                                                <option value="VESA 75x75">VESA 75x75</option>
                                                <option value="VESA 100x100">VESA 100x100</option>
                                                <option value="VESA 200x200">VESA 200x200</option>
                                                <option value="Montaje en pared">Montaje en pared</option>
                                                <option value="Montaje en brazo articulado">Montaje en brazo articulado</option>
                                                <option value="Base de escritorio">Base de escritorio</option>
                                                <option value="Soporte integrado">Soporte integrado</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <h1 className="text-base md:text-lg font-semibold">Accesorios</h1>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
                                        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
                                            <div className="flex items-center bg-gray-200 px-3 py-2 border-r border-gray-300 w-10/12">
                                                <label htmlFor="pantallaTactil">
                                                    Pantalla Táctil
                                                </label>
                                            </div>
                                            <div className="flex justify-center items-center w-2/12">
                                                <input type="checkbox" id="pantallaTactil" name="pantallaTactil"
                                                    checked={formData.pantallaTactil}
                                                    onChange={handleInputChange} 
                                                    className="w-4 h-4 accent-blue-600 cursor-pointer"/>
                                            </div>
                                        </div>
                                        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
                                            <div className="flex items-center bg-gray-200 px-3 py-2 border-r border-gray-300 w-10/12">
                                                <label htmlFor="controlRemotoIncluido">
                                                    Control Remoto Incluido
                                                </label>
                                            </div>
                                            <div className="flex justify-center items-center w-2/12">
                                                <input type="checkbox" id="controlRemotoIncluido" name="controlRemotoIncluido"
                                                    checked={formData.controlRemotoIncluido}
                                                    onChange={handleInputChange}
                                                    className="w-4 h-4 accent-blue-600 cursor-pointer" />
                                            </div>
                                        </div>
                                        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
                                            <div className="flex items-center bg-gray-200 px-3 py-2 border-r border-gray-300 w-10/12">
                                                <label htmlFor="camara">
                                                    Cámara
                                                </label>
                                            </div>
                                            <div className="flex justify-center items-center w-2/12">
                                                <input type="checkbox" id="camara" name="camara"
                                                    checked={formData.camara}
                                                    onChange={handleInputChange} 
                                                    className="w-4 h-4 accent-blue-600 cursor-pointer"/>
                                            </div>
                                        </div>
                                        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
                                            <div className="flex items-center bg-gray-200 px-3 py-2 border-r border-gray-300 w-10/12">
                                                <label htmlFor="altavocesIntegrados">
                                                    Altavoces Integrados
                                                </label>
                                            </div>
                                            <div className="flex justify-center items-center w-2/12">
                                                <input type="checkbox" id="altavocesIntegrados" name="altavocesIntegrados"
                                                    checked={formData.altavocesIntegrados}
                                                    onChange={handleInputChange} 
                                                    className="w-4 h-4 accent-blue-600 cursor-pointer"/>
                                            </div>
                                        </div>
                                        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
                                            <div className="flex items-center bg-gray-200 px-3 py-2 border-r border-gray-300 w-10/12">
                                                <label htmlFor="funcionSmart">
                                                    Función Smart
                                                </label>
                                            </div>
                                            <div className="flex justify-center items-center w-2/12">
                                                <input type="checkbox" id="funcionSmart" name="funcionSmart"
                                                    checked={formData.funcionSmart}
                                                    onChange={handleInputChange} 
                                                    className="w-4 h-4 accent-blue-600 cursor-pointer"/>
                                            </div>
                                        </div>
                                        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
                                            <div className="flex items-center bg-gray-200 px-3 py-2 border-r border-gray-300 w-10/12">
                                                <label htmlFor="wifi">
                                                    Wi-Fi
                                                </label>
                                            </div>
                                            <div className="flex justify-center items-center w-2/12">
                                                <input type="checkbox" id="wifi" name="wifi"
                                                    checked={formData.wifi}
                                                    onChange={handleInputChange} 
                                                    className="w-4 h-4 accent-blue-600 cursor-pointer"/>
                                            </div>
                                        </div>
                                        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                                            <div className="flex items-center bg-gray-200 px-3 py-2 border-r border-gray-300 w-10/12">
                                                <label htmlFor="conectividadInalambrica">
                                                    Conectividad Inalámbrica
                                                </label>
                                            </div>
                                            <div className="flex justify-center items-center w-2/12">
                                                <input type="checkbox" id="conectividadInalambrica" name="conectividadInalambrica"
                                                    checked={formData.conectividadInalambrica}
                                                    onChange={handleInputChange} 
                                                    className="w-4 h-4 accent-blue-600 cursor-pointer"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center md:justify-end gap-4">
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
                        )}
                    </form>
                </CardContent>
            </Card>
        </>
    );
}
