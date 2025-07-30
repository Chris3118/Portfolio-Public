"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState<"INICIO" | "SOBRE MI" | "PROYECTOS" | "CONTACTO">("INICIO");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const bgClasses = isDarkMode
    ? "bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-slate-100"
    : "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-slate-800";

  const cardClasses = isDarkMode
    ? "bg-slate-800/70 border-slate-700/20"
    : "bg-white/70 border-blue-200/20";

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${bgClasses}`}>
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      <main className="flex-grow flex items-center justify-center px-6 pt-24 pb-16">
        <AnimatePresence mode="wait">
          {activeSection === "INICIO" && (
            <HomeSection
              isDarkMode={isDarkMode}
              setActiveSection={setActiveSection}
              variants={variants}
            />
          )}

          {activeSection === "SOBRE MI" && (
            <AboutSection
              isDarkMode={isDarkMode}
              variants={variants}
              cardClasses={cardClasses}
            />
          )}

          {activeSection === "PROYECTOS" && (
            <ProjectsSection
              isDarkMode={isDarkMode}
              variants={variants}
            />
          )}

          {activeSection === "CONTACTO" && (
            <ContactSection
              isDarkMode={isDarkMode}
              variants={variants}
              cardClasses={cardClasses}
            />
          )}
        </AnimatePresence>
      </main>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}