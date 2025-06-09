import { createSlice } from '@reduxjs/toolkit';
import { buscarCategorias } from 'services/categorias';
import { Categoria } from 'types/Categoria';

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState: [] as Categoria[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(buscarCategorias.fulfilled, (_state, { payload }) => {
      return payload;
    });
  },
});

export default categoriasSlice.reducer;
