import styles from './Categoria.module.scss';
import { RootState } from 'store/index';
import Header from 'components/Header';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Item from 'components/Item';
import Botao from 'components/Botao';

export default function Categoria() {
  const navigate = useNavigate();
  const { nomeCategoria } = useParams();
  const { categoria, itens } = useSelector((state: RootState) => {
    const regexp = new RegExp(state.busca, 'i');
    return {
      categoria: state.categorias.items.find(
        (categoria) => categoria.id === nomeCategoria
      ),
      itens: state.itens.items.filter(
        (item) => item.categoria === nomeCategoria && item.titulo.match(regexp)
      ),
    };
  });

  const { status: statusCategorias } = useSelector(
    (state: RootState) => state.categorias
  );
  const { status: statusItens } = useSelector(
    (state: RootState) => state.itens
  );

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
        {statusCategorias === 'loading' && <p>Carregando categorias...</p>}
        {statusItens === 'loading' && <p>Carregando itens...</p>}
        {statusCategorias === 'failed' && <p>Erro ao carregar categorias.</p>}
        {statusItens === 'failed' && <p>Erro ao carregar itens.</p>}
        {itens?.map((item) => <Item key={item.id} {...item} />)}
      </div>
    </div>
  );
}
