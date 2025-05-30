export interface CartItem {
    id: string;
    quantidade: number;
}

export interface CarrinhoState extends Array<CartItem> {}