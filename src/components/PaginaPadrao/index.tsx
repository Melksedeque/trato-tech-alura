import Footer from 'components/Footer'
import styles from './PaginaPadrao.module.scss'
import { Outlet } from 'react-router-dom'
import Header from 'components/Header'

export default function PaginaPadrao() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles['container-outlet']}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}