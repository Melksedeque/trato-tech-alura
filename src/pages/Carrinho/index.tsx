import Header from 'components/Header'
import Item from 'components/Item'
import { ItemCarrinho } from 'types/Item'
import { CartItem } from 'types/Carrinho'
import styles from './Carrinho.module.scss'
import { RootState } from 'store/index'
import { useSelector } from 'react-redux'

export default function Carrinho() {
    const carrinho = useSelector((state: RootState) => {
        const carrinhoReduce = state.carrinho.reduce((itens: ItemCarrinho[], itemNoCarrinho: CartItem) => {
            const item = state.itens.find(item => item.id === itemNoCarrinho.id);
            if (item) {
                itens.push({
                    ...item,
                    quantidade: itemNoCarrinho.quantidade,
                });
            }
            return itens;
        }, [] as ItemCarrinho[]);
        return carrinhoReduce;
    })
    return (
        <>
            <Header
                titulo='Carrinho de compras'
                descricao='Confira os produtos que você adicionou ao carrinho'
                imagem='carrinho.jpg'
            />
            <div className={styles.carrinho}>
                {carrinho.map((item: ItemCarrinho) => <Item key={item.id} {...item} carrinho />)}
                <div className={styles.total}>
                    <strong>Resumo da compra</strong>
                    <span>Subtotal: <strong>R$ 0,00</strong></span>
                </div>
            </div>
        </>
    )
}