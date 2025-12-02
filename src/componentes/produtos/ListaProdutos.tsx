import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

import type { Produto } from "../../models/Produto";
import { buscarTodosProdutos } from "../../services/produtoService";
import { toastAlert } from "../../utils/toastAlert";
import CardProduto from "./CardProduto";

export default function ListaProdutos() {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [loading, setLoading] = useState(true);

    async function carregarProdutos() {
        try {
            setLoading(true);
            const dados = await buscarTodosProdutos();
            setProdutos(dados);
        } catch (erro) {
            console.error(erro);
            toastAlert("Erro ao buscar produtos", "erro");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        carregarProdutos();
    }, []);

    return (
        <section className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-dark">
                    Produtos
                </h2>

                <Link
                    to="/produtos/novo"
                    className="px-4 py-2 rounded-full bg-gradient-main text-white font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition"
                >
                    + Novo produto
                </Link>
            </div>

            {loading ? (
                <div className="flex justify-center py-10">
                    <ClipLoader />
                </div>
            ) : produtos.length === 0 ? (
                <p className="text-slate-500">
                    Nenhum produto cadastrado ainda.
                </p>
            ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {produtos.map((produto) => (
                        <CardProduto key={produto.id} produto={produto} />
                    ))}
                </div>
            )}
        </section>
    );
}
