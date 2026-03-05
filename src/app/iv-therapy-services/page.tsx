import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IVTherapyInteractive from "./components/IVTherapyInteractive";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Terapia IV · Dra. Valentina Reyes",
  description:
    "Sesiones personalizadas de terapia intravenosa administradas por médico certificado en Panamá. Hidratación, vitaminas, recuperación y fórmulas personalizadas.",
  keywords: [
    "terapia IV",
    "IV therapy",
    "hidratación intravenosa",
    "Panamá",
    "Dra. Valentina Reyes",
  ],
};

export default function IVTherapyPage() {
  return (
    <LanguageProvider>
      <div
        className="min-h-screen flex flex-col"
        style={{ background: "var(--color-bg)" }}
      >
        <Header />
        <main className="flex-1">
          <IVTherapyInteractive />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}