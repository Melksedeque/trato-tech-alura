export interface CartItem {
    id: string;
    quantidade: number;
}

export interface CarrinhoState {
    itensCarrinho: CartItem[];
}