import axios from "axios";
import type { Categoria } from "../models/Categoria";

const BASE_URL = "https://farmacia-ug0p.onrender.com/";

export const api = axios.create({
    baseURL: BASE_URL,
});

export async function buscarTodasCategorias() {
    const resposta = await api.get<Categoria[]>("/categorias");
    return resposta.data;
}

export async function buscarCategoriaPorId(id: number) {
    const resposta = await api.get<Categoria>(`/categorias/${id}`);
    return resposta.data;
}

export async function cadastrarCategoria(categoria: Omit<Categoria, "id">) {
    const resposta = await api.post<Categoria>("/categorias", categoria);
    return resposta.data;
}


export async function atualizarCategoria(categoria: Categoria) {
    const resposta = await api.put<Categoria>("/categorias", categoria);
    return resposta.data;
}

export async function deletarCategoria(id: number) {
    await api.delete(`/categorias/${id}`);
}
