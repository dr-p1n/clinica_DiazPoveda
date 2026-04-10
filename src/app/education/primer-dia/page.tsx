import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'Primer día · Dra. Ana Laura Diaz',
  description:
    'Una reflexión sobre el primer día de rotación clínica y la lección de madurez emocional que dejó una paciente de 83 años.',
};

export default function PrimerDiaPage() {
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
              Primer día.
            </h1>

            <div
              className="flex flex-col gap-6 text-base leading-8"
              style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}
            >
              <p>
                Eran las 6:30 de la mañana y ya todo el mundo sabía en qué área tenía que estar. Yo,
                como buena estudiante de medicina, ya estaba toda vestida de blanco. Zapatillas
                ultra limpias, bata bien planchada y con mi respectiva plaquita de identificación,
                con mi nombre y la universidad en la que estudiaba.
              </p>
              <p>
                La rotación era medicina interna. La tan amada especialidad (únicamente por los
                internistas). Nos dividieron en grupos y nos asignaron a los médicos especialistas
                que estaban a cargo de sumergirnos en el mundo intrahospitalario, el mismo donde más
                adelante, muchos de ellos intentarían ahogarnos. Pero así funcionaba. Sobrevivía el
                más fuerte... de mente.
              </p>
              <p>
                La madurez emocional era un término que desconocía por completo a mis 21 años. Y sin
                saberlo, estaba empezando a desarrollarla, en el servicio de geriatría, cuando en mi
                primer día de rotación clínica me dijeron que debía escoger a un paciente y
                memorizarme su expediente, porque al día siguiente me tocaba
                &ldquo;presentarlo&rdquo; en el pase de visita.
              </p>
              <p>
                Escogí a una paciente femenina de 83 años, que había sido admitida con diagnóstico
                de neumonía bacteriana. Revisé sus laboratorios, aunque no entendiera nada. Revisé
                sus medicamentos, aunque aún no supiera pronunciar algunos. Intenté conversar con
                ella para confirmar ciertos datos de su historia clínica, pero la conversación fue
                en gran parte yo haciendo las preguntas y ella contestando lo que podía...
                &ldquo;si&rdquo;, &ldquo;no&rdquo;, &ldquo;mi hijo&rdquo;.
              </p>
              <p>
                Según las enfermeras de la sala (quienes todo lo saben y de todo se enteran) su hijo
                la iba a visitar todos los días al mediodía, pero trabajaba por turnos rotativos y
                esa semana no había podido ir.
              </p>
              <p>
                Todas las mañanas mi trabajo consistió en tomarle los signos vitales, los niveles de
                azúcar en sangre, muestras sanguíneas y, si quedaba tiempo, hablaba con ella. Desde
                allí supe que había un problema, porque lo más importante de la interacción con el
                paciente, se estaba dejando para lo último, &ldquo;por si quedaba tiempo&rdquo;.
              </p>
              <p>
                Pasaron los días hasta que llegó el viernes. Cuando iba saliendo del hospital conocí
                al hijo de mi tan frágil neumonía de la cama 7. Le había traído pañales, loción
                corporal y su fruta favorita: mango, muchísimo mango. Cabe destacar que mi paciente
                femenina de 83 años no tenía ni un solo diente, aparentemente el hijo se lo hacía
                como una especie de puré, para que pudiera seguir comiéndolo.
              </p>
              <p>
                Me despedí y disfruté mi fin de semana. Llegué el lunes y el hijo de mi paciente se
                estaba despidiendo y agradeciéndole a todo el personal por los cuidados brindados a
                su madre. Aparentemente, la visita de su hijo era lo único que ella esperaba para
                poder partir. A veces simplemente estamos esperando que alguien llegue, para poder
                irnos. Y eso hizo mi paciente.
              </p>
              <p>
                Pero ya no era la paciente femenina de 83 años, ya no era &ldquo;la neumonía de cama
                7&rdquo;. Era Edith. Viuda, madre de 2, abuela de 5. Le encantaba el mango.
              </p>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
