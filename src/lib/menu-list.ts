import { Tag, HelpCircle, Settings, FileText, SquarePen, LayoutGrid, LucideIcon, Wrench, BarChart } from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/inicio",
          label: "INICIO",
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Contenido",
      menus: [
        {
          href: "/tickets",
          label: "TICKETS",
          icon: Tag,
        },
        {
          href: "/mantenimiento-pc-accesorios",
          label: "MANTENIMIENTO DE PCS Y ACCESORIOS",
          icon: Wrench,
        },
        {
          href: "",
          label: "INVENTARIO DE EQUIPO TECNOLÓGICO",
          icon: SquarePen,
          submenus: [
            {
              href: "/inventario-equipo-tecnologico/hardware",
              label: "Hardware"
            },
            {
              href: "/inventario-equipo-tecnologico/software",
              label: "Software"
            },
            {
              href: "/inventario-equipo-tecnologico/inventario-accesorios",
              label: "Inventario y Accesorios"
            },
            {
              href: "/inventario-equipo-tecnologico/reportes-estadisticas",
              label: "Reportes y Estadísticas"
            }
          ]
        },
        {
          href: "/informes-tecnicos",
          label: "INFORMES TÉCNICOS",
          icon: FileText,
        },
        {
          href: "/reporte-general",
          label: "REPORTE GENERAL",
          icon: BarChart,
        },
      ]
    },
    {
      groupLabel: "Soporte",
      menus: [
        {
          href: "/configuracion",
          label: "CONFIGURACIÓN",
          icon: Settings,
        },
        {
          href: "/ayuda",
          label: "AYUDA",
          icon: HelpCircle,
        },
      ]
    }
  ];
}
