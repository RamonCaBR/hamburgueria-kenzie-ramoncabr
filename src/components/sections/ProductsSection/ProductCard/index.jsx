import styles from "./style.module.scss"

export const ProductCard = ({ product, addProduct }) => {
    return (
        <li className={styles.productCard}>
            <div>
                <div className={styles.imageContainer}>
                    <img src={product.img} alt={product.name} title={product.name} />
                </div>
                <h3 className="title three">{product.name}</h3>
                <span className="paragraph caption">{product.category}</span>
                <span className="paragraph price">{product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span>
            </div>
            <button className="btn" onClick={() => addProduct(product.id)} >Adicionar</button>
        </li>
    )
}