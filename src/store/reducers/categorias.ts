import { createSlice } from '@reduxjs/toolkit';
import { buscarCategorias } from 'services/categorias';
import { Categoria } from 'types/Categoria';

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState: [] as Categoria[],
  reducers: {
    adicionarCategorias: (_state, { payload }) => {
      return payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(buscarCategorias.fulfilled, (_state, { payload }) => {
      return payload;
    });
  },
});

export const { adicionarCategorias } = categoriasSlice.actions;
export default categoriasSlice.reducer;
