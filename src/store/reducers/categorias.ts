import { createStandaloneToast } from '@chakra-ui/toast';
import { createSlice } from '@reduxjs/toolkit';
import { buscarCategorias } from 'services/categorias';
import { Categoria } from 'types/Categoria';

const { toast } = createStandaloneToast();

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState: [] as Categoria[],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(buscarCategorias.fulfilled, (_state, { payload }) => {
        toast({
          title: 'Sucesso!',
          description: 'Categorias carregadas com sucesso!',
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
        return payload;
      })
      .addCase(buscarCategorias.pending, () => {
        toast({
          title: 'Carregando...',
          description: 'As categorias estão sendo carregadas',
          status: 'loading',
          duration: 2000,
          isClosable: true,
        });
      })
      .addCase(buscarCategorias.rejected, (_state, { payload }) => {
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

export default categoriasSlice.reducer;
