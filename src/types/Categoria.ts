export interface Categoria {
    nome: string;
    thumbnail: string;
    header: string;
    id: string;
    descricao: string;
}

export interface CategoriaState {
    categorias: Categoria[];
}