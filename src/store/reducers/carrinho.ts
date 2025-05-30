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
    },
});

export const { mudarCarrinho } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;