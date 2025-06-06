import type { Item } from 'types/Item';
import styles from './Item.module.scss';
import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiFillCloseCircle,
  AiOutlineCheck,
  AiFillEdit,
} from 'react-icons/ai';
import { FaCartPlus } from 'react-icons/fa';
import { mudarFavorito, mudarItem } from 'store/reducers/itens';
import { mudarCarrinho, mudarQuantidade } from 'store/reducers/carrinho';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/index';
import classNames from 'classnames';
import { useState } from 'react';
import Input from 'components/Input';

const iconeProps = {
  size: 24,
  color: '#041833',
};
const qntProps = {
  size: 32,
  color: '#1875E8',
};

export default function Item(props: Item) {
  const { titulo, descricao, preco, foto, favorito, id, carrinho, quantidade } =
    props;
  const precoFormatado = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(preco);
  const [modoEdicao, setModoEdicao] = useState();
  const [novoTitulo, setNovoTitulo] = useState(titulo);
  const [novaDescricao, setNovaDescricao] = useState(descricao);
  const dispatch = useDispatch();
  const existeNoCarrinho = useSelector((state: RootState) =>
    state.carrinho.some((itemNoCarrinho) => itemNoCarrinho.id === id)
  );

  function resolverFavorito() {
    dispatch(mudarFavorito(id));
  }

  function resolverCarrinho() {
    dispatch(mudarCarrinho(id));
  }

  function excluirDoCarrinho() {
    dispatch(mudarCarrinho(id));
  }

  const componenteEmEdicao = (
    <>
      {modoEdicao ? (
        <AiOutlineCheck
          {...iconeProps}
          className={styles['item-acao']}
          onClick={() => {
            setModoEdicao(false);
            dispatch(
              mudarItem({
                id,
                item: { titulo: novoTitulo, descricao: novaDescricao },
              })
            );
          }}
        />
      ) : (
        <AiFillEdit
          {...iconeProps}
          className={styles['item-acao']}
          onClick={() => setModoEdicao(true)}
        />
      )}
    </>
  );

  return (
    <div
      className={classNames(styles.item, {
        [styles.itemNoCarrinho]: carrinho && existeNoCarrinho,
      })}
    >
      <AiFillCloseCircle
        {...iconeProps}
        color="#FF0000"
        className={`${styles['item-acao']} ${styles['item-deletar']}`}
        onClick={excluirDoCarrinho}
      />
      {carrinho && existeNoCarrinho && (
        <AiFillCloseCircle
          {...iconeProps}
          color="#FF0000"
          className={styles['botao-remover']}
          onClick={excluirDoCarrinho}
        />
      )}
      <div className={styles['item-imagem']}>
        <img src={foto} alt={titulo} />
      </div>
      <div className={styles['item-descricao']}>
        <div className={styles['item-titulo']}>
          {modoEdicao ? (
            <>
              <Input
                type="text"
                value={novoTitulo}
                onChange={(e) => setNovoTitulo(e.target.value)}
                placeholder="Nome do produto"
              />
              <Input
                type="text"
                value={descricao}
                onChange={(e) => setNovaDescricao(e.target.value)}
                placeholder="Descrição do produto"
              />
            </>
          ) : (
            <>
              <h3>{titulo}</h3>
              <p>{descricao}</p>
            </>
          )}
        </div>
        <div className={styles['item-info']}>
          <div className={styles['item-preco']}>
            <p>{precoFormatado}</p>
          </div>
          <div className={styles['item-acoes']}>
            {favorito ? (
              <AiFillHeart
                {...iconeProps}
                color="#FF0000"
                className={styles['item-acao']}
                onClick={resolverFavorito}
              />
            ) : (
              <AiOutlineHeart
                {...iconeProps}
                className={styles['item-acao']}
                onClick={resolverFavorito}
              />
            )}
            {carrinho && existeNoCarrinho ? (
              <div className={styles.quantidade}>
                Quantidade:
                <AiFillMinusCircle
                  {...qntProps}
                  className={styles['item-acao']}
                  onClick={() => {
                    if (quantidade || 0 >= 1) {
                      dispatch(mudarQuantidade({ id, quantidade: -1 }));
                    }
                  }}
                />
                <span>{String(quantidade || 0).padStart(2, '0')}</span>
                <AiFillPlusCircle
                  {...qntProps}
                  className={styles['item-acao']}
                  onClick={() => {
                    dispatch(mudarQuantidade({ id, quantidade: +1 }));
                  }}
                />
              </div>
            ) : (
              <>
                <FaCartPlus
                  {...iconeProps}
                  color={existeNoCarrinho ? '#1875E8' : iconeProps.color}
                  className={styles['item-acao']}
                  onClick={resolverCarrinho}
                />
                {componenteEmEdicao}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
