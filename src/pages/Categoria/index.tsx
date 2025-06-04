import styles from './Categoria.module.scss';
import { RootState } from 'store/index';
import Header from 'components/Header';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Item from 'components/Item';
import Botao from 'components/Botao';

export default function Categoria() {
  const navigate = useNavigate();
  const { nomeCategoria } = useParams();
  const { categoria, itens } = useSelector((state: RootState) => {
    const regexp = new RegExp(state.busca, 'i');
    return {
      categoria: state.categorias.find(
        (categoria) => categoria.id === nomeCategoria
      ),
      itens: state.itens.filter(
        (item) => item.categoria === nomeCategoria && item.titulo.match(regexp)
      ),
    };
  });
  return (
    <div>
      <Header
        titulo={categoria?.nome || ''}
        descricao={categoria?.descricao || ''}
        imagem={categoria?.header || ''}
      >
        <Botao
          type="button"
          onClick={() => navigate(`/anuncie/${nomeCategoria}`)}
        >
          Quero anunciar!
        </Botao>
      </Header>
      <div className={styles.itens}>
        {itens?.map((item) => <Item key={item.id} {...item} />)}
      </div>
    </div>
  );
}
