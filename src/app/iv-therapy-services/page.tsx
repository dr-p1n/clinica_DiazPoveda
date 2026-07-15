import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import IVTherapyInteractive from './components/IVTherapyInteractive';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'Consultas · Dra. Ana Laura Díaz Poveda',
  description:
    'Consultas de Medicina General en Panamá con la Dra. Ana Laura Díaz Poveda. Certificados médicos, seguimiento de enfermedades crónicas, revisión de laboratorios y más. $60 por consulta.',
  keywords: [
    'consulta médica Panamá',
    'medicina general Panamá',
    'certificado de salud',
    'Dra. Ana Laura Díaz',
    'médico Punta Pacífica',
  ],
};

export default function IVTherapyPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col" style={{ background: 'var(--color-bg)' }}>
        <Header />
        <main className="flex-1">
          <IVTherapyInteractive />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
