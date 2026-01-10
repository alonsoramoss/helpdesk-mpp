import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import { AuthProvider } from "@/context/authContext";
import QueryProvider from "@/providers/QueryProvider";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700", "900"], display: "swap" });

export const metadata: Metadata = {
  title: "Sistema de Help Desk y Registro US",
  description: "Sistema para gestionar reportes de incidentes, registrar equipos de cómputo y periféricos, controlar el inventario, generar informes técnicos, visualizar reportes generales, administrar usuarios, entre otras funcionalidades.",
  authors: [{ name: "Alonso Ramos", url: "https://alonsoramos.netlify.app" }],
  creator: "Alonso Ramos",
  icons:{
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "tUbG3Yc-yQvaSMjgz4wvH2WVo2JWFF2DRewB0Js1DB8",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Sistema de Help Desk y Registro US",
    description: "Sistema para gestionar reportes de incidentes, registrar equipos de cómputo y periféricos, controlar el inventario, generar informes técnicos, visualizar reportes generales, administrar usuarios, entre otras funcionalidades.",
    url: "https://helpdesk-mpp.vercel.app",
    siteName: "Sistema de Help Desk y Registro US",
    images: [
      {
        url: "https://helpdesk-mpp.vercel.app/og.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistema de Help Desk y Registro US",
    description: "Sistema para gestionar reportes de incidentes, registrar equipos de cómputo y periféricos, controlar el inventario, generar informes técnicos, visualizar reportes generales, administrar usuarios, entre otras funcionalidades.",
    images: ["https://helpdesk-mpp.vercel.app/og.png"],
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
            <Analytics />
          </body>
        </html>
      </QueryProvider>
    </AuthProvider>
  );
}
