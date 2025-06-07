import { createSlice } from '@reduxjs/toolkit';
import { Categoria } from 'types/Categoria';

const initialState: Categoria = [];

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {},
});

export default categoriasSlice.reducer;
