export interface RegistroInventarioGeneral {
    // Información General
    categoria: string;
    numRegistro: string;
    tipoDoc: string;
    numDoc: string;
    usuario: string;
    cargo: string;
    sede: string;
    nomOficina: string;

    // Equipo
    codPatrimonialEquipo: string;
    tipoEquipo: string;
    fabricantEquipo: string;
    modeloEquipo: string;
    numSerieEquipo: string;
    fechaAdquisicionEquipo: string;
    estadoEquipo: string;
    hostnameEquipo: string;
    ipEquipo: string;
}

export interface RegistroEquiposComputo extends RegistroInventarioGeneral {
    // Placa Base
    codPatrimonialPlaca: string;
    fabricantePlaca: string;
    numSeriePlaca: string;
    modeloPlaca: string;
    estadoPlaca: string;
    fechaInstalacionPlaca: string;
    fechaDesinstalacionPlaca: string;
    procesador: string;
    estadoProcesador: string;
    discoDuro: string;
    estadoDiscoDuro: string;
    memoria: string;
    estadoMemoria: string;
    unidExtraible: string;
    estadoUnidExtraible: string;
    observacion: string;

    // Monitor
    codPatrimonialMonitor: string;
    fabricanteMonitor: string;
    numSerieMonitor: string;
    modeloMonitor: string;
    estadoMonitor: string;

    // Teclado
    codPatrimonialTeclado: string;
    fabricanteTeclado: string;
    numSerieTeclado: string;
    modeloTeclado: string;
    estadoTeclado: string;

    // Mouse
    codPatrimonialMouse: string;
    fabricanteMouse: string;
    numSerieMouse: string;
    modeloMouse: string;
    estadoMouse: string;

    // Parlantes
    codPatrimonialParlantes: string;
    fabricanteParlantes: string;
    numSerieParlantes: string;
    modeloParlantes: string;
    estadoParlantes: string;

    // Estabilizador
    codPatrimonialEstabilizador: string;
    fabricanteEstabilizador: string;
    numSerieEstabilizador: string;
    modeloEstabilizador: string;
    estadoEstabilizador: string;

    // Supresor de Pico
    codPatrimonialSupresorPico: string;
    fabricanteSupresorPico: string;
    numSerieSupresorPico: string;
    modeloSupresorPico: string;
    estadoSupresorPico: string;

    // Tarjeta adicional
    tarjeta: string;
    estadoTarjeta: string;

    // Sistema Operativo
    tipoSo: string;
    licenciaSistema: string;

    // Software
    nomSoftware: string;
    añoSoftware: string;
    licenciaSoftware: string;
    fechaInicioSoftware: string;
    fechaFinSoftware: string;
}

export type RegistroInventario = RegistroEquiposComputo;
