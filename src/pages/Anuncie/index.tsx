import Botao from 'components/Botao';
import styles from './Anuncie.module.scss';
import Header from 'components/Header';
import { useSelector } from 'react-redux';
import { RootState } from 'store/index';
import { useForm } from 'react-hook-form';

export default function Anuncie() {
  const categorias = useSelector((state: RootState) =>
    state.categorias.map(({ nome, id }) => ({ nome, id }))
  );
  const { register, handleSubmit } = useForm();

  function cadastrarProduto(param) {
    console.log(param);
  }

  return (
    <div className={styles.anuncie} onSubmit={handleSubmit(cadastrarProduto)}>
      <Header
        titulo="Anunice aqui!"
        descricao="Anuncie seus produtos conosco"
      />
      <form action="" className={styles.formulario}>
        <input
          {...register('nome')}
          type="text"
          placeholder="Nome do produto"
          alt="Nome do Produto"
        />
        <input
          {...register('descricao')}
          type="text"
          placeholder="Descrição do produto"
          alt="Descrição do Produto"
        />
        <input
          {...register('imagem')}
          type="url"
          placeholder="URL da imagem do produto"
          alt="URL da imagem do Produto"
        />
        <select {...register('categoria')} name="" id="">
          <option value="" disabled>
            -- Selecione a categoria --
          </option>
          {categorias.map(({ nome, id }) => (
            <option key={id} value={id}>
              {nome}
            </option>
          ))}
        </select>
        <input
          {...register('preco')}
          type="number"
          placeholder="Preço do produto"
          alt="Preço do Produto"
        />
        <Botao type="submit" onClick={() => 0}>
          Cadastrar produto
        </Botao>
      </form>
    </div>
  );
}
