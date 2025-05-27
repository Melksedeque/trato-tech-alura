import Footer from 'components/Footer'
import styles from './PaginaPadrao.module.scss'
import { Outlet } from 'react-router-dom'
import NavBar from 'components/NavBar'

export default function PaginaPadrao() {
    return (
        <div className={styles.container}>
            <NavBar />
            <div className={styles['container-outlet']}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}