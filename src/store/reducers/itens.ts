import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { Item } from 'types/Item';
import { buscarItens } from 'services/itens';

interface ItensState {
  items: Item[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ItensState = {
  items: [],
  status: 'idle',
  error: null
};

const itensSlice = createSlice({
  name: 'itens',
  initialState,
  reducers: {
    mudarFavorito: (state, { payload }) => {
      state.items = state.items.map((item) => {
        if (item.id === payload) {
          return { ...item, favorito: !item.favorito };
        }
        return item;
      });
    },
    cadastrarItem: (state, { payload }) => {
      state.items.push({ ...payload, id: uuid() });
    },
    mudarItem: (state, { payload }) => {
      const index = state.items.findIndex((item) => item.id === payload.id);
      Object.assign(state.items[index], payload.item);
    },
    deletarItem: (state, { payload }) => {
      const index = state.items.findIndex((item) => item.id === payload);
      state.items.splice(index, 1);
    },
    adicionarItens: (state, { payload }: PayloadAction<Item[]>) => {
      state.items = payload;
      state.status = 'succeeded';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(buscarItens.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(buscarItens.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.items = payload;
      })
      .addCase(buscarItens.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string || 'Ocorreu um erro desconhecido';
      });
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
