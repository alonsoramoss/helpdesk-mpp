
const FichaTecnica = () => {

    return(
        <form className="p-0 sm:p-4" action="#" method="POST" id="formFichaTecnica">
            <div className="flex flex-col md:flex-row justify-center items-center mb-5">
                <div className="w-full md:w-1/3 flex justify-center md:justify-start mr-0 md:mr-5">
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
                                    className="mr-2 w-4 h-4 accent-blue-600"/>
                                <label htmlFor="empleadoPermanente">Permanente</label>
                            </div>
                            <div className="flex items-center">
                                <input type="radio" name="modalidadLab" id="empleadoContratado" value="Empleado Contratado" required 
                                    className="mr-2 w-4 h-4 accent-blue-600"/>
                                <label htmlFor="empleadoContratado">Contratado</label>
                            </div>
                            <div className="flex items-center">
                                <input type="radio" name="modalidadLab" id="empleadoCAS" value="Empleado CAS" required 
                                    className="mr-2 w-4 h-4 accent-blue-600"/>
                                <label htmlFor="empleadoCAS">CAS</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="underline mb-2 block">Obrero</label>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center">
                                <input type="radio" name="modalidadLab" id="obreroPermanente" value="Obrero Permanente" required 
                                    className="mr-2 w-4 h-4 accent-blue-600"/>
                                <label htmlFor="obreroPermanente">Permanente</label>
                            </div>
                            <div className="flex items-center">
                                <input type="radio" name="modalidadLab" id="obreroContratado" value="Obrero Contratado" required 
                                    className="mr-2 w-4 h-4 accent-blue-600"/>
                                <label htmlFor="obreroContratado">Contratado</label>
                            </div>
                            <div className="flex items-center">
                                <input type="radio" name="modalidadLab" id="obreroCAS" value="Obrero CAS" required 
                                    className="mr-2 w-4 h-4 accent-blue-600"/>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                <div>
                    <label className="block font-medium mb-3">HARDWARE</label>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
                        <span className="flex items-center bg-gray-200 px-3 py-2 border-r border-gray-300 whitespace-nowrap">
                            CPU y/o Laptop
                            <input type="checkbox" id="hardware_cpu" name="hardware[]" value="CPU y/o Laptop"
                                className="w-4 h-4 ml-2 accent-blue-600"/>
                        </span>
                        <input type="text" id="hardware_text_cpu" name="hardware_text[CPU y/o Laptop]"
                            className="flex-1 p-2 focus:outline-none"/>
                    </div>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
                        <span className="flex items-center bg-gray-200 px-3 py-2 border-r border-gray-300">
                            Monitor
                            <input type="checkbox" id="hardware_monitor" name="hardware[]" value="Monitor"
                                className="w-4 h-4 ml-2 accent-blue-600"/>
                        </span>
                        <input type="text" id="hardware_text_monitor" name="hardware_text[Monitor]"
                            className="flex-1 p-2 focus:outline-none"/>
                    </div>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
                        <span className="flex items-center bg-gray-200 px-3 py-2 border-r border-gray-300">
                            Teclado
                            <input type="checkbox" id="hardware_teclado" name="hardware[]" value="Teclado"
                                className="w-4 h-4 ml-2 accent-blue-600"/>
                        </span>
                        <input type="text" id="hardware_text_teclado" name="hardware_text[Teclado]"
                            className="flex-1 p-2 focus:outline-none"/>
                    </div>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
                        <span className="flex items-center bg-gray-200 px-3 py-2 border-r border-gray-300">
                            Mouse
                            <input type="checkbox" id="hardware_mouse" name="hardware[]" value="Mouse"
                                className="w-4 h-4 ml-2 accent-blue-600"/>
                        </span>
                        <input type="text" id="hardware_text_mouse" name="hardware_text[Mouse]"
                            className="flex-1 p-2 focus:outline-none"/>
                    </div>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
                        <span className="flex items-center bg-gray-200 px-3 py-2 border-r border-gray-300">
                            Estabilizador
                            <input type="checkbox" id="hardware_estabilizador" name="hardware[]" value="Estabilizador"
                                className="w-4 h-4 ml-2 accent-blue-600"/>
                        </span>
                        <input type="text" id="hardware_text_estabilizador" name="hardware_text[Estabilizador]"
                            className="flex-1 p-2 focus:outline-none"/>
                    </div>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
                        <span className="flex items-center bg-gray-200 px-3 py-2 border-r border-gray-300">
                            Impresora
                            <input type="checkbox" id="hardware_impresora" name="hardware[]" value="Impresora"
                                className="w-4 h-4 ml-2 accent-blue-600"/>
                        </span>
                        <input type="text" id="hardware_text_impresora" name="hardware_text[Impresora]"
                            className="flex-1 p-2 focus:outline-none"/>
                    </div>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
                        <span className="flex items-center bg-gray-200 px-3 py-2 border-r border-gray-300 whitespace-nowrap">
                            Supresor de Pico
                            <input type="checkbox" id="hardware_supresor_pico" name="hardware[]" value="Supresor de Pico"
                                className="w-4 h-4 ml-2 accent-blue-600"/>
                        </span>
                        <input type="text" id="hardware_text_supresor_pico" name="hardware_text[Supresor de Pico]"
                            className="flex-1 p-2 focus:outline-none"/>
                    </div>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
                        <span className="flex items-center bg-gray-200 px-3 py-2 border-r border-gray-300">
                            Otros
                            <input type="checkbox" id="hardware_otros" name="hardware[]" value="Otros"
                                className="w-4 h-4 ml-2 accent-blue-600"/>
                        </span>
                        <input type="text" id="hardware_text_otros" name="hardware_text[Otros]"
                            className="flex-1 p-2 focus:outline-none"/>
                    </div>
                </div>
                
                <div>
                    <label className="block font-medium mb-3">SISTEMAS Y/O APLICATIVOS</label>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
                        <span className="flex items-center bg-gray-200 px-3 py-2 border-r border-gray-300">
                            SIAF
                            <input type="checkbox" id="sistemas_siaf" name="sistemas[]" value="SIAF"
                                className="w-4 h-4 ml-2 accent-blue-600"/>
                        </span>
                        <input type="text" id="sistemas_text_siaf" name="sistemas_text[SIAF]"
                            className="flex-1 p-2 focus:outline-none"/>
                    </div>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
                        <span className="flex items-center bg-gray-200 px-3 py-2 border-r border-gray-300">
                            SIGA
                            <input type="checkbox" id="sistemas_siga" name="sistemas[]" value="SIGA"
                                className="w-4 h-4 ml-2 accent-blue-600"/>
                        </span>
                        <input type="text" id="sistemas_text_siga" name="sistemas_text[SIGA]"
                            className="flex-1 p-2 focus:outline-none"/>
                    </div>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
                        <span className="flex items-center bg-gray-200 px-3 py-2 border-r border-gray-300 whitespace-nowrap">
                            Sistema Registro Civil
                            <input type="checkbox" id="sistemas_registro_civil" name="sistemas[]" value="Sistema Registro Civil"
                                className="w-4 h-4 ml-2 accent-blue-600"/>
                        </span>
                        <input type="text" id="sistemas_text_registro_civil" name="sistemas_text[Sistema Registro Civil]"
                            className="flex-1 p-2 focus:outline-none"/>
                    </div>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
                        <span className="flex items-center bg-gray-200 px-3 py-2 border-r border-gray-300">
                            RUBEM
                            <input type="checkbox" id="sistemas_rubem" name="sistemas[]" value="RUBEM"
                                className="w-4 h-4 ml-2 accent-blue-600"/>
                        </span>
                        <input type="text" id="sistemas_text_rubem" name="sistemas_text[RUBEM]"
                            className="flex-1 p-2 focus:outline-none"/>
                    </div>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
                        <span className="flex items-center bg-gray-200 px-3 py-2 border-r border-gray-300 whitespace-nowrap">
                            RUB PVL 20
                            <input type="checkbox" id="sistemas_rub_pvl_20" name="sistemas[]" value="RUB PVL 20"
                                className="w-4 h-4 ml-2 accent-blue-600"/>
                        </span>
                        <input type="text" id="sistemas_text_rub_pvl_20" name="sistemas_text[RUB PVL 20]"
                            className="flex-1 p-2 focus:outline-none"/>
                    </div>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
                        <span className="flex items-center bg-gray-200 px-3 py-2 border-r border-gray-300">
                            SISPLA
                            <input type="checkbox" id="sistemas_sispla" name="sistemas[]" value="SISPLA"
                                className="w-4 h-4 ml-2 accent-blue-600"/>
                        </span>
                        <input type="text" id="sistemas_text_sispla" name="sistemas_text[SISPLA]"
                            className="flex-1 p-2 focus:outline-none"/>
                    </div>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
                        <span className="flex items-center bg-gray-200 px-3 py-2 border-r border-gray-300 whitespace-nowrap">
                            Supresor Via Web
                            <input type="checkbox" id="sistemas_supresor_via_web" name="sistemas[]" value="Supresor Via Web"
                                className="w-4 h-4 ml-2 accent-blue-600"/>
                        </span>
                        <input type="text" id="sistemas_text_supresor_via_web" name="sistemas_text[Supresor Via Web]"
                            className="flex-1 p-2 focus:outline-none"/>
                    </div>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
                        <span className="flex items-center bg-gray-200 px-3 py-2 border-r border-gray-300">
                            Otros
                            <input type="checkbox" id="sistemas_otros" name="sistemas[]" value="Otros"
                                className="w-4 h-4 ml-2 accent-blue-600"/>
                        </span>
                        <input type="text" id="sistemas_text_otros" name="sistemas_text[Otros]"
                            className="flex-1 p-2 focus:outline-none"/>
                    </div>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                <div>
                    <label className="block font-medium mb-3">SOFTWARE</label>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
                        <span className="flex items-center bg-gray-200 px-3 py-2 border-r border-gray-300 whitespace-nowrap">
                            Sistema Operativo
                            <input type="checkbox" id="software_sistema_operativo" name="software[]" value="Sistema Operativo"
                                className="w-4 h-4 ml-2 accent-blue-600"/>
                        </span>
                        <input type="text" id="software_text_sistema_operativo" name="software_text[Sistema Operativo]"
                            className="flex-1 p-2 focus:outline-none"/>
                    </div>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
                        <span className="flex items-center bg-gray-200 px-3 py-2 border-r border-gray-300">
                            Word
                            <input type="checkbox" id="software_word" name="software[]" value="Word"
                                className="w-4 h-4 ml-2 accent-blue-600"/>
                        </span>
                        <input type="text" id="software_text_word" name="software_text[Word]"
                            className="flex-1 p-2 focus:outline-none"/>
                    </div>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
                        <span className="flex items-center bg-gray-200 px-3 py-2 border-r border-gray-300">
                            Excel
                            <input type="checkbox" id="software_sistema_excel" name="software[]" value="Excel"
                                className="w-4 h-4 ml-2 accent-blue-600"/>
                        </span>
                        <input type="text" id="software_text_sistema_excel" name="software_text[Excel]"
                            className="flex-1 p-2 focus:outline-none"/>
                    </div>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
                        <span className="flex items-center bg-gray-200 px-3 py-2 border-r border-gray-300 whitespace-nowrap">
                            Power Point
                            <input type="checkbox" id="software_power_point" name="software[]" value="Power Point"
                                className="w-4 h-4 ml-2 accent-blue-600"/>
                        </span>
                        <input type="text" id="software_text_power_point" name="software_text[Power Point]"
                            className="flex-1 p-2 focus:outline-none"/>
                    </div>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
                        <span className="flex items-center bg-gray-200 px-3 py-2 border-r border-gray-300">
                            Internet
                            <input type="checkbox" id="software_internet" name="software[]" value="Internet"
                                className="w-4 h-4 ml-2 accent-blue-600"/>
                        </span>
                        <input type="text" id="software_text_internet" name="software_text[Internet]"
                            className="flex-1 p-2 focus:outline-none"/>
                    </div>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
                        <span className="flex items-center bg-gray-200 px-3 py-2 border-r border-gray-300">
                            Antivirus
                            <input type="checkbox" id="software_antivirus" name="software[]" value="Antivirus"
                                className="w-4 h-4 ml-2 accent-blue-600"/>
                        </span>
                        <input type="text" id="software_text_antivirus" name="software_text[Antivirus]"
                            className="flex-1 p-2 focus:outline-none"/>
                    </div>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
                        <span className="flex items-center bg-gray-200 px-3 py-2 border-r border-gray-300">
                            Otros
                            <input type="checkbox" id="software_otros" name="software[]" value="Otros"
                                className="w-4 h-4 ml-2 accent-blue-600"/>
                        </span>
                        <input type="text" id="software_text_otros" name="software_text[Otros]"
                            className="flex-1 p-2 focus:outline-none"/>
                    </div>
                </div>
                
                <div>
                    <label className="block font-medium mb-3">REDES</label>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
                        <span className="flex items-center bg-gray-200 px-3 py-2 border-r border-gray-300">
                            Modem
                            <input type="checkbox" id="redes_modem" name="redes[]" value="Modem"
                                className="w-4 h-4 ml-2 accent-blue-600"/>
                        </span>
                        <input type="text" id="redes_text_modem" name="redes_text[Modem]"
                            className="flex-1 p-2 focus:outline-none"/>
                    </div>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
                        <span className="flex items-center bg-gray-200 px-3 py-2 border-r border-gray-300">
                            Router
                            <input type="checkbox" id="redes_router" name="redes[]" value="Router"
                                className="w-4 h-4 ml-2 accent-blue-600"/>
                        </span>
                        <input type="text" id="redes_text_router" name="redes_text[Router]"
                            className="flex-1 p-2 focus:outline-none"/>
                    </div>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
                        <span className="flex items-center bg-gray-200 px-3 py-2 border-r border-gray-300">
                            Switch
                            <input type="checkbox" id="redes_switch" name="redes[]" value="Switch"
                                className="w-4 h-4 ml-2 accent-blue-600"/>
                        </span>
                        <input type="text" id="redes_text_switch" name="redes_text[Switch]"
                            className="flex-1 p-2 focus:outline-none"/>
                    </div>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
                        <span className="flex items-center bg-gray-200 px-3 py-2 border-r border-gray-300">
                            Cableado
                            <input type="checkbox" id="redes_cableado" name="redes[]" value="Cableado"
                                className="w-4 h-4 ml-2 accent-blue-600"/>
                        </span>
                        <input type="text" id="redes_text_cableado" name="redes_text[Cableado]"
                            className="flex-1 p-2 focus:outline-none"/>
                    </div>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
                        <span className="flex items-center bg-gray-200 px-3 py-2 border-r border-gray-300">
                            Otros
                            <input type="checkbox" id="redes_otros" name="redes[]" value="Otros"
                                className="w-4 h-4 ml-2 accent-blue-600"/>
                        </span>
                        <input type="text" id="redes_text_otros" name="redes_text[Otros]"
                            className="flex-1 p-2 focus:outline-none"/>
                    </div>
                </div>
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