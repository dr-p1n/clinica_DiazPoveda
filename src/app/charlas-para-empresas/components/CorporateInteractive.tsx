'use client';

import { useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import { useTranslation } from '@/context/LanguageContext';

interface Package {
  id: string;
  name: string;
  desc: string;
  features: string[];
  featured: boolean;
}

const MAILTO = 'mailto:dranalauradiaz@gmail.com?subject=Cotización%20para%20charla%20empresarial';

export default function CorporateInteractive() {
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
      { threshold: 0.08, rootMargin: '0px 0px -4% 0px' }
    );
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const packages = tObj('corporate.packages') as Package[];
  const topics = tObj('corporate.topics') as string[];
  const extras = tObj('corporate.extras') as string[];

  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          background: 'var(--color-bg)',
          paddingTop: '130px',
          paddingBottom: '72px',
        }}
      >
        <div
          className="mx-auto px-6 text-center animate-on-scroll"
          style={{
            maxWidth: '720px',
            animation: 'animationIn 0.7s cubic-bezier(0.16,1,0.3,1) both',
          }}
        >
          <h1
            className="font-display mb-6"
            style={{
              fontSize: 'clamp(36px, 6vw, 64px)',
              fontWeight: 300,
              color: 'var(--color-text)',
              lineHeight: 1.1,
            }}
          >
            {t('corporate.title')}
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{
              color: 'var(--color-muted)',
              fontFamily: 'var(--font-body)',
              maxWidth: '580px',
              margin: '0 auto',
            }}
          >
            {t('corporate.subtitle')}
          </p>
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section style={{ background: 'var(--color-surface)', padding: 'var(--section-padding) 0' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '1100px' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packages.map((pkg, i) => (
              <div
                key={pkg.id}
                className="relative flex flex-col animate-on-scroll"
                style={{
                  background: pkg.featured ? 'var(--color-primary)' : 'var(--color-bg)',
                  border: pkg.featured
                    ? '2px solid var(--color-accent)'
                    : '1px solid rgba(0,0,0,0.07)',
                  borderRadius: '20px',
                  padding: '32px',
                  animation: `animationIn 0.7s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.1}s both`,
                }}
              >
                {pkg.featured && (
                  <span
                    className="absolute -top-3.5 left-6 text-xs font-semibold uppercase px-4 py-1.5 rounded-pill"
                    style={{
                      background: 'var(--color-accent)',
                      color: '#fff',
                      letterSpacing: '0.08em',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {t('corporate.featured_label')}
                  </span>
                )}

                <h3
                  className="font-display mb-3"
                  style={{ fontSize: '24px', fontWeight: 400, color: 'var(--color-text)' }}
                >
                  {pkg.name}
                </h3>

                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
                >
                  {pkg.desc}
                </p>

                <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm"
                      style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}
                    >
                      <span
                        style={{ color: 'var(--color-accent)', marginTop: '3px', flexShrink: 0 }}
                      >
                        ✦
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={MAILTO}
                  className="inline-flex items-center justify-center gap-2 py-3 text-sm font-semibold transition-all"
                  style={{
                    background: pkg.featured ? 'var(--color-accent)' : 'transparent',
                    border: pkg.featured ? 'none' : '2px solid var(--color-accent)',
                    color: pkg.featured ? '#fff' : 'var(--color-accent)',
                    borderRadius: 'var(--radius-pill)',
                    fontFamily: 'var(--font-body)',
                    textDecoration: 'none',
                  }}
                >
                  {t('corporate.package_btn')}
                  <Icon name="ArrowRightIcon" size={15} variant="outline" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOPICS ── */}
      <section style={{ background: 'var(--color-bg)', padding: 'var(--section-padding) 0' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '1100px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Topics */}
            <div
              className="animate-on-scroll"
              style={{ animation: 'animationIn 0.7s cubic-bezier(0.16,1,0.3,1) both' }}
            >
              <h2
                className="font-display mb-8"
                style={{
                  fontSize: 'clamp(26px, 4vw, 40px)',
                  fontWeight: 300,
                  color: 'var(--color-text)',
                }}
              >
                {t('corporate.topics_title')}
              </h2>
              <ul className="flex flex-col gap-3 mb-6">
                {topics.map((topic) => (
                  <li
                    key={topic}
                    className="flex items-start gap-3 text-base"
                    style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}
                  >
                    <span
                      className="mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs"
                      style={{ background: 'var(--color-primary)', color: 'var(--color-accent)' }}
                    >
                      ✦
                    </span>
                    {topic}
                  </li>
                ))}
              </ul>
              <p
                className="text-sm italic"
                style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
              >
                {t('corporate.topics_note')}
              </p>
            </div>

            {/* Extras */}
            <div
              className="animate-on-scroll"
              style={{
                animation: 'animationIn 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s both',
                background: 'var(--color-surface)',
                borderRadius: '20px',
                padding: '32px',
              }}
            >
              <h2
                className="font-display mb-8"
                style={{
                  fontSize: 'clamp(26px, 4vw, 40px)',
                  fontWeight: 300,
                  color: 'var(--color-text)',
                }}
              >
                {t('corporate.extras_title')}
              </h2>
              <ul className="flex flex-col gap-4">
                {extras.map((extra) => (
                  <li
                    key={extra}
                    className="flex items-start gap-3 text-base"
                    style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}
                  >
                    <span
                      className="mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs"
                      style={{ background: 'var(--color-primary)', color: 'var(--color-accent)' }}
                    >
                      ✦
                    </span>
                    {extra}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ background: 'var(--color-primary)', padding: 'var(--section-padding) 0' }}>
        <div
          className="mx-auto px-6 text-center animate-on-scroll"
          style={{
            maxWidth: '1100px',
            animation: 'animationIn 0.7s cubic-bezier(0.16,1,0.3,1) both',
          }}
        >
          <h2
            className="font-display mb-10"
            style={{
              fontSize: 'clamp(28px, 5vw, 56px)',
              fontWeight: 300,
              color: 'var(--color-text)',
            }}
          >
            {t('corporate.cta_title')}
          </h2>
          <a
            href={MAILTO}
            className="inline-flex items-center gap-2 px-10 py-4 text-base font-semibold text-white transition-all"
            style={{
              background: 'var(--color-accent)',
              borderRadius: 'var(--radius-pill)',
              fontFamily: 'var(--font-body)',
              textDecoration: 'none',
            }}
          >
            {t('corporate.cta_btn')}
            <Icon name="ArrowRightIcon" size={18} variant="outline" />
          </a>
        </div>
      </section>
    </>
  );
}
