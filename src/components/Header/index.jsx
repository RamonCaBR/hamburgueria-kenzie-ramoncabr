import { useEffect, useRef, useState } from "react"
import Logo from "../../assets/Logo.svg"
import { MdSearch, MdShoppingCart } from "react-icons/md"
import styles from "./style.module.scss"

export const Header = ({ cartList, showModal, setSearch }) => {
   const [value, setValue] = useState("")

   const ref = useRef(null)

   useEffect(() => {
      const addClass = () => {
         ref.current.removeAttribute("class")

         ref.current.className = styles.pop

         setTimeout(() => {
            ref.current.removeAttribute("class")
         }, 300)
      }

      addClass()

      localStorage.setItem("@hk:cart", JSON.stringify(cartList))

   }, [cartList])

   const submit = e => {
      e.preventDefault()
      setSearch(value)
      setValue("")
   }

   return (
      <header className={styles.header}>
         <div className="container">
            <div>
               <a href=""><img title="Logotipo" src={Logo} alt="Logo Kenzie Burguer" /></a>
               <button
                  className={styles.cartButton}
                  title="Abrir carrinho"
                  onClick={() => showModal()}>
                  <MdShoppingCart color="var(--grey-200)" size={24} />
                  <span ref={ref}>{cartList.length}</span>
               </button>
            </div>
            <form onSubmit={submit}>
               <input
                  type="text"
                  value={value}
                  placeholder="Digitar Pesquisa"
                  onChange={e => setValue(e.target.value)}
                  required={true}
               />
               <button className={`btn ${value ? styles.valid : null}`} type="submit" >
                  <MdSearch size={21} />
               </button>
            </form>
         </div>
      </header>
   )
}