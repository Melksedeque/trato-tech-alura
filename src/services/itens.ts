import { createAsyncThunk } from '@reduxjs/toolkit';
import { Item } from 'types/Item';
import instance from 'config/api';

export const buscarItens = createAsyncThunk(
  'itens/buscar',
  async (_, { rejectWithValue }) => {
    try {
      const resposta = await instance.get<Item[]>('/itens');
      return resposta.data;
    } catch (erro) {
      return rejectWithValue(`Erro ao buscar itens: ${erro}`);
    }
  }
);

export const cadastrarItem = createAsyncThunk(
  'itens/cadastrar',
  async (item: Omit<Item, 'id'>, { rejectWithValue }) => {
    try {
      const resposta = await instance.post<Item>('/itens', item);
      return resposta.data;
    } catch (erro) {
      return rejectWithValue(`Erro ao cadastrar item: ${erro}`);
    }
  }
);
