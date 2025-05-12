import { useState } from "react";
import { grupoItems } from "@/types/itemsti"

const FichaTecnica = () => {
    const [checkboxes, setCheckboxes] = useState<Record<string, boolean>>({});
    const [inputs, setInputs] = useState<Record<string, string>>({});

    const handleCheckboxChange = (id: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        setCheckboxes((prev) => ({ ...prev, [id]: isChecked }));
        
        if (!isChecked) {
            setInputs((prev) => ({ ...prev, [id]: '' }));
        }
    };      
    
    return(
        <form className="p-0 sm:p-4" action="#" method="POST" id="formFichaTecnica">
            <div className="flex flex-col md:flex-row justify-center items-center mb-5">
                <div className="w-full md:w-1/3 flex justify-center md:justify-start mr-0 md:mr-5 pointer-events-none">
                    <img src="/assets/muniPisco.webp" alt="Municipalidad de Pisco" style={{width: "19rem"}}/>
                </div>
                <div className="w-full md:w-2/3 mt-5 md:mt-0">
                    <label htmlFor="nomFicha" className="block font-semibold text-base md:text-lg">FICHA TÉCNICA</label>
                    <select id="nomFicha" name="nomFicha" required className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-4">
                        <option disabled selected>Seleccione una opción</option>
                        <option value="SOPORTE TÉCNICO">SOPORTE TÉCNICO</option>
                        <option value="MANTENIMIENTO / SOPORTE TÉCNICO">MANTENIMIENTO / SOPORTE TÉCNICO</option>
                        <option value="INSTALACION DE EQUIPO DE COMPUTO Y/O PERIFÉRICO">INSTALACIÓN DE EQUIPO DE CÓMPUTO Y/O PERIFÉRICO</option>
                        <option value="BAJA DE EQUIPO Y/O SOPORTE TÉCNICO">BAJA DE EQUIPO Y/O SOPORTE TÉCNICO</option>
                    </select>
                </div>
            </div>
            
            <h5 className="text-center md:text-start font-semibold text-base md:text-lg mb-3">INFORMACIÓN GENERAL</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                <div>
                    <label htmlFor="unidOrganica" className="block font-medium">UNIDAD ORGÁNICA</label>
                    <input type="text" id="unidOrganica" name="unidOrganica" required 
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-4"/>
                </div>
                <div>
                    <label htmlFor="fecha" className="block font-medium">FECHA</label>
                    <input type="date" id="fecha" name="fecha" required 
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-4"/>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="encargado" className="block font-medium">ENCARGADO O RESPONSABLE</label>
                <input type="text" id="encargado" name="encargado" required 
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-4"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                <div>
                    <label htmlFor="cargo" className="block font-medium">CARGO</label>
                    <input type="text" id="cargo" name="cargo" required 
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-4"/>
                </div>
                <div>
                    <label htmlFor="dni" className="block font-medium">DNI</label>
                    <input type="number" id="dni" name="dni" required 
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-4"/>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="modalidadLab" className="font-medium mb-3">MODALIDAD LABORAL</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="underline mb-2 block">Empleado</label>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center">
                                <input type="radio" name="modalidadLab" id="empleadoPermanente" value="Empleado Permanente" required 
                                    className="mr-2 w-4 h-4 accent-blue-600 cursor-pointer"/>
                                <label htmlFor="empleadoPermanente">Permanente</label>
                            </div>
                            <div className="flex items-center">
                                <input type="radio" name="modalidadLab" id="empleadoContratado" value="Empleado Contratado" required 
                                    className="mr-2 w-4 h-4 accent-blue-600 cursor-pointer"/>
                                <label htmlFor="empleadoContratado">Contratado</label>
                            </div>
                            <div className="flex items-center">
                                <input type="radio" name="modalidadLab" id="empleadoCAS" value="Empleado CAS" required 
                                    className="mr-2 w-4 h-4 accent-blue-600 cursor-pointer"/>
                                <label htmlFor="empleadoCAS">CAS</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="underline mb-2 block">Obrero</label>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center">
                                <input type="radio" name="modalidadLab" id="obreroPermanente" value="Obrero Permanente" required 
                                    className="mr-2 w-4 h-4 accent-blue-600 cursor-pointer"/>
                                <label htmlFor="obreroPermanente">Permanente</label>
                            </div>
                            <div className="flex items-center">
                                <input type="radio" name="modalidadLab" id="obreroContratado" value="Obrero Contratado" required 
                                    className="mr-2 w-4 h-4 accent-blue-600 cursor-pointer"/>
                                <label htmlFor="obreroContratado">Contratado</label>
                            </div>
                            <div className="flex items-center">
                                <input type="radio" name="modalidadLab" id="obreroCAS" value="Obrero CAS" required 
                                    className="mr-2 w-4 h-4 accent-blue-600 cursor-pointer"/>
                                <label htmlFor="obreroCAS">CAS</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-5">
                <label htmlFor="nomTecnico" className="block font-medium">NOMBRE DEL TÉCNICO</label>
                <input type="text" id="nomTecnico" name="nomTecnico" required
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-4"/>
            </div>
            <h5 className="text-center md:text-start font-semibold text-base md:text-lg mb-2">CONSTANCIA DE ATENCIÓN DEL SERVICIO DE SOPORTE TÉCNICO</h5>
            <p className="text-sm md:text-base">Consta por el presente, haber realizado el Servicio Técnico de lo siguiente:</p>
            <div className="mt-3">
                {grupoItems.map((grupo, index) => (
                    <div key={index}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-3">
                            <div>
                                <h2 className="font-medium mb-3">{grupo.izqTitle}</h2>
                                {grupo.izq.map(({ id, label, categoria }) => (
                                    <div key={id} className="flex flex-col sm:flex-row items-stretch border border-gray-300 rounded-md overflow-hidden mb-3">
                                        <label htmlFor={`${categoria}_${id}`} title={label} className="w-full sm:w-5/12 flex items-center bg-gray-200 px-3 py-2 border-b sm:border-b-0 sm:border-r border-gray-300 overflow-hidden">
                                            <span className="truncate flex-1">
                                                {label}
                                            </span>
                                            <input type="checkbox" id={`${categoria}_${id}`} name={`${categoria}[]`} value={label} checked={checkboxes[id] || false} onChange={handleCheckboxChange(id)} className="w-4 h-4 ml-2 accent-blue-600 cursor-pointer" />
                                        </label>
                                        <input type="text" id={`${categoria}_text_${id}`} name={`${categoria}_text[${label}]`} value={inputs[id] || ''} disabled={!checkboxes[id]} onChange={(e) => setInputs((prev) => ({ ...prev, [id]: e.target.value }))} className="flex-1 p-2 focus:outline-none" />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <h2 className="font-medium mb-3">{grupo.derTitle}</h2>
                                {grupo.der.map(({ id, label, categoria }) => (
                                    <div key={id} className="flex flex-col sm:flex-row items-stretch border border-gray-300 rounded-md overflow-hidden mb-3">
                                        <label htmlFor={`${categoria}_${id}`} title={label} className="w-full sm:w-5/12 flex items-center bg-gray-200 px-3 py-2 border-b sm:border-b-0 sm:border-r border-gray-300 overflow-hidden">
                                            <span className="truncate flex-1">
                                                {label}
                                            </span>
                                            <input type="checkbox" id={`${categoria}_${id}`} name={`${categoria}[]`} value={label} checked={checkboxes[id] || false} onChange={handleCheckboxChange(id)} className="w-4 h-4 ml-2 accent-blue-600 cursor-pointer" />
                                        </label>
                                        <input type="text" id={`${categoria}_text_${id}`} name={`${categoria}_text[${label}]`} value={inputs[id] || ''} disabled={!checkboxes[id]} onChange={(e) => setInputs((prev) => ({ ...prev, [id]: e.target.value }))} className="flex-1 p-2 focus:outline-none" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-3">
                <label htmlFor="observacion" className="block font-medium">OBSERVACIÓN</label>
                <textarea id="observacion" name="observacion" required
                    className="w-full h-24 mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-4"></textarea>
            </div>
            <div className="flex justify-center mt-4 sm:mt-8 w-full">
                <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3 mx-14 rounded-lg text-lg w-full sm:max-w-xs lg:max-w-sm">
                    Guardar
                </button>
            </div>
        </form>
    )
};

export default FichaTecnica;
