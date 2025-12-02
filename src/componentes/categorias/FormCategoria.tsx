import { type FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import type { Categoria } from "../../models/Categoria";
import {
    buscarCategoriaPorId,
    cadastrarCategoria,
    atualizarCategoria,
} from "../../services/categoriaService";
import { toastAlert } from "../../utils/toastAlert";

export default function FormCategoria() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [nome, setNome] = useState("");

    const editando = Boolean(id);

    useEffect(() => {
        async function carregarCategoria() {
            if (id) {
                try {
                    const dados = await buscarCategoriaPorId(Number(id));
                    setNome(dados.nome);
                } catch (erro) {
                    console.error(erro);
                    toastAlert("Erro ao carregar dados da categoria", "erro");
                }
            }
        }

        carregarCategoria();
    }, [id]);

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        try {
            if (editando && id) {
                const categoria: Categoria = { id: Number(id), nome };
                await atualizarCategoria(categoria);
                toastAlert("Categoria atualizada com sucesso!", "sucesso");
            } else {
                await cadastrarCategoria({ nome });
                toastAlert("Categoria cadastrada com sucesso!", "sucesso");
            }

            navigate("/categorias");
        } catch (erro) {
            console.error(erro);
            toastAlert("Erro ao salvar categoria", "erro");
        }
    }

    return (
        <section className="max-w-xl mx-auto px-4 py-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">
                {editando ? "Editar categoria" : "Cadastrar nova categoria"}
            </h2>

            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-md border border-primary-light/30 p-6 space-y-4"
            >
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">
                        Nome
                    </label>
                    <input
                        type="text"
                        required
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-dark"
                    />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                    <button
                        type="button"
                        onClick={() => navigate("/categorias")}
                        className="px-4 py-2 rounded-full border border-slate-300 text-slate-600 text-sm hover:bg-slate-50 transition"
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 rounded-full bg-gradient-main text-white font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition"
                    >
                        {editando ? "Salvar alterações" : "Cadastrar"}
                    </button>
                </div>
            </form>
        </section>
    );
}
