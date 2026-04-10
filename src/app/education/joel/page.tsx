import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'Joel · Dra. Ana Laura Diaz',
  description:
    'Una historia sobre dos niños en urgencias, la desigualdad en la medicina y lo que significa estar del otro lado.',
};

export default function JoelPage() {
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
            ← Recursos Educativos
          </Link>

          <article>
            <h1
              className="text-5xl font-display font-medium mb-12"
              style={{ color: 'var(--color-text)' }}
            >
              Joel.
            </h1>

            <div
              className="flex flex-col gap-6 text-base leading-8"
              style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}
            >
              <p>
                5 de la madrugada de un frío lunes de agosto. Hospital del Niño. Cuarto de
                urgencias. Alcancé a ver 2 camillas. Una sostenía a una niña de unos 9 años, un poco
                débil por la deshidratación que tenía debido a su gastroenteritis. La otra llevaba a
                un niño de aproximadamente 11 años. Al parecer lo habían intubado en la escena y
                venía recibiendo 1 ventilación cada 5-6 segundos.
              </p>
              <p>
                La niña se llamaba Anaís. Pudo haber ingerido un poco de algo raro, o demasiado de
                lo de siempre (eso a veces también intoxica). Ya estaba canalizada y le estaban
                pasando líquidos intravenosos para reponer todo el que había perdido producto de los
                vómitos que habían hecho aterrizar a mamá y papá en el hospital infantil más
                saturado del país.
              </p>
              <p>
                El niño, acompañado por su madre, presentaba un trauma craneoencefálico, el cual
                aparentemente ocurrió mientras jugaba con sus hermanos frente a su casa. El golpe
                afectaba la parte frontal de la cabeza del lado izquierdo y una buena parte del ojo
                de ese mismo lado. Sin respuesta a estímulos dolorosos. Pupilas no reactivas a la
                luz. Hoja de maltrato segura.
              </p>
              <p>
                Anaís tomaba clases de canto en el centro de la ciudad. De tenis los sábados. Le iba
                más o menos bien en la escuela. Era la segunda de 3 hermanas. Él era el quinto de
                nueve hermanos. La mayoría pacientes frecuentes del hospital. Asistía a la escuela
                muy irregularmente y jugaba futbol con los vecinos de su comunidad.
              </p>
              <p>
                La deshidratación de Anaís hizo que su pediatra optara por dejarla hospitalizada.
                Fue recibida en sala de pediatría por un personal de enfermería comprometido con
                asegurar la comodidad, bienestar y pronta recuperación de los pacientitos que
                llegaban a la sala. Estaba tranquila, sus vómitos habían cedido y se mantuvo en
                observación.
              </p>
              <p>
                A él lo enviaron directo a la unidad de terapia intensiva, donde fue recibido casi
                como una celebridad. Médicos de distintas especialidades, enfermeras y enfermeros,
                técnicas y técnicos, terapia respiratoria, nutricionistas, flebotomistas... todos se
                preparaban con antelación. Este equipo, a diferencia del de Anaís, no buscaba
                únicamente la comodidad, este equipo buscaba sacarlo vivo de allí.
              </p>
              <p>
                Al día siguiente Anaís presentó signos de mejoría, adecuado aspecto físico,
                cardiovascular normal, pulmonar normal, neurológico normal.
              </p>
              <p>
                En UTI se enfrentaban a venas de difícil acceso, una ventilación mecánica con sus
                parámetros a tope y un electroencefalograma con actividad casi nula.
              </p>
              <p>
                La mamá de Anaís no veía la hora de que le dieran de alta a su hija para poder
                volver a casa y salir de esa sala de pediatría lo más rápido posible. La mamá de
                nuestro paciente de intensivos hubiese dado todo porque su hijo pudiese estar justo
                en esa sala.
              </p>
              <p>Anaís pudo regresar a casa con medicamentos. A Joel le tocó quedarse.</p>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
