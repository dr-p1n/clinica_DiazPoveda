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
      <body>
        {children}
        {/* Netlify Identity — required for /admin login redirect */}
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" async />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.netlifyIdentity) {
                window.netlifyIdentity.on("init", function(user) {
                  if (!user) {
                    window.netlifyIdentity.on("login", function() {
                      document.location.href = "/admin/";
                    });
                  }
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
