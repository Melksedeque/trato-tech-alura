import { RootState } from 'store/index';
import Header from "components/Header";
import { useSelector } from "react-redux";

export default function Categoria() {
    const categoria = useSelector((state: RootState) => state.categorias);
    return (
        <div>
            <Header titulo="" descricao="" imagem={} className={} />
        </div>
    )
}