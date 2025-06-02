import styles from './Anuncie.module.scss';
import Header from 'components/Header';
import { useSelector } from 'react-redux';
import { RootState } from 'store/index';

export default function Anuncie() {
  const categorias = useSelector((state: RootState) =>
    state.categorias.map(({ nome, id }) => ({ nome, id }))
  );

  return (
    <div className={styles.anuncie}>
      <Header
        titulo="Anunice aqui!"
        descricao="Anuncie seus produtos conosco"
      />
      <form action="" className={styles.formulario}>
        <input
          type="text"
          placeholder="Nome do produto"
          alt="Nome do Produto"
        />
        <input
          type="text"
          placeholder="Descrição do produto"
          alt="Descrição do Produto"
        />
        <input
          type="url"
          placeholder="URL da imagem do produto"
          alt="URL da imagem do Produto"
        />
        <select name="" id="">
          <option value="" disabled selected>
            -- Selecione a categoria --
          </option>
          {categorias.map(({ nome, id }) => (
            <option key={id} value={id}>
              {nome}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Preço do produto"
          alt="Preço do Produto"
        />
        <button type="submit">Cadastrar produto</button>
      </form>
    </div>
  );
}
