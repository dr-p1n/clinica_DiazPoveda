import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'DOCTI · Dra. Ana Laura Diaz',
  description: 'Próximamente.',
};

export default function MedTechPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col" style={{ background: 'var(--color-bg)' }}>
        <Header />
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="text-center flex flex-col items-center gap-4">
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: 'var(--color-accent)', letterSpacing: '0.15em' }}
            >
              Próximamente
            </p>
            <h1
              className="text-4xl font-display font-medium"
              style={{ color: 'var(--color-text)' }}
            >
              DOCTI
            </h1>
            <p className="text-base max-w-sm" style={{ color: 'var(--color-muted)' }}>
              Estamos construyendo algo increíble. Vuelve pronto.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
