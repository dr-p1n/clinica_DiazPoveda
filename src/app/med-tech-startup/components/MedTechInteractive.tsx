'use client';

import { useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { useTranslation } from '@/context/LanguageContext';

export default function MedTechInteractive() {
  const { t, tObj } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
    );
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const features = tObj('medtech_building.features') as Array<{
    id: string;
    headline: string;
    desc: string;
  }>;

  const featureIcons: Record<string, string> = {
    monitor: 'HeartIcon',
    records: 'DocumentTextIcon',
    ai: 'CpuChipIcon',
  };

  return (
    <>
      {/* ── HERO (dark) ── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background: 'var(--color-dark)',
          paddingTop: '100px',
        }}
      >
        {/* Subtle texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage: 'radial-gradient(rgba(245,233,160,0.6) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Warm glow */}
        <div
          className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, var(--color-accent) 0%, transparent 70%)',
            transform: 'translate(20%, -20%)',
          }}
        />

        <div className="mx-auto px-6 w-full relative z-10" style={{ maxWidth: '1100px' }}>
          <div className="max-w-3xl py-24">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-pill mb-10"
              style={{
                background: 'rgba(245,233,160,0.12)',
                border: '1px solid rgba(245,233,160,0.2)',
                animation: 'animationIn 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s both',
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: 'var(--color-primary)' }}
              />

              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{
                  color: 'var(--color-primary)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {t('medtech_hero.badge')}
              </span>
            </div>

            <h1
              className="font-display mb-6 leading-tight"
              style={{
                fontSize: 'clamp(42px, 5.5vw, 72px)',
                fontWeight: 300,
                color: '#FFFDF5',
                animation: 'animationIn 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s both',
              }}
            >
              {t('medtech_hero.headline')}
            </h1>

            <p
              className="text-lg leading-relaxed mb-12"
              style={{
                color: 'rgba(255,253,245,0.6)',
                fontFamily: 'var(--font-body)',
                maxWidth: '580px',
                animation: 'animationIn 0.8s cubic-bezier(0.16,1,0.3,1) 0.35s both',
              }}
            >
              {t('medtech_hero.subline')}
            </p>

            <div
              className="flex flex-wrap gap-4"
              style={{
                animation: 'animationIn 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s both',
              }}
            >
              <a
                href={`mailto:hola@nataltech.io`}
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-dark transition-all"
                style={{
                  background: 'var(--color-primary)',
                  borderRadius: 'var(--radius-pill)',
                  fontFamily: 'var(--font-body)',
                  color: 'var(--color-dark)',
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.background = '#ede07d')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-primary)')
                }
              >
                {t('medtech_cta.email_btn')}
                <Icon name="EnvelopeIcon" size={16} variant="outline" />
              </a>
              <button
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold transition-all"
                style={{
                  border: '1.5px solid rgba(255,253,245,0.2)',
                  borderRadius: 'var(--radius-pill)',
                  color: 'rgba(255,253,245,0.8)',
                  background: 'transparent',
                  fontFamily: 'var(--font-body)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    'rgba(255,253,245,0.5)';
                  (e.currentTarget as HTMLButtonElement).style.color = '#FFFDF5';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    'rgba(255,253,245,0.2)';
                  (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,253,245,0.8)';
                }}
              >
                {t('medtech_cta.deck_btn')}
                <Icon name="ArrowDownTrayIcon" size={16} variant="outline" />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ animation: 'fadeIn 1s ease 1.2s both' }}
        >
          <div
            className="w-px h-12"
            style={{
              background: 'linear-gradient(to bottom, rgba(245,233,160,0.5), transparent)',
            }}
          />
        </div>
      </section>

      {/* ── PROBLEM / VISION ── */}
      <section
        style={{
          background: 'var(--color-dark)',
          padding: 'var(--section-padding) 0',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: '1100px' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Problem */}
            <div
              className="animate-on-scroll"
              style={{
                animation: 'animationIn 0.7s cubic-bezier(0.16,1,0.3,1) both',
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px" style={{ background: 'var(--color-muted)' }} />

                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{
                    color: 'var(--color-muted)',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {t('medtech_problem.problem_label')}
                </span>
              </div>
              <p
                className="text-lg leading-relaxed"
                style={{
                  color: 'rgba(255,253,245,0.65)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {t('medtech_problem.problem_text')}
              </p>
            </div>

            {/* Vision */}
            <div
              className="animate-on-scroll"
              style={{
                animation: 'animationIn 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s both',
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px" style={{ background: 'var(--color-accent)' }} />

                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{
                    color: 'var(--color-accent)',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {t('medtech_problem.vision_label')}
                </span>
              </div>
              <p
                className="text-lg leading-relaxed"
                style={{
                  color: 'rgba(255,253,245,0.85)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {t('medtech_problem.vision_text')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE'RE BUILDING ── */}
      <section
        style={{
          background: 'var(--color-dark-surface)',
          padding: 'var(--section-padding) 0',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: '1100px' }}>
          <h2
            className="font-display mb-16 animate-on-scroll"
            style={{
              fontSize: 'clamp(36px, 4vw, 52px)',
              fontWeight: 300,
              color: '#FFFDF5',
              animation: 'animationIn 0.7s cubic-bezier(0.16,1,0.3,1) both',
            }}
          >
            {t('medtech_building.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={feature.id}
                className="p-8 rounded-card animate-on-scroll"
                style={{
                  background: 'rgba(245,233,160,0.06)',
                  border: '1px solid rgba(245,233,160,0.12)',
                  animation: `animationIn 0.7s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.12}s both`,
                  transition: 'border-color 0.25s ease, background 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(245,233,160,0.3)';
                  (e.currentTarget as HTMLDivElement).style.background = 'rgba(245,233,160,0.1)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(245,233,160,0.12)';
                  (e.currentTarget as HTMLDivElement).style.background = 'rgba(245,233,160,0.06)';
                }}
              >
                <div
                  className="w-12 h-12 rounded-btn flex items-center justify-center mb-6"
                  style={{ background: 'rgba(245,233,160,0.15)' }}
                >
                  <Icon
                    name={featureIcons[feature.id] as 'HeartIcon'}
                    size={24}
                    variant="outline"
                    className=""
                    style={{ color: 'var(--color-primary)' } as React.CSSProperties}
                  />
                </div>
                <h3
                  className="font-display mb-3"
                  style={{
                    fontSize: '22px',
                    fontWeight: 400,
                    color: '#FFFDF5',
                  }}
                >
                  {feature.headline}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,253,245,0.55)' }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <section
        style={{
          background: 'var(--color-dark)',
          padding: 'var(--section-padding) 0',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: '1100px' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div
              className="animate-on-scroll"
              style={{
                animation: 'animationIn 0.8s cubic-bezier(0.16,1,0.3,1) both',
              }}
            >
              <div
                className="img-zoom rounded-card overflow-hidden"
                style={{
                  height: '460px',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_184eebf13-1772086857417.png"
                  alt="Dr. Ana Laura Diaz, founder of DOCTI, smiling in a clinical coat in a modern medical office"
                  width={600}
                  height={460}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bio */}
            <div
              className="animate-on-scroll"
              style={{
                animation: 'animationIn 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s both',
              }}
            >
              <span
                className="text-xs font-semibold uppercase tracking-widest mb-6 block"
                style={{
                  color: 'var(--color-accent)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {t('medtech_founder.label')}
              </span>

              <h2
                className="font-display mb-2"
                style={{
                  fontSize: 'clamp(32px, 3.5vw, 44px)',
                  fontWeight: 400,
                  color: '#FFFDF5',
                }}
              >
                {t('medtech_founder.name')}
              </h2>

              <p
                className="text-sm mb-8"
                style={{
                  color: 'var(--color-muted)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {t('medtech_founder.credentials')}
              </p>

              <p
                className="text-base leading-relaxed mb-10"
                style={{
                  color: 'rgba(255,253,245,0.65)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {t('medtech_founder.bio')}
              </p>

              {/* Stats row */}
              <div
                className="flex gap-8 pb-10 mb-10"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
              >
                {[
                  { num: '8+', label: 'años de experiencia' },
                  { num: '1,200+', label: 'pacientes atendidos' },
                  { num: '3', label: 'publicaciones clínicas' },
                ].map((stat) => (
                  <div key={stat.num}>
                    <p
                      className="font-display text-2xl"
                      style={{ color: 'var(--color-primary)', fontWeight: 400 }}
                    >
                      {stat.num}
                    </p>
                    <p
                      className="text-xs mt-1"
                      style={{
                        color: 'var(--color-muted)',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href={t('medtech_founder.linkedin')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                style={{ color: 'var(--color-primary)' }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-accent)')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-primary)')
                }
              >
                <Icon name="LinkIcon" size={16} variant="outline" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA / CONTACT ── */}
      <section
        style={{
          background: 'var(--color-dark-surface)',
          padding: 'var(--section-padding) 0',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div
          className="mx-auto px-6 text-center animate-on-scroll"
          style={{
            maxWidth: '1100px',
            animation: 'animationIn 0.7s cubic-bezier(0.16,1,0.3,1) both',
          }}
        >
          <h2
            className="font-display mb-4"
            style={{
              fontSize: 'clamp(36px, 5vw, 60px)',
              fontWeight: 300,
              color: '#FFFDF5',
            }}
          >
            {t('medtech_cta.headline')}
          </h2>
          <p
            className="text-lg mb-12"
            style={{
              color: 'rgba(255,253,245,0.55)',
              maxWidth: '480px',
              margin: '0 auto 3rem',
            }}
          >
            {t('medtech_cta.sub')}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:hola@nataltech.io"
              className="inline-flex items-center gap-2 px-10 py-4 text-sm font-semibold transition-all"
              style={{
                background: 'var(--color-accent)',
                borderRadius: 'var(--radius-pill)',
                color: 'white',
                fontFamily: 'var(--font-body)',
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.background = '#d4926a')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-accent)')
              }
            >
              {t('medtech_cta.email_btn')}
              <Icon name="EnvelopeIcon" size={16} variant="outline" />
            </a>
            <button
              className="inline-flex items-center gap-2 px-10 py-4 text-sm font-semibold transition-all"
              style={{
                border: '1.5px solid rgba(255,253,245,0.2)',
                borderRadius: 'var(--radius-pill)',
                color: 'rgba(255,253,245,0.8)',
                background: 'transparent',
                fontFamily: 'var(--font-body)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,253,245,0.5)';
                (e.currentTarget as HTMLButtonElement).style.color = '#FFFDF5';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,253,245,0.2)';
                (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,253,245,0.8)';
              }}
            >
              {t('medtech_cta.deck_btn')}
              <Icon name="ArrowDownTrayIcon" size={16} variant="outline" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
