"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface AboutSectionProps {
    isDarkMode: boolean;
    variants: any;
    cardClasses: string;
}

interface Certificate {
    title: string;
    institution: string;
    date: string;
    imageUrl: string;
    description?: string;
}

export default function AboutSection({ isDarkMode, variants, cardClasses }: AboutSectionProps) {
    const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

    const professionalProfile = (
        <>
            Ingeniero en Tecnologías de la Información con enfoque en el <strong className="text-blue-500">desarrollo de soluciones tecnológicas integrales</strong>. Experiencia en la creación de <strong className="text-blue-500">aplicaciones móviles </strong>
            tanto nativas como multiplataforma utilizando frameworks modernos como <strong className="text-blue-500">Flutter</strong>. Con conocimientos en <strong className="text-blue-500">infraestructura TI</strong> y <strong className="text-blue-500">servicios en la nube</strong>, así como en la
            <strong className="text-blue-500"> gestión de proyectos tecnológicos</strong>, aplicando principios éticos, legales y financieros en la toma de decisiones.
            Capacidad de <strong className="text-blue-500">liderazgo</strong> demostrada en iniciativas colaborativas, y habilidades en <strong className="text-blue-500">minería de datos
            </strong> para la generación de valor estratégico. Comprometido con la <strong className="text-blue-500">innovación</strong> y la <strong className="text-blue-500">mejora continua del desempeño organizacional</strong>,
            alineado a las <strong className="text-blue-500">tendencias tecnológicas actuales</strong> a nivel local y regional.
        </>
    );

    const workPhilosophy = (
        <>
            Creo firmemente en el <strong className="text-blue-500">aprendizaje continuo</strong> y la adaptación constante.
            En el mundo de la tecnología, donde las herramientas evolucionan rápidamente, mi fortaleza radica en
            <strong className="text-blue-500"> aprender cualquier tecnología de forma rápida y efectiva</strong>.
            Cada proyecto es una oportunidad para crecer, innovar y aportar valor real a los usuarios.
        </>
    );

    const technicalSkills = [
        "Flutter", "Next.js", "Node.js",
        "Firebase", "JavaScript/TypeScript", "Python", "Java"
    ];

    const softSkills = [
        "Aprendizaje rápido", "Resolución de problemas",
        "Trabajo en equipo", "Comunicación efectiva"
    ];

    const languages = [
        { language: "Español", level: "Nativo" },
        { language: "Inglés", level: "Intermedio-Avanzado" }
    ];

    const education = [
        {
            degree: "Ingeniería en Tecnologías de la Información",
            institution: "Escuela Superior Politécnica de Chimborazo",
            period: "2021 - 2025",
            status: "Graduado"
        }
    ];

    const certificates: Certificate[] = [
        {
            title: "Conferencia Inspiring Study con Google",
            institution: "Progressio América Latina",
            date: "2021",
            imageUrl: "/certificates/Screenshot4.webp",
            description:
                "Asistencia al curso de entrenamiento 'Inspiring Study Conference with Google', orientado al liderazgo académico y uso de tecnologías educativas."
        },
        {
            title: "Congreso de Liderazgo y Formación Política",
            institution: "Movimiento Politécnicos Libres",
            date: "2023",
            imageUrl: "/certificates/Screenshot3.webp",
            description:
                "Participación en el Congreso de Liderazgo y Formación Política enfocado en el desarrollo de habilidades directivas y ciudadanas."
        },
        {
            title: "Certificado de Presidencia - ASO TI",
            institution: "Federación de Estudiantes Politécnicos de Chimborazo",
            date: "2023",
            imageUrl: "/certificates/Screenshot2.webp",
            description:
                "Representante estudiantil electo democráticamente como Presidente de la Asociación de Estudiantes de Tecnologías de la Información (2023 - 2025)."
        },
        {
            title: "Certificado de Reconocimiento",
            institution: "ESPOCH - FIE",
            date: "2023",
            imageUrl: "/certificates/Screenshot0.webp",
            description:
                "Reconocimiento por el liderazgo en la organización de eventos académicos nacionales e internacionales, en beneficio de la carrera de Tecnologías de la Información."
        },
        {
            title: "Introducción a la Ciberseguridad",
            institution: "Cisco Networking Academy",
            date: "2023",
            imageUrl: "/certificates/Screenshot5.webp",
            description:
                "Finalización del curso de Introducción a la Ciberseguridad, con énfasis en conceptos y prácticas esenciales para la protección de sistemas informáticos."
        },
        {
            title: "Certificado IT Essentials",
            institution: "Cisco Networking Academy",
            date: "2024",
            imageUrl: "/certificates/Screenshot6.webp",
            description:
                "Finalización del curso IT Essentials, que aborda los fundamentos de hardware, software y resolución de problemas básicos en computadoras."
        },
        {
            title: "Certificado de Colaboración - Proyecto Comercio Justo",
            institution: "ESPOCH - FIE",
            date: "2024",
            imageUrl: "/certificates/Screenshot1.webp",
            description:
                "Participación activa en el proyecto 'ESPOCH Politécnica Latinoamericana por el Comercio Justo'."
        },
        {
            title: "Segundo Lugar - Concurso de Soluciones Tecnológicas",
            institution: "ESPOCH - FIE - TI",
            date: "2025",
            imageUrl: "/certificates/Screenshot7.webp",
            description:
                "Segundo lugar en el concurso 'Soluciones Tecnológicas Aplicadas al Recurso Hídrico', categoría Aplicativos Móviles."
        }
    ];


    const openCertificateModal = (certificate: Certificate) => {
        setSelectedCertificate(certificate);
    };

    const closeCertificateModal = () => {
        setSelectedCertificate(null);
    };

    return (
        <>
            <motion.section
                key="SOBRE MI"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={variants}
                className="max-w-4xl mx-auto space-y-8"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-500 text-center">
                    Sobre mí
                </h2>

                {/* Perfil Profesional */}
                <div className={`backdrop-blur-sm rounded-xl p-8 shadow-xl ${cardClasses}`}>
                    <h3 className="text-2xl font-bold mb-4 text-blue-500 flex items-center">
                        <span className="mr-2">👨‍💻</span> Perfil Profesional
                    </h3>
                    <p className={` text-justify text-lg leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        {professionalProfile}
                    </p>
                </div>

                {/* Educación */}
                <div className={`backdrop-blur-sm rounded-xl p-8 shadow-xl ${cardClasses}`}>
                    <h3 className="text-2xl font-bold mb-6 text-blue-500 flex items-center">
                        <span className="mr-2">🎓</span> Educación
                    </h3>
                    {education.map((edu, index) => (
                        <div key={index} className={`p-4 rounded-lg mb-4 ${isDarkMode
                            ? "bg-slate-700 border border-slate-600"
                            : "bg-blue-50 border border-blue-100"
                            }`}>
                            <h4 className="text-xl font-semibold text-blue-500">{edu.degree}</h4>
                            <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                {edu.institution}
                            </p>
                            <div className="flex justify-between items-center mt-2">
                                <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                    {edu.period}
                                </span>
                                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                                    {edu.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Certificados */}
                <div className={`backdrop-blur-sm rounded-xl p-8 shadow-xl ${cardClasses}`}>
                    <h3 className="text-2xl font-bold mb-6 text-blue-500 flex items-center">
                        <span className="mr-2">🏆</span> Certificados
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certificates.map((cert, index) => (
                            <div
                                key={index}
                                onClick={() => openCertificateModal(cert)}
                                className={`p-6 rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${isDarkMode
                                    ? "bg-slate-700 border border-slate-600 hover:bg-slate-600"
                                    : "bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 hover:from-yellow-100 hover:to-orange-100"
                                    }`}
                            >
                                <div className="text-center">
                                    <div className="text-3xl mb-3">📜</div>
                                    <h4 className="text-lg font-semibold text-blue-500 mb-2">
                                        {cert.title}
                                    </h4>
                                    <p className={`text-sm mb-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                        {cert.institution}
                                    </p>
                                    <span className={`text-xs px-2 py-1 rounded-full ${isDarkMode
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-blue-500 text-white'
                                        }`}>
                                        {cert.date}
                                    </span>
                                    {cert.description && (
                                        <p className={`text-xs mt-2 text-justify  ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                            {cert.description}
                                        </p>
                                    )}

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Habilidades Técnicas */}
                    <div className={`backdrop-blur-sm rounded-xl p-8 shadow-xl ${cardClasses}`}>
                        <h3 className="text-2xl font-bold mb-6 text-blue-500 flex items-center">
                            <span className="mr-2">⚡</span> Habilidades Técnicas
                        </h3>
                        <div className="grid grid-cols-1 gap-3">
                            {technicalSkills.map((skill) => (
                                <div
                                    key={skill}
                                    className={`flex items-center p-3 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105 ${isDarkMode
                                        ? "bg-slate-700 text-slate-200 border border-slate-600 hover:bg-slate-600"
                                        : "bg-blue-50 text-slate-700 border border-blue-100 hover:bg-blue-100"
                                        }`}
                                >
                                    <span className="mr-3 text-blue-500 text-lg">🚀</span>
                                    <span className="font-medium">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Habilidades Blandas */}
                    <div className={`backdrop-blur-sm rounded-xl p-8 shadow-xl ${cardClasses}`}>
                        <h3 className="text-2xl font-bold mb-6 text-blue-500 flex items-center">
                            <span className="mr-2">💎</span> Habilidades Blandas
                        </h3>
                        <div className="grid grid-cols-1 gap-3">
                            {softSkills.map((skill) => (
                                <div
                                    key={skill}
                                    className={`flex items-center p-3 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105 ${isDarkMode
                                        ? "bg-slate-700 text-slate-200 border border-slate-600 hover:bg-slate-600"
                                        : "bg-green-50 text-slate-700 border border-green-100 hover:bg-green-100"
                                        }`}
                                >
                                    <span className="mr-3 text-green-500 text-lg">✨</span>
                                    <span className="font-medium">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Idiomas */}
                <div className={`backdrop-blur-sm rounded-xl p-8 shadow-xl ${cardClasses}`}>
                    <h3 className="text-2xl font-bold mb-6 text-blue-500 flex items-center">
                        <span className="mr-2">🌍</span> Idiomas
                    </h3>
                    <div
                        className={`grid gap-4 ${languages.length === 1
                            ? "grid-cols-1 justify-center"
                            : languages.length === 2
                                ? "grid-cols-1 sm:grid-cols-2 justify-center"
                                : "md:grid-cols-3"
                            }`}
                    >                    {languages.map((lang, index) => (
                        <div
                            key={index}
                            className={`p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-all hover:scale-105 ${isDarkMode
                                ? "bg-slate-700 border border-slate-600"
                                : "bg-purple-50 border border-purple-100"
                                }`}
                        >
                            <h4 className="text-lg font-semibold text-purple-500 mb-2">
                                {lang.language}
                            </h4>
                            <span className={`text-sm px-3 py-1 rounded-full ${lang.level === "Nativo"
                                ? "bg-green-500 text-white"
                                : lang.level.includes("Avanzado")
                                    ? "bg-blue-500 text-white"
                                    : "bg-yellow-500 text-white"
                                }`}>
                                {lang.level}
                            </span>
                        </div>
                    ))}
                    </div>
                </div>

                {/* Filosofía de Trabajo */}
                <div className={`backdrop-blur-sm rounded-xl p-8 shadow-xl ${cardClasses}`}>
                    <h3 className="text-2xl font-bold mb-4 text-blue-500 flex items-center">
                        <span className="mr-2">💡</span> Mi Filosofía
                    </h3>
                    <p className={` text-justify text-lg leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        {workPhilosophy}
                    </p>
                </div>
            </motion.section>

            {selectedCertificate && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
                    onClick={closeCertificateModal}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", damping: 20, stiffness: 300 }}
                        className="relative max-w-4xl max-h-full w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Contenido del modal respetando la paleta */}
                        <div className={`rounded-xl overflow-hidden shadow-2xl border backdrop-blur-sm ${isDarkMode
                            ? 'bg-slate-800/95 border-slate-600'
                            : 'bg-white/95 border-blue-200'
                            }`}>
                            {/* Header con los colores del tema */}
                            <div className={`p-6 border-b relative ${isDarkMode
                                ? 'bg-slate-700/50 border-slate-600'
                                : 'bg-blue-50/50 border-blue-200'
                                }`}>
                                <button
                                    onClick={closeCertificateModal}
                                    className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-200 hover:scale-110 ${isDarkMode
                                        ? 'text-slate-400 hover:text-white hover:bg-slate-600'
                                        : 'text-slate-600 hover:text-blue-600 hover:bg-blue-100'
                                        }`}
                                    aria-label="Cerrar modal"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                <div className="pr-12">
                                    <h3 className="text-2xl font-bold mb-2 text-blue-500">
                                        {selectedCertificate.title}
                                    </h3>
                                    <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                        {selectedCertificate.institution} • {selectedCertificate.date}
                                    </p>
                                </div>
                            </div>

                            {/* Imagen del certificado */}
                            <div className={`flex justify-center items-center p-6 ${isDarkMode ? 'bg-slate-700/30' : 'bg-gray-50/50'
                                }`}>
                                <div className="relative">
                                    <img
                                        src={selectedCertificate.imageUrl}
                                        alt={selectedCertificate.title}
                                        className={`max-w-full max-h-[60vh] object-contain rounded-lg shadow-lg border ${isDarkMode ? 'border-slate-600' : 'border-blue-200'
                                            }`}
                                        onError={(e) => {
                                            e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%236b7280' font-size='16'%3ECertificado no disponible%3C/text%3E%3C/svg%3E";
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Footer con descripción */}
                            {selectedCertificate.description && (
                                <div className={`p-6 border-t ${isDarkMode
                                    ? 'border-slate-600 bg-slate-700/20'
                                    : 'border-blue-200 bg-blue-50/30'
                                    }`}>
                                    <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                        {selectedCertificate.description}
                                    </p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
}