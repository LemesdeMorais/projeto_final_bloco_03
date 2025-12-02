import type { Produto } from "../models/Produto";
import { api } from "./categoriaService";


export async function buscarTodosProdutos() {
    const resposta = await api.get<Produto[]>("/produtos");
    return resposta.data;
}


export async function buscarProdutoPorId(id: number) {
    const resposta = await api.get<Produto>(`/produtos/${id}`);
    return resposta.data;
}


export async function cadastrarProduto(produto: Omit<Produto, "id">) {
    const resposta = await api.post<Produto>("/produtos", produto);
    return resposta.data;
}


export async function atualizarProduto(produto: Produto) {
    const resposta = await api.put<Produto>("/produtos", produto);
    return resposta.data;
}


export async function deletarProduto(id: number) {
    await api.delete(`/produtos/${id}`);
}
