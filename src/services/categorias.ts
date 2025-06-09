import { createAsyncThunk } from '@reduxjs/toolkit';
import { Categoria } from 'types/Categoria';
import instance from 'config/api';

export const buscarCategorias = createAsyncThunk(
  'categorias/buscar',
  async (_, { rejectWithValue }) => {
    try {
      const resposta = await instance.get<Categoria[]>('/categorias');
      return resposta.data;
    } catch (erro) {
      return rejectWithValue(`Erro ao buscar categorias: ${erro}`);
    }
  }
);
