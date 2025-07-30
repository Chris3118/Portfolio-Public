"use client";

interface FooterProps {
    isDarkMode: boolean;
}

export default function Footer({ isDarkMode }: FooterProps) {

    return (
        <footer className={`py-6 text-center border-t ${isDarkMode
            ? "bg-slate-900 border-slate-700 text-slate-300"
            : "bg-white border-blue-200 text-slate-700"
            }`}>
            <p className="font-medium">© 2025 Ing. Christian Dávila. Todos los derechos reservados.</p>

        </footer>
    );
}