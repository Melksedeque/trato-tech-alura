export interface Item {
    titulo: string;
    preco: number;
    descricao: string;
    foto: string;
    categoria: string;
    id: string;
    favorito: boolean;
}

export interface ItemCarrinho extends Item {
    quantidade: number;
}

export interface ItemState {
    itens: Item[];
}