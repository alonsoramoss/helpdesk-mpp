"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";
import { RegistroContadorBilletes } from "@/types/registroEquiposPerifericos";

interface ContadorBilletesProps {
    formData: RegistroContadorBilletes;
    handleInputChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => void;
    cancelForm: () => void;
    removerListenerBeforeUnload: () => void;
}

export default function ContadorBilletes({ formData, handleInputChange, cancelForm, removerListenerBeforeUnload }: ContadorBilletesProps) {
    const [seccionActiva, setSeccionActiva] = useState<"general" | "especificas">("general");
    
    const camposGeneralesContadorBilletes = [
        // Información General
        "sede",
        "nomOficina",

        // Equipo
        "codPatrimonialEquipo", "tipoEquipo", "fabricanteEquipo", "modeloEquipo", "numSerieEquipo", "fechaAdquisicionEquipo", 
        "estadoEquipo", "hostnameEquipo", "ipEquipo", "factorFormaEquipo", "numFacturaEquipo"
    ];

    const camposEspecificosContadorBilletes = [
        // Especificaciones Técnicas
        "cantidadBolsillos", "capacidadTolbo", "capacidadApisador", "capacidadRechazo",
        "pantalla", "velocidadConteo", "fuenteAlimentacion"
    ];

    function validarCampos(formData: RegistroContadorBilletes, campos: string[]) {
        for (const campo of campos) {
            if (!formData[campo as keyof RegistroContadorBilletes]) {
            return false;
            }
        }
        return true;
    }
    
    function handleNextSection() {
        if (!validarCampos(formData, camposGeneralesContadorBilletes)) {
            alert("Por favor completa todos los campos obligatorios antes de continuar.");
            return;
        }
        setSeccionActiva("especificas");
    }
    
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!validarCampos(formData, camposEspecificosContadorBilletes)) {
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
            <h1 className="text-lg md:text-2xl font-bold text-center mb-6">Registro Físico y Lógico de Contadores de Billetes de MPP</h1>
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
                                                <option value="" selected hidden>Seleccione sede</option>
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
                                                <option value="" selected hidden>Seleccione oficina</option>
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
                                                <option value="" selected hidden>Seleccione tipo de equipo</option>
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
                                                <option value="" selected hidden>Seleccione fabricante de equipo</option>
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
                                                <option value="" selected hidden>Seleccione estado de equipo</option>
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
                                                <option value="" selected hidden>Seleccione factor de forma</option>
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
                                    <h1 className="text-base md:text-lg font-semibold">Especificaciones Técnicas</h1>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-1 mb-5">
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="cantidadBolsillos" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Cantidad de Bolsillos</label>
                                            <input type="number" id="cantidadBolsillos" name="cantidadBolsillos" required
                                                value={formData.cantidadBolsillos}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="capacidadTolbo" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Capacidad de Tolbo</label>
                                            <input type="number" id="capacidadTolbo" name="capacidadTolbo" required
                                                value={formData.capacidadTolbo}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="capacidadApisador" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Capacidad de Apisador</label>
                                            <input type="number" id="capacidadApisador" name="capacidadApisador" required
                                                value={formData.capacidadApisador}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="capacidadRechazo" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Capacidad de Rechazo</label>
                                            <input type="number" id="capacidadRechazo" name="capacidadRechazo" required
                                                value={formData.capacidadRechazo}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">
                                                Comunicación
                                            </label>
                                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-9">
                                                <div className="flex items-center">
                                                    <input type="checkbox" id="fcpIpComunicacion" name="fcpIpComunicacion"
                                                        checked={formData.fcpIpComunicacion}
                                                        onChange={handleInputChange} 
                                                        className="w-4 h-4 accent-blue-600 cursor-pointer"
                                                    />
                                                    <label htmlFor="fcpIpComunicacion" className="text-sm md:text-base ml-2">FCP/IP</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input type="checkbox" id="usbComunicacion" name="usbComunicacion"
                                                        checked={formData.usbComunicacion}
                                                        onChange={handleInputChange} 
                                                        className="w-4 h-4 accent-blue-600 cursor-pointer"
                                                    />
                                                    <label htmlFor="usbComunicacion" className="text-sm md:text-base ml-2">USB</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-center">
                                            <label htmlFor="pantalla" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Pantalla</label>
                                            <input type="text" id="pantalla" name="pantalla" required
                                                value={formData.pantalla}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row lg:items-center mb-5">
                                    <label htmlFor="velocidadConteo" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Velocidad de Conteo</label>
                                    <div className="flex items-center w-full">
                                        <input type="text" id="velocidadConteo" name="velocidadConteo" required 
                                            value={formData.velocidadConteo}
                                            onChange={handleInputChange}
                                            className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                                            <span className="text-sm md:text-base ml-3 whitespace-normal sm:whitespace-nowrap"> Ej: 50/1 (billetes/min) </span>
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row lg:items-center mb-6">
                                    <label htmlFor="fuenteAlimentacion" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Fuente de Alimentación</label>
                                    <div className="flex items-center w-full">
                                        <input type="text" id="fuenteAlimentacion" name="fuenteAlimentacion" required 
                                            value={formData.fuenteAlimentacion}
                                            onChange={handleInputChange}
                                            className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
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
