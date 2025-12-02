export default function Footer() {
    return (
        <footer className="w-full bg-gradient-main text-white mt-10">
            <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
                <p className="text-xs md:text-sm text-white/90">
                    © {new Date().getFullYear()} Mandrágora Medicamentos
                </p>

                <div className="relative inline-flex items-center gap-2 text-xs md:text-sm">
                    <span className="font-medium">Feito com carinho por</span>
                    <span className="relative inline-flex overflow-hidden rounded-full bg-white/20 px-3 py-1">
                        <span className="absolute inset-0 bg-white/40 blur-xl opacity-60 animate-shimmer" />
                        <a
                            href="https://www.linkedin.com/in/rafaela-lemes-a310861b6/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative z-10 font-semibold text-white hover:text-[#2BD998] transition-colors duration-300 group">
                            Rafaela Lemes
                            <span className="inline-block ml-1 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300">
                                💚
                            </span>
                        </a>

                    </span>
                </div>
            </div>
        </footer>
    );
}
