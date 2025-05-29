export interface Item {
    titulo: string;
    preco: number;
    descricao: string;
    imagem: string;
    categoria: string;
    id: string;
    favorito: boolean;
}

export interface ItemState {
    itens: Item[];
}