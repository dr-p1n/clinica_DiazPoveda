import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'Es mi bebé · Dra. Ana Laura Díaz',
  description:
    'Un turno de obstetricia, una sala de partos llena, y una madre que aprendió que el instinto no tiene protocolo.',
};

export default function EsMiBebeePage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col" style={{ background: 'var(--color-bg)' }}>
        <Header />
        <main className="flex-1 mx-auto w-full px-6 py-16" style={{ maxWidth: '680px' }}>
          <Link
            href="/education"
            className="inline-flex items-center gap-2 text-sm mb-12 transition-opacity hover:opacity-60"
            style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
          >
            ← My own words
          </Link>

          <article>
            <h1
              className="text-5xl font-display font-medium mb-12"
              style={{ color: 'var(--color-text)' }}
            >
              Es mi bebé.
            </h1>

            <div
              className="flex flex-col gap-6 text-base leading-8"
              style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}
            >
              <p>
                Un martes cualquiera pasando la visita de obstetricia luego de un turno en el que
                parecía que alguien de la sala de partos vestía ropa de color rojo (pecado mortal),
                9 meses después de los carnavales y en plena luna llena. Hubo de todo.
              </p>
              <p>
                Llegaron madres primerizas que habían roto fuente, multíparas a las que solo les
                faltaba estornudar, madres con sus primeras contracciones y no faltaron las que
                llegaron con su bebé ya en brazos (el verdadero &ldquo;no podía esperar más para
                conocerte&rdquo;).
              </p>
              <p>
                No habían pasado 3 horas del turno y la sala de partos ya estaba llena. Al llegar
                una paciente nueva, hay que hacerle su historia clínica (lo que vendría siendo
                &ldquo;tomar su declaración&rdquo;, si los médicos fuésemos detectives) (sí lo
                somos), además de realizar el tacto vaginal para establecer cuántos centímetros de
                dilatación tiene e ir partiendo desde allí.
              </p>
              <p>
                Una de las mamás primerizas estaba completa. Kimberly de 32 años estaba rodeada de
                enfermeras que le decían cómo debía pujar, cómo respirar para no cansarse, que sí
                podía hacerlo y que ya faltaba poquito para conocer a su bebé.
              </p>
              <p>
                Fue un último pujo el que hizo que el interno de partos dijera &ldquo;Ya no pujes
                más&rdquo;. Justamente después de estas palabras, Kimberly sintió una fuerte
                presión, un dolor intenso, como si una bola de boliche estuviese saliendo de ella.
                Luego escuchó &ldquo;Mamá, aquí está tu bebé&rdquo; y ya no hubo dolor que
                importara.
              </p>
              <p>
                La mañana siguiente Kimberly estaba dando pecho a su bebé. Durante la visita
                conocimos a su madre. Al parecer, la noche anterior, la nueva abuela había sido
                protagonista, exigiendo a gritos que la dejaran pasar, que ella tenía que estar con
                su hija. Kimberly le reprochó: &ldquo;No era para que armaras tanto show, qué pena
                con el personal&rdquo;.
              </p>
              <p>
                Un rato después, la enfermera de neonatología llegó a buscar al bebé y le explicó a
                Kimberly que la pediatra había solicitado una radiografía para ver sus pulmoncitos.
                Ella se negó rotundamente, no quería separarse de su bebé, no tan pronto.
              </p>
              <p>
                Hizo que llamaran a su ginecólogo, a quien hizo contactar a la pediatra para que
                autorizara posponer el examen. No lo logró. Kimberly, entre lágrimas y llanto,
                entregó a su bebé.
              </p>
              <p>
                Menos de 30 minutos después ya se encontraba amamantándolo de nuevo. Su padre, quien
                también estaba en la habitación, le dijo entre risas y con un tono sarcástico
                &ldquo;¿Ves? No era para que armaras tanto show, qué pena con el personal&rdquo;.
              </p>
              <p>
                Kimberly reaccionó de inmediato y a la defensiva respondió &ldquo;¿Cómo no? ¡Es mi
                bebé!&rdquo;
              </p>
              <p>
                Su padre la miró, sonrió y le dijo &ldquo;En el show de ayer, tu mamá dijo lo
                mismo&rdquo;.
              </p>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
