import { createAsyncThunk } from '@reduxjs/toolkit';
import { Item } from 'types/Item';
import instance from 'config/api';

// Thunk para buscar itens
export const buscarItens = createAsyncThunk(
  'itens/buscar',
  async (_, { rejectWithValue }) => {
    try {
      const resposta = await instance.get<Item[]>('itens');
      return resposta.data;
    } catch (erro) {
      return rejectWithValue(`Erro ao buscar itens: ${erro}`);
    }
  }
);
