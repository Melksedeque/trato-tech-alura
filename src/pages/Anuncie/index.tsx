import Botao from 'components/Botao';
import styles from './Anuncie.module.scss';
import Header from 'components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/index';
import { useForm } from 'react-hook-form';
import { cadastrarItem } from 'store/reducers/itens';

export default function Anuncie() {
  const dispatch = useDispatch();
  const categorias = useSelector((state: RootState) =>
    state.categorias.map(({ nome, id }) => ({ nome, id }))
  );
  const { register, handleSubmit } = useForm({
    defaultValues: {
      titulo: '',
      descricao: '',
      foto: '',
      categoria: '',
      preco: '',
    },
  });

  function cadastrarProduto(data) {
    dispatch(cadastrarItem(data));
  }

  return (
    <div className={styles.anuncie} onSubmit={handleSubmit(cadastrarProduto)}>
      <Header
        titulo="Anunice aqui!"
        descricao="Anuncie seus produtos conosco"
      />
      <form action="" className={styles.formulario}>
        <input
          {...register('titulo', { required: true })}
          type="text"
          placeholder="Nome do produto"
          alt="Nome do Produto"
        />
        <input
          {...register('descricao', { required: true })}
          type="text"
          placeholder="Descrição do produto"
          alt="Descrição do Produto"
        />
        <input
          {...register('foto', { required: true })}
          type="url"
          placeholder="URL da imagem do produto"
          alt="URL da imagem do Produto"
        />
        <select {...register('categoria', { required: true })}>
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
          {...register('preco', { required: true, valueAsNumber: true })}
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
