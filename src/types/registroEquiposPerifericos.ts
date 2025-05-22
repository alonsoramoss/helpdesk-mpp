export interface RegistroEquiposPerifericosGeneral {
    // Información General
    sede: string;
    nomOficina: string;

    // Equipo
    codPatrimonialEquipo: string;
    tipoEquipo: string;
    fabricanteEquipo: string;
    modeloEquipo: string;
    numSerieEquipo: string;
    fechAdquisicionEquipo: string;
    estadoEquipo: string;
    hostnameEquipo: string;
    ipEquipo: string;
    factorFormaEquipo: string;
    imagenEquipo: string;
    garantiaEquipo: string;
    numFacturaEquipo: string;
}

export interface RegistroEquiposComputo extends RegistroEquiposPerifericosGeneral {
    // Placa Base
    codPatrimonialPlaca: string;
    fabricantePlaca: string;
    numSeriePlaca: string;
    modeloPlaca: string;
    estadoPlaca: string;

    // Procesador
    fabricanteProcesador: string;
    estadoProcesador: string;
    modeloProcesador: string;

    // Disco Duro
    DescripcionDiscoDuro: string;
    interfazDiscoDuro: string;
    tipoDiscoDuro: string;
    estadoDiscoDuro: string;
    capacidadDiscoDuro: string;

    // Memoria
    moduloMemoria: string;
    velocidadMemoria: string;
    capacidadMemoria: string;
    estadoMemoria: string;

    // Fuente
    fabricanteFuente: string;
    tipoFuente: string;
    modeloFuente: string;
    estadoFuente: string;
    potenciaFuente: string;

    // Unidad Extraible
    unidExtraible: string;
    estadoUnidExtraible: string;

    observacion: string;

    // Monitor
    codPatrimonialMonitor: string;
    fabricanteMonitor: string;
    numSerieMonitor: string;
    modeloMonitor: string;
    estadoMonitor: string;
    tamañoMonitor: string;
    tipoMonitor: string;

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

    // Tarjeta Adicional
    tarjeta: string;
    estadoTarjeta: string;

    // Sistema Operativo
    tipoSO: string;
    licenciaSistema: "Si" | "No";
}

export interface RegistroServidor extends RegistroEquiposPerifericosGeneral {
    // Detalles Técnicos
    tipoServidor: string;

    // Especificaciones de Hardware
    procesador: string;
    frecuenciaProcesador: string;
    numNucleos: number;
    memoriaRam: string;
    tipoRam: string;
    capacidadAlmacenamiento: string;
    tipoAlmacenamiento: string;
    numDiscos: number;
    interfazAlmacenamiento: string;
    fuentePoder: string;
    tarjetaRed: string;
    puertosUsb: number;
    fuenteAlimentacion: string;
    sistemaRefrigeracion: string;
    numVentiladores: number;

    observacion: string;

    // Especificaciones de Red y Conectividad 
    interfazRed: string;
    configuracionRed: string;

    // Sistema Operativo
    tipoSo: string;
    versionSo: string;
    licenciaSoftware: "Si" | "No";
    otrosServicios: string;

    // Seguridad y Respaldo
    firewall: string;
    proteccionSobretension: string;
    sistemaBackup: string;
    encriptacionDatos: string;
    sistemaRecuperacionDesastres: string;
    wifi: string;
}

export interface RegistroPantalla extends RegistroEquiposPerifericosGeneral {
    // Detalles Técnicos
    tipoPantalla: string;

    // Especificaciones Técnicas
    tamañoPantalla: string;
    resolucion: string;
    tecnologiaPantalla: string;
    discoDuro: string;
    memoriaRam: string;
    conectividad: string;
    soporteMontaje: string;

    // Accesorios
    accesorios: string;
}

export interface RegistroEquipoBiometrico extends RegistroEquiposPerifericosGeneral {
    // Especificaciones Técnicas
    capacidadUsuarios: number;
    capacidadHuellas: number;
    capacidadRostros: number;
    capacidadTarjetas: number;
    pantalla: string;
    comunicacion: string;
    fuenteAlimentacion: string;
    interfazAcceso: string;
}


export interface RegistroContadorBilletes extends RegistroEquiposPerifericosGeneral {
    // Especificaciones Técnicas
    cantidadBolsillos: number;
    capacidadTolbo: number;
    capacidadApisador: number;
    capacidadRechazo: number;
    comunicacion: string;
    pantalla: string;
    velocidad: string;
    fuenteAlimentacion: string;
}

export type RegistroEquiposPerifericos = RegistroEquiposComputo | RegistroServidor | RegistroPantalla | RegistroEquipoBiometrico | RegistroContadorBilletes;
