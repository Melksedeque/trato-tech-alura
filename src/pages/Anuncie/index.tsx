import Botao from 'components/Botao';
import styles from './Anuncie.module.scss';
import Header from 'components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/index';
import { useForm } from 'react-hook-form';
import { cadastrarItem } from 'store/reducers/itens';
import { useParams } from 'react-router-dom';
import Input from 'components/Input';
import { Item } from 'types/Item';

export default function Anuncie() {
  const dispatch = useDispatch();
  const { nomeCategoria = '' } = useParams();
  const categorias = useSelector((state: RootState) =>
    state.categorias.map(({ nome, id }) => ({ nome, id }))
  );
  const { register, handleSubmit } = useForm<{
    titulo: string;
    descricao: string;
    foto: string;
    categoria: string;
    preco: string;
  }>({
    defaultValues: {
      titulo: '',
      descricao: '',
      foto: '',
      categoria: nomeCategoria,
      preco: '',
    },
  });

  function cadastrarProduto(data: {
    titulo: string;
    descricao: string;
    foto: string;
    categoria: string;
    preco: string;
  }) {
    const itemData: Omit<Item, 'id'> = {
      ...data,
      preco: Number(data.preco),
    };
    dispatch(cadastrarItem(itemData));
  }

  return (
    <div className={styles.anuncie} onSubmit={handleSubmit(cadastrarProduto)}>
      <Header
        titulo="Anunice aqui!"
        descricao="Anuncie seus produtos conosco"
      />
      <form action="" className={styles.formulario}>
        <Input
          {...register('titulo', { required: true })}
          type="text"
          placeholder="Nome do produto"
        />
        <Input
          {...register('descricao', { required: true })}
          type="text"
          placeholder="Descrição do produto"
        />
        <Input
          {...register('foto', { required: true })}
          type="url"
          placeholder="URL da imagem do produto"
        />
        <select
          {...register('categoria', { required: true })}
          disabled={!!nomeCategoria}
        >
          <option value="" disabled>
            -- Selecione a categoria --
          </option>
          {categorias.map(({ nome, id }) => (
            <option key={id} value={id}>
              {nome}
            </option>
          ))}
        </select>
        <Input
          {...register('preco', { required: true, valueAsNumber: true })}
          type="number"
          placeholder="Preço do produto"
        />
        <Botao type="submit" onClick={() => 0}>
          Cadastrar produto
        </Botao>
      </form>
    </div>
  );
}
