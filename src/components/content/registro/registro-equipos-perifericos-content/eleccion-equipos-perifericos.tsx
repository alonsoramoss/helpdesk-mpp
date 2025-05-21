"use client";

import { useState, useEffect } from "react";
import { IdCardIcon } from "@radix-ui/react-icons";
import { BadgeDollarSign, Cctv, Computer, Fingerprint, Monitor, MonitorSpeaker, Printer, RadioReceiver, Server } from "lucide-react";
import { RegistroEquiposPerifericos, RegistroEquiposComputo, RegistroServidor, RegistroPantalla } from "@/types/registroEquiposPerifericos";
import EquiposComputo from "./categorias-registro-equipos-perifericos/equipos-computo";
import ImpresoraFotocopiadora from "./categorias-registro-equipos-perifericos/impresora-fotocopiadora";
import Servidor from "./categorias-registro-equipos-perifericos/servidor";
import Pantalla from "./categorias-registro-equipos-perifericos/pantalla";
import EquipoBiometrico from "./categorias-registro-equipos-perifericos/equipo-biometrico";
import ContadorBilletes from "./categorias-registro-equipos-perifericos/contador-billetes";
import ImpresoraTarjetaPVC from "./categorias-registro-equipos-perifericos/impresora-tarjeta-pvc";
import Camara from "./categorias-registro-equipos-perifericos/camara";
import Escaner from "./categorias-registro-equipos-perifericos/escaner";
import OtrosDispositivos from "./categorias-registro-equipos-perifericos/otros-dispositivos";

const equiposPerifericos = [
    { icon: Computer, nombre: "Equipos de Cómputo" },
    { icon: Printer, nombre: "Impresora y Fotocopiadora" },
    { icon: Server, nombre: "Servidor" },
    { icon: Monitor, nombre: "Pantalla" },
    { icon: Fingerprint, nombre: "Equipo Biométrico" },
    { icon: BadgeDollarSign, nombre: "Contador de Billetes" },
    { icon: IdCardIcon, nombre: "Impresora de Tarjeta PVC" },
    { icon: Cctv, nombre: "Cámara" },
    { icon: RadioReceiver, nombre: "Escáner" },
    { icon: MonitorSpeaker, nombre: "Otros Dispositivos" },
];

export default function EleccionEquiposPerifericos() {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
    const [formData, setFormData] = useState<RegistroEquiposPerifericos>({} as RegistroEquiposPerifericos);
    
    const hayDatos = formData && Object.values(formData).some(
        (valor) => typeof valor === "string" && valor.trim() !== ""
    );

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    
    const cancelForm = () => {
        if (!hayDatos) {
            setFormData({} as RegistroEquiposPerifericos);
            setCategoriaSeleccionada("");
            return;
        }
        
        if (confirm("¿Estás seguro de que deseas cancelar y borrar la información ingresada?")) {
            setFormData({} as RegistroEquiposPerifericos);
            setCategoriaSeleccionada("");
        }
    };
    
    const removerListenerBeforeUnload = () => {
        window.removeEventListener("beforeunload", bloquearSalida);
    };

    const bloquearSalida = (e: BeforeUnloadEvent) => {
        if (hayDatos) {
            e.preventDefault();
            e.returnValue = "";
        }
    };
    
    useEffect(() => {
        const bloquearRetroceso = (e: PopStateEvent) => {
            if (hayDatos) {
                const confirmar = window.confirm("Tienes datos sin guardar. ¿Deseas salir y perder los cambios?");
                if (!confirmar) {
                    history.pushState(null, "", window.location.href);
                } else {
                    setCategoriaSeleccionada("");
                }
            } else {
                setCategoriaSeleccionada("");
            }
        };

        const bloquearClickEnLinks = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest("a") as HTMLAnchorElement | null;

            if (anchor && hayDatos) {
                const mismoEnlace = anchor.href === window.location.href;

                const confirmar = window.confirm("Tienes datos sin guardar. ¿Deseas salir?");
                if (!confirmar) {
                    e.preventDefault();
                } else if (mismoEnlace) {
                    e.preventDefault();
                    window.location.reload();
                }
            }
        };

        if (categoriaSeleccionada) {
            history.pushState(null, "", window.location.href);
            window.addEventListener("popstate", bloquearRetroceso);
            document.addEventListener("click", bloquearClickEnLinks, true);
            window.addEventListener("beforeunload", bloquearSalida);
        }

        return () => {
            window.removeEventListener("popstate", bloquearRetroceso);
            document.removeEventListener("click", bloquearClickEnLinks, true);
            window.removeEventListener("beforeunload", bloquearSalida);
        };
    }, [categoriaSeleccionada, formData]);

    const mostrarForm = () => {
        const props = { formData, handleInputChange, cancelForm };
        switch (categoriaSeleccionada) {
            case "Equipos de Cómputo":
                return <EquiposComputo {...props} formData={formData as RegistroEquiposComputo} removerListenerBeforeUnload={removerListenerBeforeUnload} />;
            case "Impresora y Fotocopiadora":
                return <ImpresoraFotocopiadora {...props} />;
            case "Servidor":
                return <Servidor {...props} formData={formData as RegistroServidor} />;
            case "Pantalla":
                return <Pantalla {...props} formData={formData as RegistroPantalla} />;
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
            <h1 className="text-lg md:text-2xl font-bold text-center mb-6"> Registro Físico y Lógico de los Equipos de Cómputo y periféricos de MPP</h1>
            {!categoriaSeleccionada ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                {equiposPerifericos.map((equipo, index) => (
                <div key={index}
                    onClick={() => {
                        setFormData({} as RegistroEquiposPerifericos);
                        setCategoriaSeleccionada(equipo.nombre)}}
                    className="bg-primary/40 p-10 rounded-md py-16 cursor-pointer hover:bg-primary/60 transition">
                    <equipo.icon className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-center text-lg md:text-xl font-semibold">{equipo.nombre}</p>
                </div>
                ))}
            </div>
            ) : (
            <div>
                {mostrarForm()}
            </div>
            )}
        </div>
    );
}
