import { createSlice } from '@reduxjs/toolkit';
import { Categoria } from 'types/Categoria';

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState: [] as Categoria[],
  reducers: {
    adicionarCategorias: (_state, { payload }) => {
      return payload;
    },
  },
});

export const { adicionarCategorias } = categoriasSlice.actions;
export default categoriasSlice.reducer;
