import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EducationInteractive from "./components/EducationInteractive";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Educación en Salud · Dra. Valentina Reyes",
  description:
    "Artículos, consejos y videos sobre pediatría, neonatología y terapia IV para padres y pacientes en Panamá.",
  keywords: [
    "educación salud",
    "pediatría",
    "neonatología",
    "artículos médicos",
    "Panamá",
    "Dra. Valentina Reyes",
  ],
};

export default function EducationPage() {
  return (
    <LanguageProvider>
      <div
        className="min-h-screen flex flex-col"
        style={{ background: "var(--color-bg)" }}
      >
        <Header />
        <main className="flex-1">
          <EducationInteractive />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}