import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Categoria } from 'types/Categoria';
import { buscarCategorias } from 'services/categorias';

interface CategoriasState {
  items: Categoria[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CategoriasState = {
  items: [],
  status: 'idle',
  error: null,
};

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {
    adicionarCategorias: (state, { payload }: PayloadAction<Categoria[]>) => {
      state.status = 'succeeded';
      state.items = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(buscarCategorias.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(buscarCategorias.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.items = payload;
      })
      .addCase(buscarCategorias.rejected, (state, action) => {
        state.status = 'failed';
        state.error =
          (action.payload as string) || 'Ocorreu um erro desconhecido';
      });
  },
});

export const { adicionarCategorias } = categoriasSlice.actions;

export default categoriasSlice.reducer;
