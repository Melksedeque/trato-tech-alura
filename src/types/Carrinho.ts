export interface CartItem {
    id: string;
    quantidade: number;
}

export type CarrinhoState = CartItem[];
