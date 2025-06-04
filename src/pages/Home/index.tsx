import Header from 'components/Header';
import styles from './Home.module.scss';
import imgInicial from 'assets/images/inicial.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store/index';
import Botao from 'components/Botao';

export default function Home() {
  const navigate = useNavigate();
  const categorias = useSelector((state: RootState) => state.categorias);

  return (
    <div>
      <Header
        titulo="Classificados Tech"
        descricao="Compre diversos tipos de produtos no melhor site do Brasil!"
        imagem={imgInicial}
        className={styles.header}
      >
        <Botao type="button" onClick={() => 0}>
          Quero anunciar!
        </Botao>
      </Header>
      <div className={styles.categorias}>
        <div className={styles.title}>
          <h2>Categorias</h2>
        </div>
        <div className={styles.container}>
          {categorias.map((categoria, index) => (
            <div
              key={index}
              onClick={() => navigate(`/categoria/${categoria.id}`)}
            >
              <img src={categoria.thumbnail} alt={categoria.nome} />
              <h3>{categoria.nome}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
