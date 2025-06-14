import Header from 'components/Header';
import Item from 'components/Item';
import { ItemCarrinho } from 'types/Item';
import { CartItem } from 'types/Carrinho';
import styles from './Carrinho.module.scss';
import { RootState } from 'store/index';
import { useDispatch, useSelector } from 'react-redux';
import { resetarCarrinho } from 'store/reducers/carrinho';
import Botao from 'components/Botao';

export default function Carrinho() {
  const dispatch = useDispatch();
  const { carrinho, total } = useSelector((state: RootState) => {
    let total = 0;
    const regexp = new RegExp(state.busca, 'i');
    const carrinhoReduce = state.carrinho.reduce(
      (itens: ItemCarrinho[], itemNoCarrinho: CartItem) => {
        const item = state.itens.find((item) => item.id === itemNoCarrinho.id);
        total += (item?.preco || 0) * itemNoCarrinho.quantidade;
        if (item?.titulo.match(regexp)) {
          itens.push({
            ...item,
            quantidade: itemNoCarrinho.quantidade,
          });
        }
        return itens;
      },
      [] as ItemCarrinho[]
    );
    return {
      carrinho: carrinhoReduce,
      total,
    };
  });

  return (
    <>
      <Header
        titulo="Carrinho de compras"
        descricao="Confira os produtos que você adicionou ao carrinho"
      />
      <div className={styles.carrinho}>
        {carrinho.map((item: ItemCarrinho) => (
          <Item key={item.id} {...item} carrinho />
        ))}
        <div className={styles.total}>
          <strong>Resumo da compra</strong>
          <span>
            Subtotal: <strong>R$ {total.toFixed(2)}</strong>
          </span>
        </div>
        <Botao type="button" onClick={() => dispatch(resetarCarrinho())}>
          Finalizar compra
        </Botao>
      </div>
    </>
  );
}
