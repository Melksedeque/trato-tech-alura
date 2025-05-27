import Header from 'components/Header'
import styles from './Home.module.scss'
import imgInicial from 'assets/images/inicial.png'

export default function Home() {
    return (
        <div>
            <Header
                titulo="Classificados Tech"
                descricao="Compre diversos tipos de produtos no melhor site do Brasil!"
                imagem={imgInicial}
                className={styles.header}
            />
        </div>
    )
}