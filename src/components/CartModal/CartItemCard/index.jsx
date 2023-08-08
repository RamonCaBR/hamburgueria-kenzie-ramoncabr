import { MdDelete } from "react-icons/md"
import styles from "./style.module.scss"

export const CartItemCard = ({ product, removeProduct }) => {
   return (
      <li className={styles.itemCard}>
         <div>
            <div className={styles.imgContainer}>
               <img src={product.img} alt={product.name} />
            </div>
            <div>
               <h3 className="title three">{product.name}</h3>
               <p className="paragraph">x{product.amount}</p>
            </div>
         </div>
         <button aria-label="delete" title="Remover item" onClick={() => removeProduct(product.id)}>
            <MdDelete color="var(--grey-200)" size={21} />
         </button>
      </li>
   )
}