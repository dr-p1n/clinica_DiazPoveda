import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/context/LanguageContext';
import CorporateInteractive from './components/CorporateInteractive';

export const metadata: Metadata = {
  title: 'Charlas para empresas · Dra. Ana Laura Díaz',
  description:
    'Charlas de salud para equipos de trabajo. Información clara, práctica y basada en evidencia. Consulta y cotiza tu paquete.',
};

export default function CharlasPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col" style={{ background: 'var(--color-bg)' }}>
        <Header />
        <main className="flex-1">
          <CorporateInteractive />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
