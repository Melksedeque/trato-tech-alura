import { createSlice } from '@reduxjs/toolkit';
import automotivoThumb from 'assets/images/categorias/thumbnails/automotivo.png';
import eletronicosThumb from 'assets/images/categorias/thumbnails/eletronicos.png';
import escritorioThumb from 'assets/images/categorias/thumbnails/escritorio.png';
import jogosThumb from 'assets/images/categorias/thumbnails/jogos.png';
import somThumb from 'assets/images/categorias/thumbnails/som.png';
import automotivoHeader from 'assets/images/categorias/header/automotivo.png';
import eletronicosHeader from 'assets/images/categorias/header/eletronicos.png';
import escritorioHeader from 'assets/images/categorias/header/escritorio.png';
import jogosHeader from 'assets/images/categorias/header/jogos.png';
import somHeader from 'assets/images/categorias/header/som.png';

const initialState = [
  {
    nome: 'Eletrônicos',
    thumbnail: eletronicosThumb,
    header: eletronicosHeader,
    id: 'eletronicos',
    descricao: 'Os melhores e mais atuais dispositivos eletrônicos estão aqui!',
  },
  {
    nome: 'Automotivo',
    thumbnail: automotivoThumb,
    header: automotivoHeader,
    id: 'automotivos',
    descricao:
      'Encontre aqui equipamentos para deixar seu carro com a sua cara!',
  },
  {
    nome: 'Jogos',
    thumbnail: jogosThumb,
    header: jogosHeader,
    id: 'jogos',
    descricao: 'Adquira os consoles e jogos mais atuais do mercado !',
  },
  {
    nome: 'Escritório',
    thumbnail: escritorioThumb,
    header: escritorioHeader,
    id: 'escritorio',
    descricao: 'Tudo para o que escritório ficar incrível!',
  },
  {
    nome: 'Som e imagem',
    thumbnail: somThumb,
    header: somHeader,
    id: 'som',
    descricao: 'Curta suas músicas e seus filmes com a melhor qualidade!',
  },
];

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {},
});

export default categoriasSlice.reducer;
