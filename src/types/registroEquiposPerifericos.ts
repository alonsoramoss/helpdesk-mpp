export interface RegistroEquiposPerifericosGeneral {
    // Información General
    sede: "",
    nomOficina: "",

    // Equipo
    codPatrimonialEquipo: "",
    tipoEquipo: "",
    fabricanteEquipo: "",
    modeloEquipo: "",
    numSerieEquipo: "",
    fechAdquisicionEquipo: "",
    estadoEquipo: "",
    hostnameEquipo: "",
    ipEquipo: "",
    factorFormaEquipo: "",
    imagenEquipo: "",
    garantiaEquipo: "",
    numFacturaEquipo: "",
}

export interface RegistroEquiposComputo extends RegistroEquiposPerifericosGeneral {
    // Placa Base
    codPatrimonialPlaca: "",
    fabricantePlaca: "",
    numSeriePlaca: "",
    modeloPlaca: "",
    estadoPlaca: "",
    
    // Procesador
    fabricanteProcesador: "",
    estadoProcesador: "",
    modeloProcesador: "",
    
    // Disco Duro
    DescripcionDiscoDuro: "",
    interfazDiscoDuro: "",
    tipoDiscoDuro: "",
    estadoDiscoDuro: "",
    capacidadDiscoDuro: "",

    // Memoria
    moduloMemoria: "",
    velocidadMemoria: "",
    capacidadMemoria: "",
    estadoMemoria: "",

    // Fuente
    fabricanteFuente: "",
    tipoFuente: "",
    modeloFuente: "",
    estadoFuente: "",
    potenciaFuente: "",

    // Unidad extraible
    unidExtraible: "",
    estadoUnidExtraible: "",

    observacion: "",
    
    // Monitor
    codPatrimonialMonitor: "",
    fabricanteMonitor: "",
    numSerieMonitor: "",
    modeloMonitor: "",
    estadoMonitor: "",
    tamañoMonitor: "",
    tipoMonitor: "",

    // Teclado
    codPatrimonialTeclado: "",
    fabricanteTeclado: "",
    numSerieTeclado: "",
    modeloTeclado: "",
    estadoTeclado: "",

    // Mouse
    codPatrimonialMouse: "",
    fabricanteMouse: "",
    numSerieMouse: "",
    modeloMouse: "",
    estadoMouse: "",

    // Parlantes
    codPatrimonialParlantes: "",
    fabricanteParlantes: "",
    numSerieParlantes: "",
    modeloParlantes: "",
    estadoParlantes: "",

    // Estabilizador
    codPatrimonialEstabilizador: "",
    fabricanteEstabilizador: "",
    numSerieEstabilizador: "",
    modeloEstabilizador: "",
    estadoEstabilizador: "",

    // Supresor de Pico
    codPatrimonialSupresorPico: "",
    fabricanteSupresorPico: "",
    numSerieSupresorPico: "",
    modeloSupresorPico: "",
    estadoSupresorPico: "",

    // Tarjeta adicional
    tarjeta: "",
    estadoTarjeta: "",

    // Sistema Operativo
    tipoSO: "",
    licenciaSistema: "Si" | "No",
}

export interface RegistroServidor extends RegistroEquiposPerifericosGeneral {
    codPatrimonialServidor: string;
    estadoServidor: string;
}

export interface RegistroPantalla extends RegistroEquiposPerifericosGeneral {
    codPatrimonialPantalla: string;
    estadoPantalla: string;
}

export type RegistroEquiposPerifericos = RegistroEquiposComputo | RegistroServidor | RegistroPantalla;
