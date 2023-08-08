import { MdClose } from "react-icons/md"
import styles from "./style.module.scss"

export const FilterCard = ({ search, setSearch }) => {
    return (
        <div className={`container ${styles.filter}`}>
            <h4 className="title four">Resultados da busca por:</h4>
            <div>
                <p className="paragraph">{search}</p>
                <button onClick={() => setSearch("")} title="Remover filtro">
                    <MdClose color="var(--grey-300)" size={16} />
                </button>
            </div>
        </div>
    )
}