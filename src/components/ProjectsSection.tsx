"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X, Smartphone, Monitor } from "lucide-react";

import SignalCellular4BarIcon from '@mui/icons-material/SignalCellular4Bar';
import WifiIcon from '@mui/icons-material/Wifi';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';

interface ProjectsSectionProps {
    isDarkMode: boolean;
    variants: any;
}

interface ProjectImages {
    mobile?: string[];
    web?: string[];
}

interface Project {
    id: number;
    title: string;
    description: string;
    gradient: string;
    type: 'mobile' | 'web' | 'multiplataforma';
    technologies: string[];
    platform: string;
    images: ProjectImages;
    logo: string;
    primaryColor: string;
    statusBarConfig?: {
        backgroundColor: string;
        textColor: string;
        iconColor: string;
        time?: string;
    };
}

export default function ProjectsSection({ isDarkMode, variants }: ProjectsSectionProps) {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentViewType, setCurrentViewType] = useState<'mobile' | 'web'>('mobile');

    const projects: Project[] = [
        {
            id: 1,
            title: "Río Rutas",
            description: "App nativa Android desarrollada en Java que promueve el turismo en Riobamba. Permite explorar rutas turísticas, sitios destacados y eventos locales. Proyecto realizado en conjunto con la Municipalidad.",
            gradient: "from-green-500 to-blue-500",
            type: "mobile",
            technologies: ["Java", "Android SDK", "Firebase"],
            platform: "Android",
            logo: "/images/rio-rutas/Logo_riorutas.png",
            primaryColor: "#FFFFFF",
            statusBarConfig: {
                backgroundColor: "#fe4356",
                textColor: "#ffffff",
                iconColor: "#ffffff",
                time: "9:41"
            },
            images: {
                mobile: [
                    "/images/rio-rutas/Screenshot0.webp",
                    "/images/rio-rutas/Screenshot1.webp",
                    "/images/rio-rutas/Screenshot2.webp",
                    "/images/rio-rutas/Screenshot3.webp",
                    "/images/rio-rutas/Screenshot4.webp",
                    "/images/rio-rutas/Screenshot5.webp",
                    "/images/rio-rutas/Screenshot6.webp",
                    "/images/rio-rutas/Screenshot7.webp",
                    "/images/rio-rutas/Screenshot8.webp",
                    "/images/rio-rutas/Screenshot9.webp",
                    "/images/rio-rutas/Screenshot10.webp",
                    "/images/rio-rutas/Screenshot11.webp",
                    "/images/rio-rutas/Screenshot12.webp",
                    "/images/rio-rutas/Screenshot13.webp",
                    "/images/rio-rutas/Screenshot14.webp",
                    "/images/rio-rutas/Screenshot15.webp",
                    "/images/rio-rutas/Screenshot16.webp",

                ]
            }
        },
        {
            id: 2,
            title: "Alerta ESPOCH",
            description: "Plataforma multiplataforma de alertas de emergencia desarrollada en Flutter. Permite enviar notificaciones descriptivas e inmediatas al personal de seguridad institucional. Disponible en Web, Android e iOS.",
            gradient: "from-red-500 to-yellow-500",
            type: "multiplataforma",
            technologies: ["Flutter", "Dart", "Firebase"],
            platform: "Web, Android, iOS",
            logo: "/images/alerta-espoch/Logo_alerta.png",
            primaryColor: "#FFFFFF",
            statusBarConfig: {
                backgroundColor: "#bc0814",
                textColor: "#ffffff",
                iconColor: "#ffffff",
                time: "10:15"
            },
            images: {
                mobile: [
                    "/images/alerta-espoch/mobile/Screenshot0.webp",
                    "/images/alerta-espoch/mobile/Screenshot1.webp",
                    "/images/alerta-espoch/mobile/Screenshot2.webp",
                    "/images/alerta-espoch/mobile/Screenshot3.webp",
                    "/images/alerta-espoch/mobile/Screenshot4.webp",
                    "/images/alerta-espoch/mobile/Screenshot5.webp",
                    "/images/alerta-espoch/mobile/Screenshot6.webp",
                    "/images/alerta-espoch/mobile/Screenshot7.webp",
                    "/images/alerta-espoch/mobile/Screenshot8.webp",
                    "/images/alerta-espoch/mobile/Screenshot9.webp",
                    "/images/alerta-espoch/mobile/Screenshot10.webp",
                    "/images/alerta-espoch/mobile/Screenshot11.webp",
                    "/images/alerta-espoch/mobile/Screenshot12.webp",
                    "/images/alerta-espoch/mobile/Screenshot13.webp",
                ],
                web: [
                    "/images/alerta-espoch/web/Screenshot0.webp",
                    "/images/alerta-espoch/web/Screenshot1.webp",
                    "/images/alerta-espoch/web/Screenshot2.webp",
                    "/images/alerta-espoch/web/Screenshot3.webp",
                    "/images/alerta-espoch/web/Screenshot4.webp",
                    "/images/alerta-espoch/web/Screenshot5.webp",
                ]
            }
        },
        {
            id: 4,
            title: "Sazón de Ana",
            description: "App móvil Flutter para Android e iOS que facilita la gestión de pedidos y cuentas en locales de comida como papipollos y salchipapas. Permite seleccionar productos, calcular totales y organizar pedidos de manera intuitiva.",
            gradient: "from-yellow-500 to-orange-500",
            type: "mobile",
            technologies: ["Flutter", "Dart", "Firebase"],
            platform: "Android, iOS",
            logo: "/images/sason-ana/logo_sason_ana.png",
            primaryColor: "#FFFFFF",
            statusBarConfig: {
                backgroundColor: "#e6e6e6",
                textColor: "#000000",
                iconColor: "#000000",
                time: "11:00"
            },
            images: {
                mobile: [
                    "/images/sason-ana/Screenshot0.webp",
                    "/images/sason-ana/Screenshot1.webp",
                    "/images/sason-ana/Screenshot2.webp",
                    "/images/sason-ana/Screenshot3.webp",
                    "/images/sason-ana/Screenshot4.webp",
                ]
            }
        },
        {
            id: 5,
            title: "Pachayayawan purina",
            description: "Aplicación Flutter enfocada en comunidades católicas del Coca. Incluye mapa offline de comunas, información sobre servidores, cantos, sacramentos, misa, mitos, oraciones y una agenda integrada. Funciona con o sin conexión a Internet.",
            gradient: "from-teal-500 to-indigo-500",
            type: "mobile",
            technologies: ["Flutter", "Dart", "Mapbox", "Firebase", "Offline"],
            platform: "Android, iOS",
            logo: "/images/pachayamin/Logo_pachayamin.png",
            primaryColor: "#FFFFFF",
            statusBarConfig: {
                backgroundColor: "#56975a",
                textColor: "#ffffff",
                iconColor: "#ffffff",
                time: "08:45"
            },
            images: {
                mobile: [
                    "/images/pachayamin/Screenshot0.webp",
                    "/images/pachayamin/Screenshot1.webp",
                    "/images/pachayamin/Screenshot2.webp",
                    "/images/pachayamin/Screenshot3.webp",
                    "/images/pachayamin/Screenshot4.webp",
                    "/images/pachayamin/Screenshot5.webp",
                    "/images/pachayamin/Screenshot6.webp",
                    "/images/pachayamin/Screenshot7.webp",
                    "/images/pachayamin/Screenshot8.webp",
                    "/images/pachayamin/Screenshot9.webp",
                    "/images/pachayamin/Screenshot10.webp",
                    "/images/pachayamin/Screenshot11.webp",
                    "/images/pachayamin/Screenshot12.webp",

                ]
            }
        }
    ];

    const openModal = (project: Project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);

        if (project.type === 'mobile') {
            setCurrentViewType('mobile');
        } else if (project.type === 'web') {
            setCurrentViewType('web');
        } else {
            setCurrentViewType(project.images.mobile ? 'mobile' : 'web');
        }
    };

    const closeModal = () => {
        setSelectedProject(null);
        setCurrentImageIndex(0);
        setCurrentViewType('mobile');
    };

    const getCurrentImages = () => {
        if (!selectedProject) return [];
        return selectedProject.images[currentViewType] || [];
    };

    const switchViewType = (type: 'mobile' | 'web') => {
        if (selectedProject && selectedProject.images[type]) {
            setCurrentViewType(type);
            setCurrentImageIndex(0);
        }
    };

    const nextImage = () => {
        const currentImages = getCurrentImages();
        if (currentImages.length > 0) {
            setCurrentImageIndex((prev) =>
                prev === currentImages.length - 1 ? 0 : prev + 1
            );
        }
    };

    const prevImage = () => {
        const currentImages = getCurrentImages();
        if (currentImages.length > 0) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? currentImages.length - 1 : prev - 1
            );
        }
    };

    const goToImage = (index: number) => {
        setCurrentImageIndex(index);
    };

    const getTypeColor = (type: string) => {
        switch (type) {
            case "mobile":
                return "bg-emerald-100 text-emerald-800 border-emerald-200";
            case "web":
                return "bg-blue-100 text-blue-800 border-blue-200";
            case "multiplataforma":
                return "bg-purple-100 text-purple-800 border-purple-200";
            default:
                return "bg-gray-100 text-gray-800 border-gray-200";
        }
    };

    const getTypeColorDark = (type: string) => {
        switch (type) {
            case "mobile":
                return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
            case "web":
                return "bg-blue-500/20 text-blue-300 border-blue-500/30";
            case "multiplataforma":
                return "bg-purple-500/20 text-purple-300 border-purple-500/30";
            default:
                return "bg-gray-500/20 text-gray-300 border-gray-500/30";
        }
    };

    const getTypeLabel = (type: string) => {
        switch (type) {
            case "mobile":
                return "App Móvil";
            case "web":
                return "App Web";
            case "multiplataforma":
                return "Multiplataforma";
            default:
                return type;
        }
    };

    const MobileFrame = ({ children, statusBarConfig }: { children: React.ReactNode, statusBarConfig?: Project['statusBarConfig'] }) => {
        const defaultConfig = {
            backgroundColor: "#000000",
            textColor: "#ffffff",
            iconColor: "#ffffff",
            time: "9:41"
        };

        const config = { ...defaultConfig, ...statusBarConfig };

        return (
            <div className={`relative mx-auto ${isDarkMode ? 'bg-gray-900' : 'bg-gray-800'} rounded-[2rem] p-2 shadow-2xl`}
                style={{ width: '290px', height: '610px' }}>
                {/* Botón de encendido */}
                <div className={`absolute -right-1 top-20 w-1 h-12 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-600'} rounded-l-sm`}></div>
                {/* Botones de volumen */}
                <div className={`absolute -left-1 top-16 w-1 h-6 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-600'} rounded-r-sm`}></div>
                <div className={`absolute -left-1 top-24 w-1 h-8 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-600'} rounded-r-sm`}></div>

                {/* Pantalla */}
                <div className="relative w-full h-full bg-black rounded-[1.5rem] overflow-hidden">
                    {/* Barra de estado superior personalizable */}
                    <div
                        className="absolute top-0 left-0 right-0 h-8 z-20 flex items-center justify-between px-4 text-xs font-medium"
                        style={{
                            backgroundColor: config.backgroundColor,
                            color: config.textColor
                        }}
                    >
                        {/* Hora personalizable */}
                        <div className="font-medium" style={{ color: config.textColor }}>
                            {config.time}
                        </div>

                        {/* Notch circular en el centro */}
                        <div
                            className=" mt-2 absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full border-2"
                            style={{
                                backgroundColor: '#000000',
                                borderColor: '#000000'
                            }}
                        ></div>

                        {/* Iconos de estado con colores personalizables */}
                        <div className="flex items-center gap-1">
                            {/* Señal */}
                            <SignalCellular4BarIcon
                                fontSize="small"
                                sx={{ color: config.iconColor }}
                            />

                            {/* WiFi */}
                            <WifiIcon
                                fontSize="small"
                                sx={{ color: config.iconColor }}
                            />

                            {/* Batería */}
                            <BatteryFullIcon
                                fontSize="small"
                                sx={{ color: config.iconColor }}
                            />
                        </div>
                    </div>

                    {/* Contenido de la app (imagen) */}
                    <div className="absolute top-8 left-0 right-0 bottom-0 flex items-center justify-center overflow-hidden">
                        {children}
                    </div>
                </div>
            </div>
        );
    };

    const WebFrame = ({ children }: { children: React.ReactNode }) => (
        <div className={`relative mx-auto ${isDarkMode ? 'bg-gray-900' : 'bg-gray-800'} rounded-lg p-4 shadow-2xl`}
            style={{ width: '1280px', height: '612px' }}>
            {/* Barra superior del navegador */}
            <div className={`w-full h-8 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-700'} rounded-t-md flex items-center px-4 gap-2`}>
                {/* Botones de control */}
                <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>

                {/* Barra de direcciones */}
                <div className={`flex-1 h-5 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-600'} rounded ml-4 px-3 flex items-center`}>
                    <div className="w-3 h-3 border border-gray-400 rounded-full mr-2"></div>
                    <div className="text-xs text-gray-400">localhost:3000</div>
                </div>
            </div>

            {/* Pantalla */}
            <div className="relative w-full bg-white rounded-b-md overflow-hidden" style={{ height: 'calc(100% - 2rem)' }}>
                {children}
            </div>
        </div>
    );

    const renderFrame = (viewType: 'mobile' | 'web', children: React.ReactNode) => {
        if (viewType === 'mobile') {
            return <MobileFrame statusBarConfig={selectedProject?.statusBarConfig}>{children}</MobileFrame>;
        } else {
            return <WebFrame>{children}</WebFrame>;
        }
    };

    const getAvailableViewTypes = (project: Project) => {
        const types: ('mobile' | 'web')[] = [];
        if (project.images.mobile) types.push('mobile');
        if (project.images.web) types.push('web');
        return types;
    };

    return (
        <>
            <motion.section
                key="PROYECTOS"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={variants}
                className="max-w-4xl mx-auto w-full"
            >
                <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center ${isDarkMode
                    ? 'text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                    : 'text-blue-500'
                    }`}>
                    Mis Proyectos
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            whileHover={{
                                y: -8,
                                scale: 1.02,
                            }}
                            className={`rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer group ${isDarkMode
                                ? "bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 shadow-2xl hover:shadow-blue-500/20 hover:shadow-2xl hover:border-blue-500/40"
                                : "bg-white/80 backdrop-blur-sm border border-blue-100/50 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10"
                                } ${isDarkMode ? 'hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]' : ''
                                }`}
                            onClick={() => openModal(project)}
                            style={{
                                boxShadow: isDarkMode
                                    ? '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(59, 130, 246, 0.1)'
                                    : undefined
                            }}
                        >
                            <div
                                className="h-44 relative flex items-center justify-center overflow-hidden"
                                style={{ backgroundColor: project.primaryColor }}
                            >
                                {/* Patrón de fondo mejorado */}
                                <div className="absolute inset-0 opacity-15">
                                    <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-gradient-to-br from-white to-transparent transform -translate-x-20 -translate-y-20 blur-sm"></div>
                                    <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-gradient-to-tl from-white to-transparent transform translate-x-16 translate-y-16 blur-sm"></div>
                                    <div className="absolute top-1/2 left-1/2 w-20 h-20 rounded-full bg-white/30 transform -translate-x-10 -translate-y-10 blur-md"></div>
                                    <div className="absolute top-1/4 right-1/4 w-12 h-12 rounded-full bg-white/20 blur-lg"></div>
                                </div>

                                {/* Logo de la app con efecto hover */}
                                <motion.div
                                    className="relative z-10"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <img
                                        src={project.logo}
                                        alt={`${project.title} Logo`}
                                        className="w-32 h-32 object-contain drop-shadow-2xl group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-300"
                                    />
                                </motion.div>

                                {/* Etiqueta de tipo mejorada */}
                                <div className="absolute top-4 left-4">
                                    <span className={`px-3 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-sm ${getTypeColor(project.type)
                                        }`}>
                                        {getTypeLabel(project.type)}
                                    </span>
                                </div>

                                {/* Etiqueta de plataforma mejorada */}
                                <div className="absolute top-4 right-4">
                                    <span className={`px-3 py-1.5 rounded-full text-xs font-medium bg-blue-500/20 text-blue-100 border border-blue-400/30 backdrop-blur-md ${getTypeColor(project.type)
                                        }`}>
                                        {project.platform}
                                    </span>
                                </div>

                                {/* Efecto de brillo en hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-700"></div>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {/* Etiquetas de tecnologías mejoradas */}
                                    {project.technologies.map((tech, index) => (
                                        <motion.span
                                            key={index}
                                            whileHover={{ scale: 1.05 }}
                                            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 ${isDarkMode
                                                ? "bg-blue-500/20 text-blue-200 border-blue-400/30 hover:bg-blue-500/30 hover:border-blue-400/50"
                                                : "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 hover:border-blue-300"
                                                }`}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>

                                <h3 className={`text-2xl font-bold mb-3 transition-colors duration-200 ${isDarkMode
                                    ? 'text-slate-100 group-hover:text-blue-300'
                                    : 'text-slate-800 group-hover:text-blue-600'
                                    }`}>
                                    {project.title}
                                </h3>
                                <p className={`mb-6 leading-relaxed text-justify  ${isDarkMode
                                    ? 'text-slate-300'
                                    : 'text-slate-600'
                                    }`}>
                                    {project.description}
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`inline-flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-200 ${isDarkMode
                                        ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-400 hover:to-blue-500 shadow-lg hover:shadow-blue-500/25"
                                        : "bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 shadow-lg hover:shadow-blue-500/25"
                                        }`}
                                >
                                    Ver detalles
                                    <motion.span
                                        initial={{ x: 0 }}
                                        whileHover={{ x: 5 }}
                                        className="ml-2"
                                    >
                                        →
                                    </motion.span>
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>


            {/* Modal con Carrusel mejorado y responsivo */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-gradient-to-br from-black/90 to-slate-900/90 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4"
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className={`relative w-full h-full sm:max-w-7xl sm:w-full sm:max-h-[95vh] overflow-hidden rounded-none sm:rounded-3xl ${isDarkMode
                                ? 'bg-slate-900/95 backdrop-blur-xl border-0 sm:border border-slate-700/50 shadow-2xl shadow-blue-500/10'
                                : 'bg-white/95 backdrop-blur-xl border-0 sm:border border-gray-200/50 shadow-2xl'
                                }`}
                            style={{
                                boxShadow: isDarkMode
                                    ? '0 0 50px rgba(59, 130, 246, 0.2), 0 25px 50px -12px rgba(0, 0, 0, 0.8)'
                                    : undefined
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Botón de cerrar - Mejorado para móvil */}
                            <motion.button
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={closeModal}
                                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2 sm:p-3 rounded-full bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm transition-all duration-200 border border-white/10"
                            >
                                <X size={18} className="sm:w-5 sm:h-5" />
                            </motion.button>

                            {/* Contenido principal - Con scroll unificado */}
                            <div className="h-full overflow-y-auto">
                                <div className="flex flex-col lg:flex-row min-h-full">
                                    {/* Información del proyecto */}
                                    <div className={`w-full lg:w-1/2 p-4 sm:p-8 lg:border-r ${isDarkMode ? 'border-slate-700/50' : 'border-gray-200/50'}`}>
                                        <div className="flex items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                                            <div className="p-3 sm:p-4 rounded-2xl shadow-lg flex-shrink-0" style={{ backgroundColor: selectedProject.primaryColor }}>
                                                <img
                                                    src={selectedProject.logo}
                                                    alt={`${selectedProject.title} Logo`}
                                                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                                                />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <h3 className={`text-xl sm:text-3xl font-bold leading-tight ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                                                    {selectedProject.title}
                                                </h3>
                                                <div className="flex flex-wrap gap-2 mt-2 sm:mt-3">
                                                    <span className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold ${isDarkMode
                                                        ? getTypeColorDark(selectedProject.type)
                                                        : getTypeColor(selectedProject.type)
                                                        }`}>
                                                        {getTypeLabel(selectedProject.type)}
                                                    </span>
                                                    <span className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-medium ${isDarkMode
                                                        ? "bg-blue-500/20 text-blue-200 border border-blue-400/30"
                                                        : "bg-blue-100 text-blue-700 border border-blue-200"
                                                        }`}>
                                                        {selectedProject.platform}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <p className={`text-sm sm:text-lg leading-relaxed mb-4 sm:mb-6 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                            {selectedProject.description}
                                        </p>

                                        <div className="mb-4 sm:mb-6">
                                            <h4 className={`text-lg sm:text-xl font-semibold mb-2 sm:mb-3 ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                                                Tecnologías utilizadas
                                            </h4>
                                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                                {selectedProject.technologies.map((tech, index) => (
                                                    <motion.span
                                                        key={index}
                                                        whileHover={{ scale: 1.05 }}
                                                        className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium ${isDarkMode
                                                            ? "bg-blue-500/20 text-blue-200 border border-blue-400/30"
                                                            : "bg-blue-100 text-blue-700 border border-blue-200"
                                                            }`}
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Selector de vista (solo para multiplataforma) */}
                                        {selectedProject.type === 'multiplataforma' && getAvailableViewTypes(selectedProject).length > 1 && (
                                            <div className="mb-4 sm:mb-6">
                                                <h4 className={`text-lg sm:text-xl font-semibold mb-2 sm:mb-3 ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                                                    Vista
                                                </h4>
                                                <div className="flex gap-2 sm:gap-3">
                                                    {getAvailableViewTypes(selectedProject).map((type) => (
                                                        <motion.button
                                                            key={type}
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            onClick={() => switchViewType(type)}
                                                            className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-sm font-medium transition-all duration-200 ${currentViewType === type
                                                                ? (isDarkMode
                                                                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                                                                    : "bg-blue-500 text-white shadow-lg shadow-blue-500/25")
                                                                : (isDarkMode
                                                                    ? "bg-slate-700 text-slate-300 hover:bg-slate-600"
                                                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200")
                                                                }`}
                                                        >
                                                            {type === 'mobile' ? <Smartphone size={14} className="sm:w-4 sm:h-4" /> : <Monitor size={14} className="sm:w-4 sm:h-4" />}
                                                            {type === 'mobile' ? 'Móvil' : 'Web'}
                                                        </motion.button>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Contador de imágenes */}
                                        <div className={`mt-4 sm:mt-6 text-center text-xs sm:text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                            Imagen {currentImageIndex + 1} de {getCurrentImages().length}

                                        </div>
                                    </div>

                                    {/* Marco del dispositivo */}
                                    <div className="w-full lg:w-1/2 p-4 sm:p-8 flex flex-col items-center justify-center lg:min-h-screen">
                                        {getCurrentImages().length > 0 && (
                                            <div className="w-full flex flex-col items-center justify-center">
                                                {/* Contenedor del marco con scroll responsivo */}
                                                <div className="w-full max-w-full flex justify-center mb-4">
                                                    {currentViewType === 'mobile' ? (
                                                        <div className={`relative mx-auto ${isDarkMode ? 'bg-gray-900' : 'bg-gray-800'} rounded-[1rem] sm:rounded-[2rem] p-1 sm:p-2 shadow-2xl ${isDarkMode ? 'ring-2 ring-blue-400/40 shadow-[0_0_25px_rgba(59,130,246,0.4)] border border-blue-500/20' : ''}`} style={{
                                                            width: 'min(245px, 90vw)',
                                                            height: 'min(520px, 70vh)',
                                                            maxWidth: '290px',
                                                            maxHeight: '610px'
                                                        }}>
                                                            {/* Botones del dispositivo - Responsivos */}
                                                            <div className={`absolute -right-0.5 sm:-right-1 top-16 sm:top-20 w-0.5 sm:w-1 h-8 sm:h-12 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-600'} rounded-l-sm`}></div>
                                                            <div className={`absolute -left-0.5 sm:-left-1 top-12 sm:top-16 w-0.5 sm:w-1 h-4 sm:h-6 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-600'} rounded-r-sm`}></div>
                                                            <div className={`absolute -left-0.5 sm:-left-1 top-18 sm:top-24 w-0.5 sm:w-1 h-6 sm:h-8 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-600'} rounded-r-sm`}></div>

                                                            {/* Pantalla */}
                                                            <div className="relative w-full h-full bg-black rounded-[0.75rem] sm:rounded-[1.5rem] overflow-hidden">
                                                                {/* Barra de estado superior */}
                                                                <motion.div
                                                                    initial={false}
                                                                    animate={{ opacity: 1 }}
                                                                    className="absolute top-0 left-0 right-0 h-6 sm:h-8 z-20 flex items-center justify-between px-2 sm:px-4 text-xs font-medium"
                                                                    style={{
                                                                        backgroundColor: selectedProject.statusBarConfig?.backgroundColor || "#000000",
                                                                        color: selectedProject.statusBarConfig?.textColor || "#ffffff"
                                                                    }}
                                                                >
                                                                    <div className="font-medium">
                                                                        {selectedProject.statusBarConfig?.time || "9:41"}
                                                                    </div>

                                                                    {/* Notch */}
                                                                    <div
                                                                        className="absolute left-1/2 top-0 transform -translate-x-1/2 w-3 sm:w-4 h-3 sm:h-4 rounded-full border-2 mt-1 sm:mt-2"
                                                                        style={{
                                                                            backgroundColor: '#000000',
                                                                            borderColor: '#000000'
                                                                        }}
                                                                    ></div>

                                                                    {/* Iconos de estado */}
                                                                    <div className="flex items-center gap-0.5 sm:gap-1">
                                                                        <SignalCellular4BarIcon
                                                                            fontSize="small"
                                                                            sx={{
                                                                                color: selectedProject.statusBarConfig?.iconColor || "#ffffff",
                                                                                fontSize: { xs: '16px', sm: '20px' }
                                                                            }}
                                                                        />
                                                                        <WifiIcon
                                                                            fontSize="small"
                                                                            sx={{
                                                                                color: selectedProject.statusBarConfig?.iconColor || "#ffffff",
                                                                                fontSize: { xs: '16px', sm: '20px' }
                                                                            }}
                                                                        />
                                                                        <BatteryFullIcon
                                                                            fontSize="small"
                                                                            sx={{
                                                                                color: selectedProject.statusBarConfig?.iconColor || "#ffffff",
                                                                                fontSize: { xs: '16px', sm: '20px' }
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </motion.div>

                                                                {/* Contenido de la app */}
                                                                <div className="absolute top-6 sm:top-8 left-0 right-0 bottom-0 flex items-center justify-center overflow-hidden">
                                                                    <AnimatePresence mode="wait">
                                                                        <motion.img
                                                                            key={`${currentViewType}-${currentImageIndex}`}
                                                                            src={getCurrentImages()[currentImageIndex]}
                                                                            alt={`${selectedProject.title} - Vista ${currentViewType} - Imagen ${currentImageIndex + 1}`}
                                                                            initial={{ opacity: 0, scale: 0.95 }}
                                                                            animate={{ opacity: 1, scale: 1 }}
                                                                            exit={{ opacity: 0, scale: 0.95 }}
                                                                            transition={{ duration: 0.3 }}
                                                                            className="h-full object-contain"
                                                                            style={{
                                                                                maxWidth: '100%',
                                                                                maxHeight: '100%'
                                                                            }}
                                                                        />
                                                                    </AnimatePresence>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div className={`relative mx-auto ${isDarkMode ? 'bg-gray-900' : 'bg-gray-800'}  ${isDarkMode ? 'ring-2 ring-blue-400/40 shadow-[0_0_25px_rgba(59,130,246,0.4)] border border-blue-500/20' : ''} rounded-lg p-2 sm:p-4 shadow-2xl`}
                                                            style={{
                                                                width: 'min(600px, 95vw)',
                                                                height: 'min(400px, 60vh)',
                                                                maxWidth: '700px',
                                                                maxHeight: '450px'
                                                            }}>
                                                            {/* Barra superior del navegador */}
                                                            <div className={`w-full h-6 sm:h-8 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-700'} rounded-t-md flex items-center px-2 sm:px-4 gap-2`}>
                                                                {/* Botones de control */}
                                                                <div className="flex gap-1 sm:gap-2">
                                                                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                                                                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                                                                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                                                                </div>

                                                                {/* Barra de direcciones */}
                                                                <div className={`flex-1 h-3 sm:h-5 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-600'} rounded ml-2 sm:ml-4 px-2 sm:px-3 flex items-center`}>
                                                                    <div className="w-2 h-2 sm:w-3 sm:h-3 border border-gray-400 rounded-full mr-1 sm:mr-2"></div>
                                                                    <div className="text-xs text-gray-400 hidden sm:block">localhost:3000</div>
                                                                </div>
                                                            </div>

                                                            {/* Pantalla */}
                                                            <div className="relative w-full bg-white rounded-b-md overflow-hidden" style={{ height: 'calc(100% - 1.5rem)' }}>
                                                                <AnimatePresence mode="wait">
                                                                    <motion.img
                                                                        key={`${currentViewType}-${currentImageIndex}`}
                                                                        src={getCurrentImages()[currentImageIndex]}
                                                                        alt={`${selectedProject.title} - Vista ${currentViewType} - Imagen ${currentImageIndex + 1}`}
                                                                        initial={{ opacity: 0, scale: 0.95 }}
                                                                        animate={{ opacity: 1, scale: 1 }}
                                                                        exit={{ opacity: 0, scale: 0.95 }}
                                                                        transition={{ duration: 0.3 }}
                                                                        className="w-full h-full object-contain"
                                                                    />
                                                                </AnimatePresence>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Controles de navegación - Responsivos */}
                                                {getCurrentImages().length > 1 && (
                                                    <div className="flex justify-between w-full mt-4 sm:mt-6 px-2 sm:px-4 max-w-md">
                                                        <motion.button
                                                            whileHover={{ scale: 0.9 }}
                                                            whileTap={{ scale: 0.9 }}
                                                            onClick={prevImage}
                                                            className={`p-1 sm:p-2 rounded-full ${isDarkMode ? 'bg-slate-700 text-white' : 'bg-slate-200 text-slate-800'}`}
                                                        >
                                                            <ChevronLeft size={20} className="sm:w-5 sm:h-5" />
                                                        </motion.button>

                                                        <div className="flex items-center gap-2 sm:gap-3">
                                                            {getCurrentImages().map((_, index) => (
                                                                <motion.button
                                                                    key={index}
                                                                    whileHover={{ scale: 1.2 }}
                                                                    whileTap={{ scale: 0.9 }}
                                                                    onClick={() => goToImage(index)}
                                                                    className={`rounded-full ${index === currentImageIndex
                                                                        ? (isDarkMode ? 'bg-blue-400 w-3 h-3 sm:w-4 sm:h-4' : 'bg-blue-500 w-3 h-3 sm:w-4 sm:h-4')
                                                                        : (isDarkMode ? 'bg-slate-600 w-2 h-2 sm:w-3 sm:h-3' : 'bg-slate-300 w-2 h-2 sm:w-3 sm:h-3')
                                                                        }`}
                                                                />
                                                            ))}
                                                        </div>

                                                        <motion.button
                                                            whileHover={{ scale: 0.9 }}
                                                            whileTap={{ scale: 0.9 }}
                                                            onClick={nextImage}
                                                            className={`p-1 sm:p-2 rounded-full ${isDarkMode ? 'bg-slate-700 text-white' : 'bg-slate-200 text-slate-800'}`}
                                                        >
                                                            <ChevronRight size={20} className="sm:w-5 sm:h-5" />
                                                        </motion.button>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence >
        </>
    );
}