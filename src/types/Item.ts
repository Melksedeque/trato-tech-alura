export interface Item {
    nome: string;
    preco: number;
    descricao: string;
    thumbnail: string;
    categoria: string;
    id: string;
}

export interface ItemState {
    itens: Item[];
}