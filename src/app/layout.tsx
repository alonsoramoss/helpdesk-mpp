import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import { AuthProvider } from "@/context/authContext";
import QueryProvider from "@/providers/QueryProvider";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Sistema de Help Desk y Registro US",
  description: "Sistema para gestionar reportes de incidentes, registrar equipos de cómputo y periféricos, controlar el inventario, generar informes técnicos, visualizar reportes generales, administrar usuarios, entre otras funcionalidades.",
  authors: [{ name: "Alonso Ramos" }],
	creator: "Alonso Ramos",
  icons:{
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple:["/apple-touch-icon.png"],
    shortcut:["/android-chrome-192x192.png"],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "tUbG3Yc-yQvaSMjgz4wvH2WVo2JWFF2DRewB0Js1DB8",
  },
  openGraph: {
    title: "Sistema de Help Desk y Registro US",
    siteName: "Sistema de Help Desk y Registro US",
    description: "Sistema para gestionar reportes de incidentes, registrar equipos de cómputo y periféricos, controlar el inventario, generar informes técnicos, visualizar reportes generales, administrar usuarios, entre otras funcionalidades.",
    url: "https://helpdesk-mpp.vercel.app",
    images: [
      {
        url: "https://helpdesk-mpp.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "Sistema de Help Desk y Registro US",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistema de Help Desk y Registro US",
    description: "Sistema para gestionar reportes de incidentes, registrar equipos de cómputo y periféricos, controlar el inventario, generar informes técnicos, visualizar reportes generales, administrar usuarios, entre otras funcionalidades.",
  },
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
          <body className={montserrat.className}>
            {children}
          </body>
        </html>
      </QueryProvider>
    </AuthProvider>
  );
}
