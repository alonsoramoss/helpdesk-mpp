import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import { AuthProvider } from "@/context/authContext";
import { Toaster } from "sonner";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Sistema de Help Desk y Registro US",
  description: "Sistema para la gestión de incidentes, control de inventario de equipos tecnológicos, automatización de informes técnicos, visualización de reportes generales, administración de usuarios y más funcionalidades.",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
        <html lang="es" suppressHydrationWarning>
          <body className={montserrat.className}>
            {children}
            <Toaster />
          </body>
        </html>
    </AuthProvider>
  );
}
