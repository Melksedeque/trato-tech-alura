import { createSlice } from "@reduxjs/toolkit";
import { CarrinhoState } from "types/Carrinho";

const initialState: CarrinhoState = [];

const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        mudarCarrinho: (state, {payload}) => {
            const existeItem = state.some(item => item.id === payload);

            if (!existeItem) return[
                ...state,
                {
                    id: payload,
                    quantidade: 1,
                }
            ];
            return state.filter(item => item.id !== payload);
        },
        mudarQuantidade: (state: CarrinhoState, {payload}: {payload: {id: string, quantidade: number}}) => {
            const itemNoCarrinho = state.find(item => item.id === payload.id);
            if (itemNoCarrinho) {
                itemNoCarrinho.quantidade += payload.quantidade;
            }
        },
    },
});

export const { mudarCarrinho, mudarQuantidade } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;