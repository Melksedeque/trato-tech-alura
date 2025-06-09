import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { Item } from 'types/Item';
import { buscarItens } from 'services/itens';

const itensSlice = createSlice({
  name: 'itens',
  initialState: [] as Item[],
  reducers: {
    mudarFavorito: (state, { payload }) => {
      state = state.map((item) => {
        if (item.id === payload) {
          return { ...item, favorito: !item.favorito };
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
    adicionarItens: (_state, { payload }) => {
      return payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(buscarItens.fulfilled, (_state, { payload }) => {
      return payload;
    });
  },
});

export const {
  adicionarItens,
  cadastrarItem,
  deletarItem,
  mudarFavorito,
  mudarItem,
} = itensSlice.actions;

export default itensSlice.reducer;
