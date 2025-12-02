import type { Categoria } from "../models/Categoria";

export interface Produto {
    id: number;
    nome: string;
    preco: number | string;
    foto?: string;
    categoria?: Categoria | null;
}
