import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'Recursos Educativos · Dra. Ana Laura Diaz',
  description: 'Reflexiones, historias clínicas y recursos de salud por la Dra. Ana Laura Diaz.',
};

const articles = [
  {
    slug: 'primer-dia',
    title: 'Primer día.',
    excerpt:
      'Eran las 6:30 de la mañana y ya todo el mundo sabía en qué área tenía que estar. Yo, como buena estudiante de medicina, ya estaba toda vestida de blanco...',
    readTime: '5 min',
  },
  {
    slug: 'joel',
    title: 'Joel.',
    excerpt:
      '5 de la madrugada de un frío lunes de agosto. Hospital del Niño. Cuarto de urgencias. Alcancé a ver 2 camillas...',
    readTime: '5 min',
  },
];

export default function EducationPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col" style={{ background: 'var(--color-bg)' }}>
        <Header />
        <main className="flex-1 mx-auto w-full px-6 py-16" style={{ maxWidth: '760px' }}>
          <div className="mb-12">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--color-accent)', letterSpacing: '0.15em' }}
            >
              Recursos Educativos
            </p>
            <h1
              className="text-4xl font-display font-medium"
              style={{ color: 'var(--color-text)' }}
            >
              Reflexiones desde la medicina
            </h1>
          </div>

          <div className="flex flex-col gap-6">
            {articles.map((article) => (
              <Link key={article.slug} href={`/education/${article.slug}`} className="group block">
                <article
                  className="p-8 rounded-2xl transition-all group-hover:shadow-md"
                  style={{
                    background: 'var(--color-primary)',
                    border: '1px solid rgba(0,0,0,0.06)',
                  }}
                >
                  <h2
                    className="text-2xl font-display font-medium mb-3"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {article.title}
                  </h2>
                  <p
                    className="text-base leading-relaxed mb-5"
                    style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
                  >
                    {article.excerpt}
                  </p>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-body)' }}
                  >
                    Leer artículo →
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
