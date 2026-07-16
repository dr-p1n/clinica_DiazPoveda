'use client';

import { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { useTranslation } from '@/context/LanguageContext';

export default function IVTherapyInteractive() {
  const { t, tObj, lang } = useTranslation();
  const [bookOpen, setBookOpen] = useState(false);
  const animRefs = useRef<HTMLElement[]>([]);

  // Intersection Observer for scroll animations
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

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const services = tObj('services') as Array<{
    id: string;
    name: string;
    desc: string;
    price: string;
    duration: string;
  }>;

  const steps = tObj('how_it_works.steps') as Array<{
    num: string;
    label: string;
    desc: string;
  }>;

  const trustItems = tObj('trust.items') as string[];

  const serviceIcons: Record<string, string> = {
    general: 'HeartIcon',
    certificates: 'DocumentTextIcon',
    chronic: 'ClipboardDocumentListIcon',
    labs: 'BeakerIcon',
  };

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative lg:min-h-screen flex items-start lg:items-center overflow-hidden"
        style={{
          background: 'var(--color-bg)',
          paddingTop: '80px',
        }}
      >
        {/* Decorative blob */}
        <div
          className="blob absolute bottom-0 right-0 w-96 h-96 opacity-60 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse, #F5E9A0 0%, rgba(245,233,160,0.3) 60%, transparent 100%)',
            borderRadius: '60% 40% 70% 30% / 50% 60% 40% 70%',
            transform: 'translate(30%, 20%)',
          }}
        />

        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(168,159,140,0.1) 1px, transparent 1px)',
            backgroundSize: '220px 100%',
          }}
        />

        <div className="mx-auto px-6 w-full relative z-10" style={{ maxWidth: '1100px' }}>
          <div className="grid grid-cols-2 gap-3 lg:gap-16 items-start lg:items-center pt-10 pb-4 lg:py-10">
            {/* Left: text */}
            <div>
              {/* Floating trust badges — desktop only */}
              <div
                className="hidden lg:flex flex-wrap justify-start gap-2 mb-8 animate-on-scroll"
                style={{
                  animation: 'animationIn 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s both',
                }}
              >
                {[t('iv_hero.badge1'), t('iv_hero.badge2'), t('iv_hero.badge3')].map((badge, i) => (
                  <span
                    key={badge}
                    className="text-xs font-semibold uppercase px-3 py-1.5 rounded-pill float-anim"
                    style={{
                      background: 'var(--color-primary)',
                      color: 'var(--color-text)',
                      letterSpacing: '0.08em',
                      fontFamily: 'var(--font-body)',
                      animationDelay: `${0.1 + i * 0.15}s`,
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <h1
                className="font-display mb-2 lg:mb-6 leading-tight"
                style={{
                  fontSize: 'clamp(22px, 6vw, 72px)',
                  fontWeight: 300,
                  color: 'var(--color-text)',
                  animation: 'animationIn 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s both',
                }}
              >
                {t('iv_hero.headline')
                  .split(', ')
                  .map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 ? ',' : ''}
                      <br />
                    </span>
                  ))}
              </h1>

              <p
                className="hidden lg:block mb-5 lg:mb-10 leading-relaxed"
                style={{
                  fontSize: 'clamp(14px, 4vw, 18px)',
                  color: 'var(--color-muted)',
                  fontFamily: 'var(--font-body)',
                  animation: 'animationIn 0.7s cubic-bezier(0.16,1,0.3,1) 0.35s both',
                  maxWidth: '480px',
                }}
              >
                {t('iv_hero.subline')}
              </p>

              <div
                style={{
                  animation: 'animationIn 0.7s cubic-bezier(0.16,1,0.3,1) 0.5s both',
                }}
              >
                <button
                  onClick={() => setBookOpen(true)}
                  className="inline-flex items-center gap-2 px-4 lg:px-8 py-2.5 lg:py-4 text-sm lg:text-base font-semibold text-white transition-all"
                  style={{
                    background: 'var(--color-accent)',
                    borderRadius: 'var(--radius-pill)',
                    fontFamily: 'var(--font-body)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.02)';
                    (e.currentTarget as HTMLButtonElement).style.background = '#d4926a';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
                    (e.currentTarget as HTMLButtonElement).style.background = 'var(--color-accent)';
                  }}
                >
                  {t('iv_hero.cta')}
                  <Icon name="ArrowRightIcon" size={18} variant="outline" />
                </button>
              </div>
            </div>

            {/* Right: image with floating card */}
            <div
              className="relative"
              style={{
                animation: 'animationIn 0.9s cubic-bezier(0.16,1,0.3,1) 0.4s both',
              }}
            >
              <div
                className="img-zoom rounded-card overflow-hidden"
                style={{ height: 'clamp(240px, 55vw, 650px)' }}
              >
                <AppImage
                  src="/assets/images/foto-dra.jpg"
                  alt="Dra. Ana Laura Díaz Poveda, Medicina General, Panamá"
                  width={600}
                  height={650}
                  className="w-full h-full"
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  priority
                />
              </div>

              {/* Floating stats card */}
              {/* Floating badge top-right — desktop only */}
              <div
                className="hidden lg:block absolute -top-4 -right-4 px-4 py-2 rounded-pill float-anim"
                style={{
                  background: 'var(--color-accent)',
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: 600,
                  fontFamily: 'var(--font-body)',
                  letterSpacing: '0.05em',
                  animationDelay: '1s',
                  boxShadow: '0 6px 20px rgba(232,168,124,0.35)',
                }}
              >
                ✦ Panamá
              </div>
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
              background: 'linear-gradient(to bottom, var(--color-accent), transparent)',
            }}
          />
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section
        style={{
          background: 'var(--color-bg)',
          padding: '48px 0 var(--section-padding)',
        }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: '1100px' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <div
                key={svc.id}
                className="service-card p-6 flex flex-col gap-4 animate-on-scroll"
                style={{
                  animation: `animationIn 0.7s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.1}s both`,
                }}
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-btn flex items-center justify-center"
                  style={{ background: 'var(--color-primary)' }}
                >
                  <Icon
                    name={serviceIcons[svc.id] as 'BeakerIcon'}
                    size={22}
                    variant="outline"
                    className="text-text-main"
                  />
                </div>

                <div className="flex-1">
                  <h3
                    className="font-display mb-2"
                    style={{ fontSize: '20px', fontWeight: 400, color: 'var(--color-text)' }}
                  >
                    {svc.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                    {svc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section
        style={{
          background: 'var(--color-surface)',
          padding: 'var(--section-padding) 0',
          borderTop: '1px solid rgba(0,0,0,0.04)',
          borderBottom: '1px solid rgba(0,0,0,0.04)',
        }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: '1100px' }}>
          <h2
            className="font-display text-center mb-20 animate-on-scroll"
            style={{
              fontSize: 'clamp(36px, 4vw, 52px)',
              fontWeight: 300,
              color: 'var(--color-text)',
              animation: 'animationIn 0.7s cubic-bezier(0.16,1,0.3,1) both',
            }}
          >
            {t('how_it_works.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line (desktop) */}
            <div
              className="absolute top-10 left-1/6 right-1/6 h-px hidden md:block"
              style={{
                background:
                  'linear-gradient(to right, transparent, var(--color-primary), var(--color-primary), transparent)',
                top: '32px',
              }}
            />

            {steps.map((step, i) => (
              <div
                key={step.num}
                className="flex flex-col items-center text-center gap-6 animate-on-scroll"
                style={{
                  animation: `animationIn 0.7s cubic-bezier(0.16,1,0.3,1) ${0.15 + i * 0.15}s both`,
                }}
              >
                {/* Number circle */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center relative z-10"
                  style={{ background: 'var(--color-primary)' }}
                >
                  <span
                    className="font-display"
                    style={{
                      fontSize: '22px',
                      fontWeight: 400,
                      color: 'var(--color-text)',
                    }}
                  >
                    {step.num}
                  </span>
                </div>

                <div>
                  <h3
                    className="font-display mb-2"
                    style={{
                      fontSize: '24px',
                      fontWeight: 400,
                      color: 'var(--color-text)',
                    }}
                  >
                    {step.label}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: 'var(--color-muted)',
                      maxWidth: '240px',
                      margin: '0 auto',
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section
        style={{
          background: 'var(--color-bg)',
          padding: '48px 0',
          overflow: 'hidden',
        }}
      >
        {/* Ticker */}
        <div className="flex overflow-hidden">
          <div className="ticker-anim flex items-center gap-6 whitespace-nowrap">
            {[...trustItems, ...trustItems, ...trustItems, ...trustItems].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="flex items-center gap-3 text-sm font-medium px-4 py-2 rounded-pill shrink-0"
                style={{
                  background: 'var(--color-primary)',
                  color: 'var(--color-text)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                <span style={{ color: 'var(--color-accent)' }}>✦</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BLOCK ── */}
      <section
        style={{
          background: 'var(--color-primary)',
          padding: 'var(--section-padding) 0',
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
              color: 'var(--color-text)',
            }}
          >
            {t('cta_block.headline')}
          </h2>
          <p className="mb-10 text-lg" style={{ color: 'var(--color-muted)' }}>
            {t('cta_block.sub')}
          </p>
          <button
            onClick={() => setBookOpen(true)}
            className="inline-flex items-center gap-2 px-10 py-4 text-base font-semibold text-white transition-all"
            style={{
              background: 'var(--color-accent)',
              borderRadius: 'var(--radius-pill)',
              fontFamily: 'var(--font-body)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.02)';
              (e.currentTarget as HTMLButtonElement).style.background = '#d4926a';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
              (e.currentTarget as HTMLButtonElement).style.background = 'var(--color-accent)';
            }}
          >
            {t('cta_block.btn')}
            <Icon name="CalendarDaysIcon" size={18} variant="outline" />
          </button>
        </div>
      </section>

      {/* Booking Modal */}
      {bookOpen && <InlineBookingModal onClose={() => setBookOpen(false)} t={t} tObj={tObj} />}
    </>
  );
}

/* ─────────────────────────────────────────────
   Inline Booking Modal for IV page
   Reuses same 3-step pattern from Header
───────────────────────────────────────────── */
function InlineBookingModal({
  onClose,
  t,
  tObj,
}: {
  onClose: () => void;
  t: (key: string) => string; // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tObj: (key: string) => any;
}) {
  const { lang } = useTranslation();
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const services = tObj('services') as Array<{
    id: string;
    name: string;
    desc: string;
    price: string;
    duration: string;
  }>;

  const getWeekdays = () => {
    const days: { label: string }[] = [];
    const d = new Date('2026-03-05');
    while (days.length < 7) {
      d.setDate(d.getDate() + 1);
      if (d.getDay() !== 0 && d.getDay() !== 6) {
        days.push({
          label: d.toLocaleDateString(lang === 'es' ? 'es-PA' : 'en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
          }),
        });
      }
    }
    return days;
  };

  const timeSlots = [
    { time: '08:00', available: true },
    { time: '09:00', available: true },
    { time: '10:00', available: false },
    { time: '11:00', available: true },
    { time: '14:00', available: true },
    { time: '15:00', available: false },
    { time: '16:00', available: true },
    { time: '17:00', available: true },
  ];

  const weekdays = getWeekdays();

  const handleSubmit = () => {
    // TODO: Connect to POST /api/book with Google Calendar API
    setSubmitted(true);
  };

  return (
    <div className="modal-backdrop" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div
        className="relative w-full mx-4 overflow-hidden"
        style={{
          maxWidth: '520px',
          background: 'var(--color-bg)',
          borderRadius: '20px',
          border: '1px solid rgba(0,0,0,0.08)',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >
        <div
          className="flex items-center justify-between px-8 py-5"
          style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}
        >
          <h2 className="text-xl font-display font-medium" style={{ color: 'var(--color-text)' }}>
            {t('booking.title')}
          </h2>
          <button
            onClick={onClose}
            style={{ color: 'var(--color-muted)' }}
            className="p-2 rounded-full"
            aria-label={t('booking.close')}
          >
            <Icon name="XMarkIcon" size={20} variant="outline" />
          </button>
        </div>

        {!submitted && (
          <div className="flex items-center justify-center gap-2 py-4">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`step-dot ${step === s ? 'active' : step > s ? 'done' : ''}`}
              />
            ))}
          </div>
        )}

        <div className="px-8 pb-8">
          {submitted ? (
            <div className="text-center py-8 flex flex-col items-center gap-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(232,168,124,0.15)' }}
              >
                <Icon name="CheckCircleIcon" size={36} variant="solid" className="text-accent" />
              </div>
              <p className="text-lg font-display" style={{ color: 'var(--color-text)' }}>
                {t('booking.success')
                  .replace('{date}', selectedDate)
                  .replace('{time}', selectedTime)}
              </p>
              <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
                {t('booking.success_sub')}
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-8 py-3 text-sm font-semibold text-white"
                style={{
                  background: 'var(--color-accent)',
                  borderRadius: 'var(--radius-pill)',
                }}
              >
                {t('booking.close')}
              </button>
            </div>
          ) : step === 1 ? (
            <div className="flex flex-col gap-3">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: 'var(--color-muted)' }}
              >
                {t('booking.step1')}
              </p>
              {services.map((svc) => (
                <button
                  key={svc.id}
                  onClick={() => setSelectedService(svc.id)}
                  className="w-full text-left p-4 rounded-card transition-all"
                  style={{
                    border: `2px solid ${
                      selectedService === svc.id ? 'var(--color-accent)' : 'rgba(0,0,0,0.08)'
                    }`,

                    background:
                      selectedService === svc.id
                        ? 'rgba(232,168,124,0.07)'
                        : 'var(--color-surface)',
                  }}
                >
                  <div className="flex justify-between items-start gap-3">
                    <div>
                      <span
                        className="font-semibold text-sm block mb-1"
                        style={{ color: 'var(--color-text)' }}
                      >
                        {svc.name}
                      </span>
                      <span className="text-xs" style={{ color: 'var(--color-muted)' }}>
                        {svc.duration}
                      </span>
                    </div>
                    <span
                      className="font-semibold text-sm shrink-0"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      {svc.price}
                    </span>
                  </div>
                </button>
              ))}
              <button
                onClick={() => selectedService && setStep(2)}
                disabled={!selectedService}
                className="mt-2 w-full py-3 text-sm font-semibold text-white"
                style={{
                  background: selectedService ? 'var(--color-accent)' : 'var(--color-muted)',
                  borderRadius: 'var(--radius-pill)',
                }}
              >
                {t('booking.next')}
              </button>
            </div>
          ) : step === 2 ? (
            <div className="flex flex-col gap-5">
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: 'var(--color-muted)' }}
              >
                {t('booking.step2')}
              </p>
              <div>
                <p className="text-xs mb-3" style={{ color: 'var(--color-muted)' }}>
                  {t('booking.select_date')}
                </p>
                <div className="flex flex-wrap gap-2">
                  {weekdays.map((d) => (
                    <button
                      key={d.label}
                      onClick={() => {
                        setSelectedDate(d.label);
                        setSelectedTime('');
                      }}
                      className="time-slot"
                      style={{
                        background:
                          selectedDate === d.label ? 'var(--color-accent)' : 'var(--color-surface)',
                        borderColor:
                          selectedDate === d.label ? 'var(--color-accent)' : 'rgba(0,0,0,0.08)',
                        color: selectedDate === d.label ? 'white' : 'var(--color-text)',
                      }}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>
              {selectedDate && (
                <div>
                  <p className="text-xs mb-3" style={{ color: 'var(--color-muted)' }}>
                    {t('booking.select_time')}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.time}
                        onClick={() => slot.available && setSelectedTime(slot.time)}
                        disabled={!slot.available}
                        className="time-slot"
                        style={{
                          background: !slot.available
                            ? '#f0ede6'
                            : selectedTime === slot.time
                              ? 'var(--color-accent)'
                              : 'var(--color-primary)',
                          borderColor: !slot.available
                            ? 'transparent'
                            : selectedTime === slot.time
                              ? 'var(--color-accent)'
                              : 'var(--color-primary)',
                          color: !slot.available
                            ? 'var(--color-muted)'
                            : selectedTime === slot.time
                              ? 'white'
                              : 'var(--color-text)',
                          cursor: slot.available ? 'pointer' : 'not-allowed',
                          textDecoration: slot.available ? 'none' : 'line-through',
                        }}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 py-3 text-sm font-semibold"
                  style={{
                    border: '1.5px solid rgba(0,0,0,0.1)',
                    borderRadius: 'var(--radius-pill)',
                    color: 'var(--color-muted)',
                  }}
                >
                  {t('booking.back')}
                </button>
                <button
                  onClick={() => selectedDate && selectedTime && setStep(3)}
                  disabled={!selectedDate || !selectedTime}
                  className="flex-1 py-3 text-sm font-semibold text-white"
                  style={{
                    background:
                      selectedDate && selectedTime ? 'var(--color-accent)' : 'var(--color-muted)',
                    borderRadius: 'var(--radius-pill)',
                  }}
                >
                  {t('booking.next')}
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: 'var(--color-muted)' }}
              >
                {t('booking.step3')}
              </p>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t('booking.name_placeholder')}
                className="w-full px-4 py-3 text-sm rounded-btn outline-none"
                style={{
                  background: 'var(--color-surface)',
                  border: '1.5px solid rgba(0,0,0,0.08)',
                  color: 'var(--color-text)',
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)')}
              />

              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t('booking.phone_placeholder')}
                className="w-full px-4 py-3 text-sm rounded-btn outline-none"
                style={{
                  background: 'var(--color-surface)',
                  border: '1.5px solid rgba(0,0,0,0.08)',
                  color: 'var(--color-text)',
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)')}
              />

              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={t('booking.notes_placeholder')}
                rows={3}
                className="w-full px-4 py-3 text-sm rounded-btn outline-none resize-none"
                style={{
                  background: 'var(--color-surface)',
                  border: '1.5px solid rgba(0,0,0,0.08)',
                  color: 'var(--color-text)',
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)')}
              />

              <div className="flex gap-3 mt-1">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 py-3 text-sm font-semibold"
                  style={{
                    border: '1.5px solid rgba(0,0,0,0.1)',
                    borderRadius: 'var(--radius-pill)',
                    color: 'var(--color-muted)',
                  }}
                >
                  {t('booking.back')}
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!name || !phone}
                  className="flex-1 py-3 text-sm font-semibold text-white"
                  style={{
                    background: name && phone ? 'var(--color-accent)' : 'var(--color-muted)',
                    borderRadius: 'var(--radius-pill)',
                  }}
                >
                  {t('booking.confirm')}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
