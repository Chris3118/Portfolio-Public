"use client";
import { motion } from "framer-motion";

interface HomeSectionProps {
    isDarkMode: boolean;
    setActiveSection: (section: "INICIO" | "SOBRE MI" | "PROYECTOS" | "CONTACTO") => void;
    variants: any;

}

export default function HomeSection({ isDarkMode, setActiveSection, variants }: HomeSectionProps) {
    const profileImagePath = "/images/Christian.png";

    return (
        <motion.section
            key="INICIO"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            className="max-w-5xl text-center"
        >
            {/* Foto de perfil */}
            <div className="mb-8">
                <img
                    src={profileImagePath}
                    alt="Christian Dávila - Perfil"
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-blue-500 shadow-xl"
                />
            </div>

            <h1 className={`text-5xl md:text-6xl font-extrabold mb-4 ${isDarkMode ? 'text-slate-100' : 'text-slate-800'}`}>
                <span className="text-blue-500">Christian Dávila</span>
            </h1>

            <h2 className={`text-2xl md:text-3xl font-semibold mb-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                Ingeniero en Tecnologías de la Información
            </h2>

            <div className={`text-lg mb-6 max-w-4xl mx-auto leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                <p className="mb-4">
                    Especializado en el <span className="font-semibold text-blue-500">desarrollo de soluciones tecnológicas integrales</span>,
                    con experiencia en la creación de aplicaciones móviles nativas y multiplataforma utilizando
                    <span className="font-semibold text-blue-500"> Flutter</span>, <span className="font-semibold text-blue-500">Nativo</span> y tecnologías web modernas.
                </p>

                <p className="mb-4">
                    Con conocimientos sólidos en <span className="font-semibold">infraestructura TI</span>, <span className="font-semibold">servicios en la nube</span>,
                    <span className="font-semibold"> gestión de proyectos tecnológicos</span> y <span className="font-semibold">minería de datos</span> para la generación de valor estratégico.
                </p>
            </div>

            <div className={`text-lg font-medium italic mb-8 px-6 py-4 rounded-lg ${isDarkMode ? 'bg-slate-800 text-blue-400' : 'bg-blue-50 text-blue-700'} border-l-4 border-blue-500`}>
                "Comprometido con la innovación y la mejora continua, transformando ideas en soluciones tecnológicas que generan impacto real"
            </div>




            {/* Destacados de competencias */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
                    <div className="font-semibold text-blue-500 mb-1">Desarrollo Móvil/Web</div>
                    <div>Flutter • Nativo • React </div>
                </div>

                <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
                    <div className="font-semibold text-blue-500 mb-1">Infraestructura</div>
                    <div>Cloud Services • Gestión TI</div>
                </div>
                <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
                    <div className="font-semibold text-blue-500 mb-1">Análisis de Datos</div>
                    <div>Data Mining • Business Intelligence</div>
                </div>
            </div>


            {/* Sección de servicios disponibles */}
            <div className={`mb-8 p-6 rounded-xl ${isDarkMode ? 'bg-slate-800/50 border border-slate-700' : 'bg-slate-50 border border-slate-200'}`}>
                <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-slate-100' : 'text-slate-800'}`}>
                    ¿Tienes un proyecto en mente?
                </h3>
                <p className={`text-base mb-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    Desarrollo soluciones personalizadas para diferentes plataformas:
                </p>
                <div className={`grid grid-cols-1 md:grid-cols-4 gap-3 mb-4 text-sm`}>
                    <div className={`flex items-center justify-center p-3 rounded-lg ${isDarkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                        <span className="font-semibold">📱 Móvil</span>
                    </div>
                    <div className={`flex items-center justify-center p-3 rounded-lg ${isDarkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                        <span className="font-semibold">🌐 Web</span>
                    </div>
                    <div className={`flex items-center justify-center p-3 rounded-lg ${isDarkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                        <span className="font-semibold">🔄 Multiplataforma</span>
                    </div>
                    <div className={`flex items-center justify-center p-3 rounded-lg ${isDarkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                        <span className="font-semibold">🔄 Soluciones Integrales</span>
                    </div>
                </div>
                <p className={`text-sm font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    ¡Contáctame para obtener una cotización personalizada para tu proyecto!
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                    onClick={() => {
                        setActiveSection("PROYECTOS");
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    }}
                    className={`px-8 py-3 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg ${isDarkMode
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                >
                    Ver mis proyectos
                </button>

                <button
                    onClick={() => {
                        setActiveSection("CONTACTO");
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    }}
                    className={`px-8 py-3 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg border-2 ${isDarkMode
                        ? "border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                        : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                        }`}
                >
                    Contáctame
                </button>
            </div>
        </motion.section>
    );
}