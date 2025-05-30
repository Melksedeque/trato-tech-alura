import Logo from 'components/Logo'
import styles from './NavBar.module.scss'
import classNames from 'classnames'
import { RiShoppingCart2Line, RiShoppingCartFill } from 'react-icons/ri'
import Busca from 'components/Busca'
import { Link, useLocation } from 'react-router-dom'

const iconeProps = {
    color: 'white',
    size: 24
}

export default function NavBar() {
    const location = useLocation()
    return (
        <nav className={styles.nav}>
            <Logo />
            <div className={styles.links}>
                <div>
                    <Link to="/" className={classNames(styles.link, {
                        [styles.selected]: location.pathname === '/'
                    })}>Página Inicial</Link>
                </div>
            </div>
            <div className={styles.busca}>
                <Busca />
            </div>
            <div className={styles.icones}>
                <Link to="/carrinho">
                    {location.pathname === '/carrinho' ? <RiShoppingCartFill {...iconeProps} /> : <RiShoppingCart2Line {...iconeProps} /> }
                </Link>
            </div>
        </nav>
    )
}