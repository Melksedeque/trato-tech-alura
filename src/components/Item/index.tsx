import { Item } from 'types/Item'
import styles from './Item.module.scss'

export default function Item(props: Item) {
    return (
        <div className={styles.item}>
            <img src={props.thumbnail} alt={props.nome} />
            <h3>{props.nome}</h3>
            <p>{props.descricao}</p>
            <p>{props.preco}</p>
        </div>
    )
}