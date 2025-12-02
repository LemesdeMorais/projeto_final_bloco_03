import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import FarmaIcon from "/farma.svg";

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full bg-gradient-main shadow-lg">
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">

                <Link
                    to="/"
                    className="flex items-center gap-3 hover:opacity-90 transition"
                    onClick={() => setMenuOpen(false)}
                >
                    <div className="h-9 w-9 rounded-2xl bg-white/90 flex items-center justify-center shadow-md animate-float">
                        <img
                            src={FarmaIcon}
                            alt="Mandrágora Medicamentos"
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
                </Link>


                <ul className="hidden md:flex list-none gap-4 lg:gap-6 text-sm md:text-base font-medium text-white">
                    <li>
                        <NavLink
                            to="/home"
                            className={({ isActive }) =>
                                [
                                    "px-3 py-1 rounded-full transition transform hover:-translate-y-0.5 cursor-pointer",
                                    "hover:bg-white/15",
                                    isActive ? "bg-white/20" : "",
                                ].join(" ")
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/categorias"
                            className={({ isActive }) =>
                                [
                                    "px-3 py-1 rounded-full transition transform hover:-translate-y-0.5 cursor-pointer",
                                    "hover:bg-white/15",
                                    isActive ? "bg-white/20" : "",
                                ].join(" ")
                            }
                        >
                            Categorias
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/produtos"
                            className={({ isActive }) =>
                                [
                                    "px-3 py-1 rounded-full transition transform hover:-translate-y-0.5 cursor-pointer",
                                    "hover:bg-white/15",
                                    isActive ? "bg-white/20" : "",
                                ].join(" ")
                            }
                        >
                            Produtos
                        </NavLink>
                    </li>
                </ul>


                <button
                    onClick={() => setMenuOpen((prev) => !prev)}
                    className="md:hidden text-white font-bold text-2xl focus:outline-none"
                    aria-label="Abrir menu de navegação"
                >
                    {menuOpen ? "×" : "☰"}
                </button>
            </nav>


            {menuOpen && (
                <div className="md:hidden bg-gradient-main shadow-md">
                    <ul className="flex flex-col list-none gap-2 px-4 pb-4 text-white text-base">
                        <li>
                            <NavLink
                                to="/home"
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    [
                                        "block px-2 py-2 rounded-md hover:bg-white/15 transition",
                                        isActive ? "bg-white/20" : "",
                                    ].join(" ")
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/categorias"
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    [
                                        "block px-2 py-2 rounded-md hover:bg-white/15 transition",
                                        isActive ? "bg-white/20" : "",
                                    ].join(" ")
                                }
                            >
                                Categorias
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/produtos"
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    [
                                        "block px-2 py-2 rounded-md hover:bg-white/15 transition",
                                        isActive ? "bg-white/20" : "",
                                    ].join(" ")
                                }
                            >
                                Produtos
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
