import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

import type { Produto } from "../../models/Produto";
import { buscarProdutoPorId, deletarProduto } from "../../services/produtoService";
import { toastAlert } from "../../utils/toastAlert";

export default function DeleteProduto() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [produto, setProduto] = useState<Produto | null>(null);

    useEffect(() => {
        async function carregarProduto() {
            if (id) {
                try {
                    const dados = await buscarProdutoPorId(Number(id));
                    setProduto(dados);
                } catch (erro) {
                    console.error(erro);
                    toastAlert("Erro ao carregar produto", "erro");
                }
            }
        }

        carregarProduto();
    }, [id]);

    async function handleDelete() {
        if (!id) return;

        try {
            await deletarProduto(Number(id));
            toastAlert("Produto deletado com sucesso!", "sucesso");
            navigate("/produtos");
        } catch (erro) {
            console.error(erro);
            toastAlert("Erro ao deletar produto", "erro");
        }
    }

    if (!produto) {
        return (
            <section className="max-w-xl mx-auto px-4 py-8">
                <p className="text-slate-600">Carregando produto...</p>
            </section>
        );
    }

    return (
        <section className="max-w-xl mx-auto px-4 py-8">
            <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
                Deletar produto
            </h2>

            <div className="bg-white rounded-2xl shadow-md border border-red-200 p-6 space-y-4">
                <p className="text-slate-700">
                    Tem certeza que deseja deletar o produto{" "}
                    <span className="font-bold">{produto.nome}</span>?
                </p>

                <p className="text-sm text-slate-500">
                    Esta ação não poderá ser desfeita.
                </p>

                <div className="flex justify-end gap-3 pt-2">
                    <Link
                        to="/produtos"
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
