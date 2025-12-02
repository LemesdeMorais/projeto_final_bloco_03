import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

import type { Categoria } from "../../models/Categoria";
import { buscarTodasCategorias } from "../../services/categoriaService";
import { toastAlert } from "../../utils/toastAlert";
import CardCategoria from "./CardCategoria";

export default function ListaCategorias() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [loading, setLoading] = useState(true);

    async function carregarCategorias() {
        try {
            setLoading(true);
            const dados = await buscarTodasCategorias();
            setCategorias(dados);
        } catch (erro) {
            console.error(erro);
            toastAlert("Erro ao buscar categorias", "erro");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        carregarCategorias();
    }, []);

    return (
        <section className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-dark">
                    Categorias
                </h2>

                <Link
                    to="/categorias/nova"
                    className="px-4 py-2 rounded-full bg-gradient-main text-white font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition"
                >
                    + Nova categoria
                </Link>
            </div>

            {loading ? (
                <div className="flex justify-center py-10">
                    <ClipLoader />
                </div>
            ) : categorias.length === 0 ? (
                <p className="text-slate-500">
                    Nenhuma categoria cadastrada ainda.
                </p>
            ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {categorias.map((categoria) => (
                        <CardCategoria key={categoria.id} categoria={categoria} />
                    ))}
                </div>
            )}
        </section>
    );
}
