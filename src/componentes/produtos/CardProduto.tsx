import { Link } from "react-router-dom";
import type { Produto } from "../../models/Produto";

interface CardProdutoProps {
    produto: Produto;
}

export default function CardProduto({ produto }: CardProdutoProps) {

    const precoNumber = Number(produto.preco);
    const precoFormatado = isNaN(precoNumber)
        ? produto.preco
        : precoNumber.toFixed(2);

    return (
        <div className="bg-white rounded-2xl p-4 shadow-md border border-primary-light/30 flex flex-col justify-between">
            <div className="space-y-1">
                <h3 className="text-lg font-bold text-primary-dark">
                    {produto.nome}
                </h3>

                <p className="text-sm text-slate-700">
                    Preço:{" "}
                    <span className="font-semibold">
                        R$ {precoFormatado}
                    </span>
                </p>

                {produto.categoria && (
                    <p className="text-xs text-slate-500">
                        Categoria: {produto.categoria.nome}
                    </p>
                )}

                {produto.foto && (
                    <img
                        src={produto.foto}
                        alt={produto.nome}
                        className="mt-2 h-24 w-full object-contain rounded-md bg-slate-50"
                    />
                )}
            </div>

            <div className="flex justify-end gap-2 mt-4">
                <Link
                    to={`/produtos/editar/${produto.id}`}
                    className="
            px-3 py-1.5 rounded-full text-xs font-semibold 
            bg-gradient-to-r from-[#2BD998] to-[#00C5A6]
            text-white shadow-md
            hover:shadow-lg hover:-translate-y-0.5
            transition-transform transition-shadow duration-300
          "
                >
                    Editar
                </Link>
                <Link
                    to={`/produtos/deletar/${produto.id}`}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold bg-red-600 text-white hover:bg-red-700 transition"
                >
                    Deletar
                </Link>
            </div>
        </div>
    );
}
