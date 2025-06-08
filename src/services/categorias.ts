import { createAsyncThunk } from '@reduxjs/toolkit';
import { Categoria } from 'types/Categoria';
import instance from 'common/config/api';

// Thunk para buscar categorias
export const buscarCategorias = createAsyncThunk(
  'categorias/buscar',
  async (_, { rejectWithValue }) => {
    try {
      const resposta = await instance.get<Categoria[]>('categorias');
      return resposta.data;
    } catch (erro) {
      // Retorna o erro para ser capturado pelo estado de rejected
      return rejectWithValue('Erro ao buscar categorias');
    }
  }
);