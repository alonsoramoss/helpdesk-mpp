import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import { AuthProvider } from "@/context/authContext";
import { Toaster } from "sonner";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Sistema de Help Desk y Registro US",
  description: "Sistema de Help Desk y Registro US que permite reportar incidentes, gestionar el inventario de equipo tecnológico, generar informes técnicos, visualizar reportes generales, administrar usuarios y más.",
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
