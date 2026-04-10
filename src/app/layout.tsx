import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/index.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Dra. Ana Laura Diaz — Terapia IV · Panamá',
  description:
    'Sesiones personalizadas de terapia intravenosa administradas por médico certificado en Panamá. Hidratación, vitaminas, recuperación y fórmulas personalizadas.',
  metadataBase: new URL('https://dranalauradiaz.com'),
  icons: {
    icon: [{ url: '/assets/images/app_logo.png', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
