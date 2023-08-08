import styles from "./style.module.scss"
import { MdImage } from "react-icons/md"

export const ProductsCardSkeleton = () => {
    return (
        <li className={styles.skeleton}>
            <div className={styles.container}>
                <MdImage color="var(--color-white)" size={80} />
            </div>
            <div className={styles.textsContainer}>
                <div className={styles.title}></div>
                <div className={styles.text1}></div>
                <div className={styles.text2}></div>
                <div className={styles.button}></div>
            </div>
        </li>
    )
}