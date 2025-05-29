import { Item } from 'types/Item'
import styles from './Item.module.scss'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

const iconeProps = {
    size: 24,
    color: '#041833',
}

export default function Item(props: Item) {
    const { titulo, descricao, preco, imagem, favorito } = props
    // console.log(imagem)
    const precoFormatado = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(preco)
    return (
        <div className={styles.item}>
            <div className={styles['item-imagem']}>
                <img src={imagem} alt={titulo} />
            </div>
            <div className={styles['item-descricao']}>
                <div className={styles['item-titulo']}>
                    <h3>{titulo}</h3>
                    <p>{descricao}</p>
                </div>
                <div className={styles['item-info']}>
                    <p>{precoFormatado}</p>
                </div>
                <div className={styles['item-acoes']}>
                    <span>{favorito
                        ? <AiFillHeart {...iconeProps} color="#FF0000" className={styles['item-acao']} />
                        : <AiOutlineHeart {...iconeProps} className={styles['item-acao']} />
                    }</span>
                </div>
            </div>
        </div>
    )
}