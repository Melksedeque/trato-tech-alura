import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { Item } from 'types/Item';

const itensSlice = createSlice({
  name: 'itens',
  initialState: [] as Item[],
  reducers: {
    mudarFavorito: (state, { payload }) => {
      state.map((item) => {
        if (item.id === payload) {
          item.favorito = !item.favorito;
        }
        return item;
      });
    },
    cadastrarItem: (state, { payload }) => {
      state.push({ ...payload, id: uuid() });
    },
    mudarItem: (state, { payload }) => {
      const index = state.findIndex((item) => item.id === payload.id);
      Object.assign(state[index], payload.item);
    },
    deletarItem: (state, { payload }) => {
      const index = state.findIndex((item) => item.id === payload);
      state.splice(index, 1);
    },
    adicionarItens: (_state, { payload }: PayloadAction<Item[]>) => {
      return payload;
    },
  },
});

export const {
  adicionarItens,
  mudarFavorito,
  cadastrarItem,
  mudarItem,
  deletarItem,
} = itensSlice.actions;

export default itensSlice.reducer;
