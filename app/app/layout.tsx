import type { Metadata } from 'next';
import { ReactNode } from 'react';
import '../src/styles/tailwind.css';
import '../src/styles/globals.css';

export const metadata: Metadata = {
  title: 'SneakersCR | Tienda de Tenis Deportivos',
  description: 'Compra tenis deportivos de calidad con envío rápido a Costa Rica',
  manifest: '/manifest.json',
  themeColor: '#FF6B35',
  icons: {
    icon: '/Whatsapp.png',
    apple: '/Whatsapp.png',
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/Whatsapp.png" type="image/png" />
        <link rel="apple-touch-icon" href="/Whatsapp.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FF6B35" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
