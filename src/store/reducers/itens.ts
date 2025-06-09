import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { Item } from 'types/Item';
import { buscarItens } from 'services/itens';
import { createStandaloneToast } from '@chakra-ui/toast';

const { toast } = createStandaloneToast();

const itensSlice = createSlice({
  name: 'itens',
  initialState: [] as Item[],
  reducers: {
    mudarFavorito: (state, { payload }) => {
      state = state.map((item) => {
        if (item.id === payload) {
          return { ...item, favorito: !item.favorito };
        }
        return item;
      });
    },
    cadastrarItem: (state, { payload }) => {
      state.push({ ...payload, id: uuid() });
    },
    mudarItem: (state, { payload }) => {
      const index = state.findIndex((item) => item.id === payload.id);
      Object.assign(state[index], payload.item);
    },
    deletarItem: (state, { payload }) => {
      const index = state.findIndex((item) => item.id === payload);
      state.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(buscarItens.fulfilled, (_state, { payload }) => {
        toast({
          title: 'Sucesso!',
          description: 'Itens carregados com sucesso!',
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
        return payload;
      })
      .addCase(buscarItens.pending, () => {
        toast({
          title: 'Carregando...',
          description: 'Os itens estão sendo carregados.',
          status: 'loading',
          duration: 2000,
          isClosable: true,
        });
      })
      .addCase(buscarItens.rejected, (_state, { payload }) => {
        toast({
          title: 'Erro!',
          description: payload as string,
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      });
  },
});

export const { cadastrarItem, deletarItem, mudarFavorito, mudarItem } =
  itensSlice.actions;

export default itensSlice.reducer;
