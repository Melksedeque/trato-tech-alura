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
            return state.map(itemNoCarrinho => {
                if (itemNoCarrinho.id === payload.id) {
                    itemNoCarrinho.quantidade += payload.quantidade;
                }
                return itemNoCarrinho;
            });
        },
    },
});

export const { mudarCarrinho, mudarQuantidade } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;