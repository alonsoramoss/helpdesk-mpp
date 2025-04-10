import {
  LucideIcon,
  LayoutGrid, 
  Wrench,
  SquarePen,
  ListChecks,
  Archive,
  FileText, 
  BarChart,
  Settings,
  HelpCircle,
  } from "lucide-react";

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
          href: "/mantenimiento-pc-accesorios",
          label: "MANTENIMIENTO DE PCS Y ACCESORIOS",
          icon: Wrench,
        },
        {
          href: "",
          label: "REGISTRO",
          icon: SquarePen,
          submenus: [
            {
              href: "/registro/equipos-perifericos",
              label: "Equipos y Periféricos"
            },
            {
              href: "/registro/materiales",
              label: "Materiales"
            }
          ]
        },
        {
          href: "/registro-inventario",
          label: "REGISTRO DE INVENTARIO",
          icon: ListChecks,
        },
        {
          href: "",
          label: "INVENTARIO DE EQUIPO TECNOLÓGICO",
          icon: Archive,
          submenus: [
            {
              href: "/inventario-equipo-tecnologico/equipos-perifericos",
              label: "Equipos y Periféricos"
            },
            {
              href: "/inventario-equipo-tecnologico/materiales",
              label: "Materiales"
            },
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
