export type ItemsTI = {
    id: string;
    label: string;
    categoria: 'hardware' | 'sistemas' | 'software' | 'redes';
};

export const grupoItems: { 
    izqTitle: string; 
    derTitle: string; 
    izq: ItemsTI[]; 
    der: ItemsTI[] 
}[] = [
    {
        izqTitle: 'Hardware',
        derTitle: 'Sistemas y/o Aplicativos',
        izq: [
            { id: 'cpu', label: 'CPU y/o Laptop', categoria: 'hardware' },
            { id: 'monitor', label: 'Monitor', categoria: 'hardware' },
            { id: 'teclado', label: 'Teclado', categoria: 'hardware' },
            { id: 'mouse', label: 'Mouse', categoria: 'hardware' },
            { id: 'estabilizador', label: 'Estabilizador', categoria: 'hardware' },
            { id: 'impresora', label: 'Impresora', categoria: 'hardware' },
            { id: 'supresor_pico', label: 'Supresor de Pico', categoria: 'hardware' },
            { id: 'otros_hardware', label: 'Otros', categoria: 'hardware' },
        ],
        der: [
            { id: 'siaf', label: 'SIAF', categoria: 'sistemas' },
            { id: 'siga', label: 'SIGA', categoria: 'sistemas' },
            { id: 'sistema_registro_civil', label: 'Sistema Registro Civil', categoria: 'sistemas' },
            { id: 'rubem', label: 'RUBEM', categoria: 'sistemas' },
            { id: 'rub_pvl_20', label: 'RUB PVL 20', categoria: 'sistemas' },
            { id: 'sispla', label: 'SISPLA', categoria: 'sistemas' },
            { id: 'supresor_via_web', label: 'Supresor Via Web', categoria: 'sistemas' },
            { id: 'otros_sistemas', label: 'Otros', categoria: 'sistemas' },
        ],
    },
    {
        izqTitle: 'Software',
        derTitle: 'Redes',
        izq: [
            { id: 'sistema_operativo', label: 'Sistema Operativo', categoria: 'software' },
            { id: 'word', label: 'Word', categoria: 'software' },
            { id: 'excel', label: 'Excel', categoria: 'software' },
            { id: 'power_point', label: 'Power Point', categoria: 'software' },
            { id: 'internet_software', label: 'Internet', categoria: 'software' },
            { id: 'antivirus', label: 'Antivirus', categoria: 'software' },
            { id: 'otros_software', label: 'Otros', categoria: 'software' },
        ],
        der: [
            { id: 'internet_red', label: 'Internet' , categoria: 'redes' },
            { id: 'modem', label: 'Modem' , categoria: 'redes' },
            { id: 'router', label: 'Router' , categoria: 'redes' },
            { id: 'switch', label: 'Switch' , categoria: 'redes' },
            { id: 'cableado', label: 'Cableado' , categoria: 'redes' },
            { id: 'otros_redes', label: 'Otros' , categoria: 'redes' },
        ],
    },
];
