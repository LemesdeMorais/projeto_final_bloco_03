import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

import type { Categoria } from "../../models/Categoria";
import {
    buscarCategoriaPorId,
    deletarCategoria,
} from "../../services/categoriaService";
import { toastAlert } from "../../utils/toastAlert";

export default function DeleteCategoria() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria | null>(null);

    useEffect(() => {
        async function carregarCategoria() {
            if (id) {
                try {
                    const dados = await buscarCategoriaPorId(Number(id));
                    setCategoria(dados);
                } catch (erro) {
                    console.error(erro);
                    toastAlert("Erro ao carregar categoria", "erro");
                }
            }
        }

        carregarCategoria();
    }, [id]);

    async function handleDelete() {
        if (!id) return;

        try {
            await deletarCategoria(Number(id));
            toastAlert("Categoria deletada com sucesso!", "sucesso");
            navigate("/categorias");
        } catch (erro) {
            console.error(erro);
            toastAlert("Erro ao deletar categoria", "erro");
        }
    }

    if (!categoria) {
        return (
            <section className="max-w-xl mx-auto px-4 py-8">
                <p className="text-slate-600">Carregando categoria...</p>
            </section>
        );
    }

    return (
        <section className="max-w-xl mx-auto px-4 py-8">
            <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
                Deletar categoria
            </h2>

            <div className="bg-white rounded-2xl shadow-md border border-red-200 p-6 space-y-4">
                <p className="text-slate-700">
                    Tem certeza que deseja deletar a categoria{" "}
                    <span className="font-bold">{categoria.nome}</span>?
                </p>

                <p className="text-sm text-slate-500">
                    Esta ação não poderá ser desfeita.
                </p>

                <div className="flex justify-end gap-3 pt-2">
                    <Link
                        to="/categorias"
                        className="px-4 py-2 rounded-full border border-slate-300 text-slate-600 text-sm hover:bg-slate-50 transition"
                    >
                        Cancelar
                    </Link>
                    <button
                        onClick={handleDelete}
                        className="px-4 py-2 rounded-full bg-red-600 text-white font-semibold text-sm shadow-md hover:bg-red-700 transition"
                    >
                        Deletar
                    </button>
                </div>
            </div>
        </section>
    );
}
