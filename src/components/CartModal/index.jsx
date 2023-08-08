import { MdClose } from "react-icons/md"
import { CartItemCard } from "./CartItemCard"
import styles from "./style.module.scss"
import { toast } from "react-toastify"
import { useKeyDown } from "../../hooks/useKeyDown"
import { useClickOut } from "../../hooks/useClickOut"
import { useEffect, useState } from "react"

export const CartModal = ({ productList, cartList, setCartList, showModal }) => {
   const [toRender, setToRender] = useState([])

   useEffect(() => {
      const list = productList.map(product => {
         return {
            ...product,
            amount: 0
         }
      })

      for (let i = 0; i < cartList.length; i++) {
         for (let j = 0; j < list.length; j++) {
            if (cartList[i].id === list[j].id) {
               list[j].amount += 1
            }
         }
      }

      setToRender(list)

   }, [cartList])

   const ref = useClickOut(() => {
      showModal()
   })

   useKeyDown("Escape", () => {
      showModal()
   })

   const removeProduct = id => {
      let products = [...cartList]

      for (let i = 0; i < cartList.length; i++) {
         if (products[i].id === id) {
            products.splice(i, 1)

            break
         }
      }

      setCartList(products)

      toast.success("Produto removido do carrinho")
   }

   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price
   }, 0)

   return (
      <div className={styles.modalOverlay} role="dialog">
         <div ref={ref} className={styles.body}>
            <div className={styles.header}>
               <h2 className="three">Carrinho de compras</h2>
               <button aria-label="close" title="Fechar" onClick={() => showModal()}>
                  <MdClose color="#FFFFFF80" size={21} />
               </button>
            </div>
            {cartList.length > 0 ?
               <ul>
                  {toRender.map(product => (
                     product.amount !== 0 ? <CartItemCard key={crypto.randomUUID()} product={product} removeProduct={removeProduct} /> : null
                  ))}
               </ul>
               : <div>
                  <h3 className="title three">Nenhum produto no carrinho</h3>
               </div>
            }
            <div>
               <div className={styles.total}>
                  <span className="paragraph md">Total</span>
                  <span className="paragraph price2">{total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span>
               </div>
               <button className="btn" onClick={() => {
                  setCartList([])

                  toast.success("Todos os produtos removidos do carrinho")
               }}
                  disabled={cartList.length === 0}>Remover todos</button>
            </div>
         </div>
      </div>
   )
}