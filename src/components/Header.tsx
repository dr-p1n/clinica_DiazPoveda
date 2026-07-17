'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from '@/context/LanguageContext';
import Icon from '@/components/ui/AppIcon';

export default function Header() {
  const pathname = usePathname();
  const { t, lang, setLang } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bookOpen, setBookOpen] = useState(false);

  const navLinks = [
    { href: '/iv-therapy-services', labelKey: 'nav.iv' },
    { href: '/med-tech-startup', labelKey: 'nav.medtech' },
    { href: '/education', labelKey: 'nav.education' },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: 'rgba(255,253,245,0.88)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}
      >
        <div className="mx-auto" style={{ maxWidth: '1100px' }}>
          <div className="flex items-center justify-between px-6 pt-3 pb-1">
            {/* Logo */}
            <Link href="/iv-therapy-services" className="flex flex-col min-w-0 flex-shrink">
              <Image
                src="/assets/images/app_logo.svg"
                alt="Dra. Ana Laura Díaz Poveda"
                width={430}
                height={80}
                unoptimized
                priority
                style={{ width: '100%', height: 'auto', maxWidth: '320px' }}
              />
              {/* Contact info: mobile only */}
              <div
                className="flex flex-col md:hidden"
                style={{
                  paddingLeft: '27.5%',
                  marginTop: '-10px',
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  fontSize: '9px',
                  color: '#D4845A',
                  lineHeight: '1.5',
                }}
              >
                <span>Consultorios Punta Pacífica. Piso 8. #820</span>
                <span>+507 6612-2773 | dranalauradiaz@gmail.com</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? 'text-text-main active'
                      : 'text-muted hover:text-text-main'
                  }`}
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {t(link.labelKey)}
                </Link>
              ))}
            </nav>

            {/* Right: CTA */}
            <div className="hidden md:flex items-center gap-3">
              {/* Language toggle */}
              <button
                onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
                className="text-sm font-medium px-3 py-1.5 rounded-full transition-all"
                style={{
                  border: '1.5px solid rgba(0,0,0,0.12)',
                  color: 'var(--color-muted)',
                  fontFamily: 'var(--font-body)',
                  letterSpacing: '0.05em',
                }}
              >
                {lang === 'es' ? 'EN' : 'ES'}
              </button>

              {/* Book CTA */}
              <button
                onClick={() => setBookOpen(true)}
                className="px-5 py-2.5 text-sm font-semibold text-white transition-all"
                style={{
                  background: 'var(--color-accent)',
                  borderRadius: 'var(--radius-pill)',
                  fontFamily: 'var(--font-body)',
                  letterSpacing: '0.02em',
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
                {t('nav.book')}
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              style={{ color: 'var(--color-text)' }}
            >
              <Icon name={mobileOpen ? 'XMarkIcon' : 'Bars3Icon'} size={22} variant="outline" />
            </button>
          </div>
          {/* end main flex row */}

          {/* Contact info row: desktop only — paddingLeft = px-6 (24px) + name offset (77px) */}
          <div
            className="hidden md:block pb-2"
            style={{
              paddingLeft: '101px',
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: '11.5px',
              color: '#D4845A',
              lineHeight: '1.5',
            }}
          >
            <div>Consultorios Punta Pacífica. Piso 8. #820</div>
            <div>+507 6612-2773 | dranalauradiaz@gmail.com</div>
          </div>
        </div>
        {/* end maxWidth wrapper */}

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
            style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-base font-medium py-2 ${
                  pathname === link.href ? 'text-text-main' : 'text-muted'
                }`}
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {t(link.labelKey)}
              </Link>
            ))}

            {/* Mobile language toggle */}
            <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="text-sm font-medium py-2"
              style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
            >
              {lang === 'es' ? '🌐 English' : '🌐 Español'}
            </button>

            {/* Mobile book */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  setBookOpen(true);
                }}
                className="flex-1 py-2.5 text-sm font-semibold text-white text-center"
                style={{
                  background: 'var(--color-accent)',
                  borderRadius: 'var(--radius-pill)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {t('nav.book')}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Booking Modal (mock — no real API) */}
      {bookOpen && <BookingModal onClose={() => setBookOpen(false)} />}
    </>
  );
}

/* ─────────────────────────────────────────────
   Booking Modal — 3-step mock flow
   Backend connection point: POST /api/book
───────────────────────────────────────────── */
function BookingModal({ onClose }: { onClose: () => void }) {
  const { t, tObj, lang } = useTranslation();
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
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

  // Generate next 7 weekdays
  const getWeekdays = () => {
    const days: { date: Date; label: string; key: string }[] = [];
    const d = new Date('2026-03-05');
    while (days.length < 7) {
      d.setDate(d.getDate() + 1);
      if (d.getDay() !== 0 && d.getDay() !== 6) {
        days.push({
          date: new Date(d),
          label: d.toLocaleDateString(lang === 'es' ? 'es-PA' : 'en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
          }),
          key: d.toISOString().split('T')[0],
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
    // Body: { service: selectedService, date: selectedDate, time: selectedTime, name, phone, notes }
    setSubmitted(true);
  };

  const formatSuccess = (tpl: string) =>
    tpl.replace('{date}', selectedDate).replace('{time}', selectedTime);

  return (
    <div className="modal-backdrop" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div
        className="relative w-full mx-4 overflow-hidden"
        style={{
          maxWidth: '540px',
          background: 'var(--color-bg)',
          borderRadius: '20px',
          border: '1px solid rgba(0,0,0,0.08)',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-8 py-6"
          style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}
        >
          <h2 className="text-xl font-display font-medium" style={{ color: 'var(--color-text)' }}>
            {t('booking.title')}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full transition-colors"
            style={{ color: 'var(--color-muted)' }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(0,0,0,0.05)')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.background = 'transparent')
            }
            aria-label={t('booking.close')}
          >
            <Icon name="XMarkIcon" size={20} variant="outline" />
          </button>
        </div>

        {/* Step dots */}
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
            /* Success state */
            <div className="text-center py-8 flex flex-col items-center gap-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(232, 168, 124, 0.15)' }}
              >
                <Icon name="CheckCircleIcon" size={36} variant="solid" className="text-accent" />
              </div>
              <p
                className="text-lg font-display font-medium"
                style={{ color: 'var(--color-text)' }}
              >
                {formatSuccess(t('booking.success'))}
              </p>
              <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
                {t('booking.success_sub')}
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-8 py-3 text-sm font-semibold text-white"
                style={{
                  background: 'var(--color-accent)',
                  borderRadius: 'var(--radius-pill)',
                }}
              >
                {t('booking.close')}
              </button>
            </div>
          ) : step === 1 ? (
            /* Step 1: Select service */
            <div className="flex flex-col gap-4">
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-2"
                style={{ color: 'var(--color-muted)', letterSpacing: '0.1em' }}
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
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="font-semibold text-sm"
                          style={{ color: 'var(--color-text)' }}
                        >
                          {svc.name}
                        </span>
                        <span
                          className="text-xs px-2 py-0.5 rounded-pill"
                          style={{
                            background: 'var(--color-primary)',
                            color: 'var(--color-text)',
                          }}
                        >
                          {svc.duration}
                        </span>
                      </div>
                      <p
                        className="text-xs leading-relaxed"
                        style={{ color: 'var(--color-muted)' }}
                      >
                        {svc.desc}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <span
                        className="font-semibold text-sm"
                        style={{ color: 'var(--color-accent)' }}
                      >
                        {svc.price}
                      </span>
                      {selectedService === svc.id && (
                        <Icon
                          name="CheckCircleIcon"
                          size={18}
                          variant="solid"
                          className="text-accent"
                        />
                      )}
                    </div>
                  </div>
                </button>
              ))}
              <button
                onClick={() => selectedService && setStep(2)}
                disabled={!selectedService}
                className="mt-2 w-full py-3 text-sm font-semibold text-white transition-all"
                style={{
                  background: selectedService ? 'var(--color-accent)' : 'var(--color-muted)',
                  borderRadius: 'var(--radius-pill)',
                  cursor: selectedService ? 'pointer' : 'not-allowed',
                }}
              >
                {t('booking.next')}
              </button>
            </div>
          ) : step === 2 ? (
            /* Step 2: Date + Time */
            <div className="flex flex-col gap-5">
              <p
                className="text-sm font-semibold uppercase tracking-widest"
                style={{ color: 'var(--color-muted)', letterSpacing: '0.1em' }}
              >
                {t('booking.step2')}
              </p>

              {/* Date selection */}
              <div>
                <p className="text-xs font-medium mb-3" style={{ color: 'var(--color-muted)' }}>
                  {t('booking.select_date')}
                </p>
                <div className="flex flex-wrap gap-2">
                  {weekdays.map((d) => (
                    <button
                      key={d.key}
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

              {/* Time slots */}
              {selectedDate && (
                <div>
                  <p className="text-xs font-medium mb-3" style={{ color: 'var(--color-muted)' }}>
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
                          cursor: !slot.available ? 'not-allowed' : 'pointer',
                          textDecoration: !slot.available ? 'line-through' : 'none',
                        }}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-3 mt-2">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 py-3 text-sm font-semibold transition-all"
                  style={{
                    border: '1.5px solid rgba(0,0,0,0.1)',
                    borderRadius: 'var(--radius-pill)',
                    color: 'var(--color-muted)',
                    background: 'transparent',
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
                    cursor: selectedDate && selectedTime ? 'pointer' : 'not-allowed',
                  }}
                >
                  {t('booking.next')}
                </button>
              </div>
            </div>
          ) : (
            /* Step 3: Patient details */
            <div className="flex flex-col gap-4">
              <p
                className="text-sm font-semibold uppercase tracking-widest"
                style={{ color: 'var(--color-muted)', letterSpacing: '0.1em' }}
              >
                {t('booking.step3')}
              </p>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium" style={{ color: 'var(--color-muted)' }}>
                  {t('booking.name_label')}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t('booking.name_placeholder')}
                  className="w-full px-4 py-3 text-sm rounded-btn outline-none transition-colors"
                  style={{
                    background: 'var(--color-surface)',
                    border: '1.5px solid rgba(0,0,0,0.08)',
                    color: 'var(--color-text)',
                    fontFamily: 'var(--font-body)',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)')}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium" style={{ color: 'var(--color-muted)' }}>
                  {t('booking.phone_label')}
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t('booking.phone_placeholder')}
                  className="w-full px-4 py-3 text-sm rounded-btn outline-none transition-colors"
                  style={{
                    background: 'var(--color-surface)',
                    border: '1.5px solid rgba(0,0,0,0.08)',
                    color: 'var(--color-text)',
                    fontFamily: 'var(--font-body)',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)')}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium" style={{ color: 'var(--color-muted)' }}>
                  {t('booking.notes_label')}
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={t('booking.notes_placeholder')}
                  rows={3}
                  className="w-full px-4 py-3 text-sm rounded-btn outline-none transition-colors resize-none"
                  style={{
                    background: 'var(--color-surface)',
                    border: '1.5px solid rgba(0,0,0,0.08)',
                    color: 'var(--color-text)',
                    fontFamily: 'var(--font-body)',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)')}
                />
              </div>

              {/* Booking summary */}
              <div
                className="p-4 rounded-card text-sm"
                style={{
                  background: 'rgba(245,233,160,0.3)',
                  border: '1px solid rgba(245,233,160,0.6)',
                }}
              >
                <p style={{ color: 'var(--color-text)' }}>
                  <strong>{services.find((s) => s.id === selectedService)?.name}</strong> ·{' '}
                  {selectedDate} · {selectedTime}
                </p>
              </div>

              <div className="flex gap-3 mt-1">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 py-3 text-sm font-semibold"
                  style={{
                    border: '1.5px solid rgba(0,0,0,0.1)',
                    borderRadius: 'var(--radius-pill)',
                    color: 'var(--color-muted)',
                    background: 'transparent',
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
                    cursor: name && phone ? 'pointer' : 'not-allowed',
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
