import { Link } from "react-router-dom";
import type { Categoria } from "../../models/Categoria";

interface CardCategoriaProps {
    categoria: Categoria;
}

export default function CardCategoria({ categoria }: CardCategoriaProps) {
    return (
        <div className="bg-white rounded-2xl p-4 shadow-md border border-primary-light/30 flex flex-col justify-between">
            <div>
                <h3 className="text-lg font-bold text-primary-dark mb-1">
                    {categoria.nome}
                </h3>
                <p className="text-xs text-slate-500">ID: {categoria.id}</p>
            </div>

            <div className="flex justify-end gap-2 mt-4">
                <Link
                    to={`/categorias/editar/${categoria.id}`}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-[#2BD998] to-[#00C5A6]text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-transform transition-shadow duration-300"
                >
                    Editar
                </Link>
                <Link
                    to={`/categorias/deletar/${categoria.id}`}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold bg-red-600 text-white hover:bg-red-700 transition"
                >
                    Deletar
                </Link>
            </div>
        </div>
    );
}
