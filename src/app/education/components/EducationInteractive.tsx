"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/ui/AppIcon";
import { useTranslation } from "@/context/LanguageContext";

type FilterType = "all" | "parents" | "patients";

interface Article {
  id: string;
  category: string;
  category_label: string;
  title: string;
  excerpt: string;
  read_time: string;
}

export default function EducationInteractive() {
  const { t, tObj } = useTranslation();
  const [filter, setFilter] = useState<FilterType>("all");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) =>
      observer.observe(el)
    );
    return () => observer.disconnect();
  }, []);

  const articles = tObj("articles") as Article[];

  const filtered =
    filter === "all"
      ? articles
      : articles.filter((a) => a.category === filter);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to newsletter backend / email service
    if (email) setSubscribed(true);
  };

  const categoryColors: Record<string, string> = {
    parents: "var(--color-primary)",
    patients: "rgba(232,168,124,0.25)",
  };

  const categoryTextColors: Record<string, string> = {
    parents: "var(--color-text)",
    patients: "var(--color-accent)",
  };

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "var(--color-bg)",
          paddingTop: "140px",
          paddingBottom: "80px",
        }}
      >
        {/* Decorative blob */}
        <div
          className="blob absolute top-0 left-0 w-80 h-80 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, #F5E9A0 0%, rgba(245,233,160,0.2) 60%, transparent 100%)",
            borderRadius: "60% 40% 70% 30% / 50% 60% 40% 70%",
            transform: "translate(-30%, -30%)",
          }}
        />

        <div
          className="mx-auto px-6 relative z-10"
          style={{ maxWidth: "1100px" }}
        >
          <div className="max-w-2xl">
            <span
              className="text-xs font-semibold uppercase tracking-widest block mb-6"
              style={{
                color: "var(--color-muted)",
                fontFamily: "var(--font-body)",
                animation: "animationIn 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s both",
              }}
            >
              NatalTech · {t("nav.education")}
            </span>
            <h1
              className="font-display mb-6 leading-tight"
              style={{
                fontSize: "clamp(42px, 5.5vw, 68px)",
                fontWeight: 300,
                color: "var(--color-text)",
                animation:
                  "animationIn 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s both",
              }}
            >
              {t("education_hero.headline")}
            </h1>
            <p
              className="text-lg leading-relaxed"
              style={{
                color: "var(--color-muted)",
                fontFamily: "var(--font-body)",
                animation:
                  "animationIn 0.8s cubic-bezier(0.16,1,0.3,1) 0.35s both",
              }}
            >
              {t("education_hero.subline")}
            </p>
          </div>
        </div>
      </section>

      {/* ── ARTICLES ── */}
      <section
        style={{
          background: "var(--color-bg)",
          padding: "0 0 var(--section-padding)",
        }}
      >
        <div
          className="mx-auto px-6"
          style={{ maxWidth: "1100px" }}
        >
          {/* Filter pills */}
          <div
            className="flex flex-wrap gap-3 mb-12 animate-on-scroll"
            style={{
              animation: "animationIn 0.6s cubic-bezier(0.16,1,0.3,1) both",
            }}
          >
            {(
              [
                { key:"all", label: t("education_filters.all") },
                { key: "parents", label: t("education_filters.parents") },
                { key: "patients", label: t("education_filters.patients") },
              ] as { key: FilterType; label: string }[]
            ).map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`filter-pill ${filter === f.key ? "active" : ""}`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Article grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((article, i) => (
              <article
                key={article.id}
                className="article-card p-7 flex flex-col gap-4 animate-on-scroll"
                style={{
                  animation: `animationIn 0.7s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.1}s both`,
                }}
              >
                {/* Category badge + read time */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-semibold uppercase px-3 py-1.5 rounded-pill"
                    style={{
                      background:
                        categoryColors[article.category] ||
                        "var(--color-primary)",
                      color:
                        categoryTextColors[article.category] ||
                        "var(--color-text)",
                      letterSpacing: "0.08em",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {article.category_label}
                  </span>
                  <span
                    className="text-xs flex items-center gap-1.5"
                    style={{ color: "var(--color-muted)" }}
                  >
                    <Icon name="ClockIcon" size={13} variant="outline" />
                    {article.read_time}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="font-display leading-snug"
                  style={{
                    fontSize: "22px",
                    fontWeight: 400,
                    color: "var(--color-text)",
                  }}
                >
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: "var(--color-muted)" }}
                >
                  {article.excerpt}
                </p>

                {/* Read more */}
                <button
                  className="inline-flex items-center gap-2 text-sm font-semibold self-start transition-all group"
                  style={{ color: "var(--color-accent)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.gap = "10px";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.gap = "8px";
                  }}
                >
                  {t("lang") === "en" ? "Read more" : "Leer más"}
                  <Icon
                    name="ArrowRightIcon"
                    size={15}
                    variant="outline"
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED VIDEO ── */}
      <section
        style={{
          background: "var(--color-surface)",
          padding: "var(--section-padding) 0",
          borderTop: "1px solid rgba(0,0,0,0.04)",
          borderBottom: "1px solid rgba(0,0,0,0.04)",
        }}
      >
        <div
          className="mx-auto px-6"
          style={{ maxWidth: "1100px" }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4 animate-on-scroll"
            style={{
              color: "var(--color-muted)",
              letterSpacing: "0.12em",
              fontFamily: "var(--font-body)",
              animation: "animationIn 0.6s cubic-bezier(0.16,1,0.3,1) both",
            }}
          >
            {t("video_section.title")}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Video placeholder */}
            <div
              className="lg:col-span-3 animate-on-scroll"
              style={{
                animation: "animationIn 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s both",
              }}
            >
              <div
                className="relative w-full rounded-card overflow-hidden flex items-center justify-center"
                style={{
                  aspectRatio: "16/9",
                  background: "var(--color-dark)",
                  border: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                {/* YouTube embed placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center transition-all cursor-pointer"
                    style={{
                      background: "var(--color-accent)",
                      boxShadow: "0 8px 32px rgba(232,168,124,0.4)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.transform =
                        "scale(1.08)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.transform =
                        "scale(1)";
                    }}
                  >
                    <Icon
                      name="PlayIcon"
                      size={28}
                      variant="solid"
                      className="text-white"
                      style={{ marginLeft: "3px" } as React.CSSProperties}
                    />
                  </div>
                </div>
                {/* Overlay text */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-6 py-4"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(45,42,38,0.85), transparent)",
                  }}
                >
                  <p
                    className="text-sm font-medium"
                    style={{ color: "rgba(255,253,245,0.9)" }}
                  >
                    {t("video_section.video_title")}
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div
              className="lg:col-span-2 animate-on-scroll"
              style={{
                animation:
                  "animationIn 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s both",
              }}
            >
              <h2
                className="font-display mb-4 leading-snug"
                style={{
                  fontSize: "clamp(26px, 3vw, 36px)",
                  fontWeight: 400,
                  color: "var(--color-text)",
                }}
              >
                {t("video_section.video_title")}
              </h2>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "var(--color-muted)" }}
              >
                {t("video_section.video_desc")}
              </p>

              {/* Video meta */}
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full overflow-hidden border-2"
                  style={{ borderColor: "var(--color-primary)" }}
                >
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ background: "var(--color-primary)" }}
                  >
                    <Icon name="UserIcon" size={18} variant="outline" />
                  </div>
                </div>
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--color-text)" }}
                  >
                    Dra. Valentina Reyes
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--color-muted)" }}
                  >
                    Pediatría & Neonatología
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section
        style={{
          background: "var(--color-primary)",
          padding: "var(--section-padding) 0",
        }}
      >
        <div
          className="mx-auto px-6"
          style={{ maxWidth: "1100px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div
              className="animate-on-scroll"
              style={{
                animation: "animationIn 0.7s cubic-bezier(0.16,1,0.3,1) both",
              }}
            >
              <h2
                className="font-display mb-3"
                style={{
                  fontSize: "clamp(30px, 3.5vw, 44px)",
                  fontWeight: 300,
                  color: "var(--color-text)",
                }}
              >
                {t("newsletter.headline")}
              </h2>
              <p
                className="text-base"
                style={{ color: "var(--color-muted)" }}
              >
                {t("newsletter.sub")}
              </p>
            </div>

            {/* Right: form */}
            <div
              className="animate-on-scroll"
              style={{
                animation:
                  "animationIn 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s both",
              }}
            >
              {subscribed ? (
                <div
                  className="flex items-center gap-3 px-6 py-4 rounded-card"
                  style={{
                    background: "rgba(255,255,255,0.6)",
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <Icon
                    name="CheckCircleIcon"
                    size={22}
                    variant="solid"
                    className="text-accent"
                  />
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--color-text)" }}
                  >
                    {t("newsletter.success")}
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("newsletter.placeholder")}
                    required
                    className="flex-1 px-5 py-3.5 text-sm rounded-btn outline-none transition-colors"
                    style={{
                      background: "rgba(255,255,255,0.7)",
                      border: "1.5px solid rgba(0,0,0,0.08)",
                      color: "var(--color-text)",
                      fontFamily: "var(--font-body)",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor =
                        "var(--color-accent)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)")
                    }
                  />
                  <button
                    type="submit"
                    className="px-7 py-3.5 text-sm font-semibold text-white whitespace-nowrap transition-all"
                    style={{
                      background: "var(--color-accent)",
                      borderRadius: "var(--radius-btn)",
                      fontFamily: "var(--font-body)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "#d4926a";
                      (e.currentTarget as HTMLButtonElement).style.transform =
                        "scale(1.02)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "var(--color-accent)";
                      (e.currentTarget as HTMLButtonElement).style.transform =
                        "scale(1)";
                    }}
                  >
                    {t("newsletter.btn")}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}