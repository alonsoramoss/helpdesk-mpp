import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import { AuthProvider } from "@/context/authContext";
import { Toaster } from "sonner";
import QueryProvider from "@/providers/QueryProvider";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

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
      <QueryProvider>
        <html lang="es" suppressHydrationWarning>
          <body className={poppins.className}>
            {children}
            <Toaster />
          </body>
        </html>
      </QueryProvider>
    </AuthProvider>
  );
}
