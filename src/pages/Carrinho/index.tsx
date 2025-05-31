import Header from 'components/Header'
import Item from 'components/Item'
import { ItemCarrinho } from 'types/Item'
import { CartItem } from 'types/Carrinho'
import styles from './Carrinho.module.scss'
import { RootState } from 'store/index'
import { useSelector } from 'react-redux'

export default function Carrinho() {
    const { carrinho, total } = useSelector((state: RootState) => {
        let total = 0;
        const carrinhoReduce = state.carrinho.reduce((itens: ItemCarrinho[], itemNoCarrinho: CartItem) => {
            const item = state.itens.find(item => item.id === itemNoCarrinho.id);
            total += (item.preco * itemNoCarrinho.quantidade)
            if (item) {
                itens.push({
                    ...item,
                    quantidade: itemNoCarrinho.quantidade,
                });
            }
            return itens;
        }, [] as ItemCarrinho[]);
        return {
            carrinho: carrinhoReduce,
            total
        };
    })
    return (
        <>
            <Header
                titulo='Carrinho de compras'
                descricao='Confira os produtos que você adicionou ao carrinho'
            />
            <div className={styles.carrinho}>
                {carrinho.map((item: ItemCarrinho) => <Item key={item.id} {...item} carrinho />)}
                <div className={styles.total}>
                    <strong>Resumo da compra</strong>
                    <span>Subtotal: <strong>R$ {total.toFixed(2)}</strong></span>
                </div>
            </div>
        </>
    )
}