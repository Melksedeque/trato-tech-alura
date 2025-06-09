import { createSlice } from '@reduxjs/toolkit';
import { buscarCategorias } from 'services/categorias';
import { Categoria } from 'types/Categoria';

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState: [] as Categoria[],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(buscarCategorias.fulfilled, (_state, { payload }) => {
        console.log('Categorias encontradas!', payload);
        return payload;
      })
      .addCase(buscarCategorias.pending, (state, { payload }) => {
        console.log('Carregando categorias...', state, payload);
      })
      .addCase(buscarCategorias.rejected, (state, { payload }) => {
        console.log('Erro ao carregar categorias', state, payload);
      });
  },
});

export default categoriasSlice.reducer;
