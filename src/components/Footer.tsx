"use client";

import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";
import AppLogo from "@/components/ui/AppLogo";
import Icon from "@/components/ui/AppIcon";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      className="w-full"
      style={{
        background: "var(--color-primary)",
        borderTop: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div
        className="mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-8"
        style={{ maxWidth: "1100px" }}
      >
        {/* Left: Logo + tagline */}
        <div className="flex flex-col items-center sm:items-start gap-2">
          <Link href="/iv-therapy-services">
            <AppLogo
              size={48}
              text="Dra. Valentina Reyes"
              iconName="HeartIcon"
            />
          </Link>
          <p
            className="text-sm"
            style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)" }}
          >
            {t("footer.tagline")}
          </p>
          <p
            className="text-xs mt-1"
            style={{ color: "var(--color-muted)" }}
          >
            {t("footer.rights")}
          </p>
        </div>

        {/* Right: Social icons */}
        <div className="flex items-center gap-5">
          <a
            href={t("footer.instagram")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
            style={{
              background: "rgba(255,255,255,0.5)",
              color: "var(--color-text)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "var(--color-accent)";
              (e.currentTarget as HTMLAnchorElement).style.color = "white";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "rgba(255,255,255,0.5)";
              (e.currentTarget as HTMLAnchorElement).style.color =
                "var(--color-text)";
            }}
          >
            <Icon name="CameraIcon" size={18} variant="outline" />
          </a>

          <a
            href={t("footer.whatsapp")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
            style={{
              background: "rgba(255,255,255,0.5)",
              color: "var(--color-text)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "var(--color-accent)";
              (e.currentTarget as HTMLAnchorElement).style.color = "white";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "rgba(255,255,255,0.5)";
              (e.currentTarget as HTMLAnchorElement).style.color =
                "var(--color-text)";
            }}
          >
            <Icon name="ChatBubbleLeftEllipsisIcon" size={18} variant="outline" />
          </a>

          <a
            href={t("footer.email")}
            aria-label="Email"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
            style={{
              background: "rgba(255,255,255,0.5)",
              color: "var(--color-text)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "var(--color-accent)";
              (e.currentTarget as HTMLAnchorElement).style.color = "white";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "rgba(255,255,255,0.5)";
              (e.currentTarget as HTMLAnchorElement).style.color =
                "var(--color-text)";
            }}
          >
            <Icon name="EnvelopeIcon" size={18} variant="outline" />
          </a>
        </div>
      </div>
    </footer>
  );
}