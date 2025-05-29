import type { Item } from 'types/Item'
import styles from './Item.module.scss'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { FaCartPlus } from 'react-icons/fa'
import { mudarFavorito } from 'store/reducers/itens'
import { useDispatch } from 'react-redux'

const iconeProps = {
    size: 24,
    color: '#041833',
}

export default function Item(props: Item) {
    const { titulo, descricao, preco, foto, favorito, id } = props
    console.log(foto)
    const precoFormatado = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(preco)
    const dispatch = useDispatch()
    
    function resolverFavorito() {
        dispatch(mudarFavorito(id))
    }
    
    return (
        <div className={styles.item}>
            <div className={styles['item-imagem']}>
                <img src={foto} alt={titulo} />
            </div>
            <div className={styles['item-descricao']}>
                <div className={styles['item-titulo']}>
                    <h3>{titulo}</h3>
                    <p>{descricao}</p>
                </div>
                <div className={styles['item-info']}>
                    <div className={styles['item-preco']}>
                        <p>{precoFormatado}</p>
                    </div>
                    <div className={styles['item-acoes']}>
                        {favorito
                            ? <AiFillHeart {...iconeProps} color="#FF0000" className={styles['item-acao']} onClick={resolverFavorito} />
                            : <AiOutlineHeart {...iconeProps} className={styles['item-acao']} onClick={resolverFavorito} />
                        }
                        <FaCartPlus {...iconeProps} color={false ? '#1875E8' : iconeProps.color} className={styles['item-acao']} />
                    </div>
                </div>
            </div>
        </div>
    )
}