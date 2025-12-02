import { type FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import type { Produto } from "../../models/Produto";
import type { Categoria } from "../../models/Categoria";
import {
    buscarTodasCategorias,
} from "../../services/categoriaService";
import {
    buscarProdutoPorId,
    cadastrarProduto,
    atualizarProduto,
} from "../../services/produtoService";
import { toastAlert } from "../../utils/toastAlert";

export default function FormProduto() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState<number | "">("");
    const [foto, setFoto] = useState("");
    const [categoriaId, setCategoriaId] = useState<number | "">("");
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const editando = Boolean(id);


    useEffect(() => {
        async function carregarCategorias() {
            try {
                const dados = await buscarTodasCategorias();
                setCategorias(dados);
            } catch (erro) {
                console.error(erro);
                toastAlert("Erro ao carregar categorias", "erro");
            }
        }

        carregarCategorias();
    }, []);


    useEffect(() => {
        async function carregarProduto() {
            if (id) {
                try {
                    const dados = await buscarProdutoPorId(Number(id));
                    setNome(dados.nome);
                    setPreco(Number(dados.preco));
                    setFoto(dados.foto || "");
                    setCategoriaId(dados.categoria?.id ?? "");
                } catch (erro) {
                    console.error(erro);
                    toastAlert("Erro ao carregar produto", "erro");
                }
            }
        }

        carregarProduto();
    }, [id]);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        if (preco === "" || categoriaId === "") {
            toastAlert("Preencha preço e categoria", "aviso");
            return;
        }

        const categoriaSelecionada =
            categorias.find((cat) => cat.id === Number(categoriaId)) || undefined;

        const produto: Produto = {
            id: editando && id ? Number(id) : 0,
            nome,
            preco: Number(preco),
            foto: foto || "",
            categoria: categoriaSelecionada,
        };

        try {
            if (editando && id) {

                await atualizarProduto(produto);
                toastAlert("Produto atualizado com sucesso!", "sucesso");
            } else {

                const { id: _ignorandoId, ...produtoSemId } = produto; // tira o id

                await cadastrarProduto(produtoSemId); // aqui o tipo é Omit<Produto, "id">
                toastAlert("Produto cadastrado com sucesso!", "sucesso");
            }

            navigate("/produtos");
        } catch (erro) {
            console.error(erro);
            toastAlert("Erro ao salvar produto", "erro");
        }
    }


    return (
        <section className="max-w-xl mx-auto px-4 py-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">
                {editando ? "Editar produto" : "Cadastrar novo produto"}
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

                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">
                        Preço
                    </label>
                    <input
                        type="number"
                        step="0.01"
                        required
                        value={preco}
                        onChange={(e) => setPreco(e.target.value === "" ? "" : Number(e.target.value))}
                        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-dark"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">
                        Foto (URL)
                    </label>
                    <input
                        type="text"
                        value={foto}
                        onChange={(e) => setFoto(e.target.value)}
                        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-dark"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">
                        Categoria
                    </label>
                    <select
                        required
                        value={categoriaId}
                        onChange={(e) => setCategoriaId(e.target.value === "" ? "" : Number(e.target.value))}
                        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-dark"
                    >
                        <option value="">Selecione uma categoria</option>
                        {categorias.map((categoria) => (
                            <option key={categoria.id} value={categoria.id}>
                                {categoria.nome}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex justify-end gap-3 pt-2">
                    <button
                        type="button"
                        onClick={() => navigate("/produtos")}
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
