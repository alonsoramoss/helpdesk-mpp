"use client";

import { useState, useEffect } from "react";
import { RegistroInventario, RegistroEquiposComputo } from "@/types/registroInventario";
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

  const hayDatos = Object.values(formData).some(
    (valor) => valor !== null && valor !== undefined && valor !== ""
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const cancelForm = () => {
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
        const confirmar = window.confirm(
          "Tienes datos sin guardar. ¿Deseas salir y perder los cambios?"
        );
        if (!confirmar) {
          history.pushState(null, "", window.location.href);
        } else {
          setCategoriaSeleccionada("");
          setFormVisible(false);
          setFormData({} as RegistroInventario);
        }
      } else {
        setCategoriaSeleccionada("");
        setFormVisible(false);
        setFormData({} as RegistroInventario);
      }
    };

    const bloquearClickEnLinks = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a") as HTMLAnchorElement | null;

      if (anchor) {
        const mismoEnlace = anchor.href === window.location.href;

        if (hayDatos) {
          const confirmar = window.confirm("Tienes datos sin guardar. ¿Deseas salir?");
          if (!confirmar) {
            e.preventDefault();
          } else if (mismoEnlace) {
            e.preventDefault();
            window.location.reload();
          }
        } else {
          if (mismoEnlace) {
            e.preventDefault();
            window.location.reload();
          }
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
        return <Servidor {...props} />;
      case "Pantalla":
        return <Pantalla {...props} />;
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
      {!formVisible && (
        <>
          <h1 className="text-lg sm:text-2xl font-bold text-center">
            Registro de Inventario Físico y Lógico de los Equipos de Cómputo y Periféricos de MPP
          </h1>
          <div className="flex items-center my-6">
            <label htmlFor="categoria" className="text-sm md:text-base font-semibold mr-3">
              Categoría
            </label>
            <select id="categoria" name="categoria"
              value={categoriaSeleccionada}
              onChange={(e) => {
                setCategoriaSeleccionada(e.target.value);
                if (e.target.value !== "") setFormVisible(true);
              }}
              className="w-full text-sm md:text-base p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-4"
            >
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
        </>
      )}
      {formVisible && mostrarForm()}
    </div>
  );
}
