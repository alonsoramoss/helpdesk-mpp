import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.APP_URL
      ? `${process.env.APP_URL}`
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : `http://localhost:${process.env.PORT || 3000}`
  ),
  title: "Sistema de Help Desk y Registro US",
  description:
    "Sistema Help Desk y Registro US que permite reportar incidentes, gestionar herramientas y materiales, programar tareas, gestionar inventario, visualizar reportes, opción de ayuda de uso y más.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    url: "/",
    title: "Sistema de Help Desk y Registro US",
    description:
      "Sistema Help Desk y Registro US que permite reportar incidentes, gestionar herramientas y materiales, programar tareas, gestionar inventario, visualizar reportes, opción de ayuda de uso y más.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistema de Help Desk y Registro US",
    description:
      "Sistema Help Desk y Registro US que permite reportar incidentes, gestionar herramientas y materiales, programar tareas, gestionar inventario, visualizar reportes, opción de ayuda de uso y más."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
