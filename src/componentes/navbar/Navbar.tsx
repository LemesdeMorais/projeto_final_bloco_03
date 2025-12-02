import FarmaIcon from "/farma.svg";


export default function NavBar() {
    return (
        <header className="w-full bg-gradient-main shadow-lg">
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
                {/* Logo / nome da farmácia */}
                <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-2xl bg-white/90 flex items-center justify-center shadow-md animate-float">
                        <img
                            src={FarmaIcon}
                            alt="Farmácia Online"
                            className="h-7 w-7"
                        />
                    </div>
                    <div className="flex flex-col leading-tight">
                        <span className="text-white font-extrabold text-lg md:text-xl drop-shadow-sm">
                            Mandrágora Medicamentos
                        </span>
                        <span className="text-white/80 text-xs md:text-sm">
                            saúde com um clique
                        </span>
                    </div>
                </div>

                {/* Links */}
                <ul className="hidden md:flex gap-4 lg:gap-6 text-sm md:text-base font-medium text-white">
                    <li className="px-3 py-1 rounded-full hover:bg-white/15 transition transform hover:-translate-y-0.5 cursor-pointer">
                        Home
                    </li>
                    <li className="px-3 py-1 rounded-full hover:bg-white/15 transition transform hover:-translate-y-0.5 cursor-pointer">
                        Categorias
                    </li>
                    <li className="px-3 py-1 rounded-full hover:bg-white/15 transition transform hover:-translate-y-0.5 cursor-pointer">
                        Produtos
                    </li>
                </ul>

                {/* Botão login / ação
                <button className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-primary-dark font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition">
                    Entrar
                </button> */}

                {/* Versão mobile futura (menu hamburguer) */}
                <div className="md:hidden text-white font-bold text-xl">
                    ☰
                </div>
            </nav>
        </header>
    );
}
