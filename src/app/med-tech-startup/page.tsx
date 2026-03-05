import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MedTechInteractive from "./components/MedTechInteractive";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "NatalTech · Dra. Valentina Reyes",
  description:
    "NatalTech desarrolla herramientas digitales para el monitoreo prenatal y el seguimiento pediátrico temprano en Latinoamérica.",
  keywords: [
    "NatalTech",
    "medtech",
    "salud materno-infantil",
    "prenatal",
    "pediatría digital",
    "Panamá",
  ],
};

export default function MedTechPage() {
  return (
    <LanguageProvider>
      <div
        className="min-h-screen flex flex-col"
        style={{ background: "var(--color-dark)" }}
      >
        <Header />
        <main className="flex-1">
          <MedTechInteractive />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}