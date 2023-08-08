import { useEffect, useState } from "react"
import { CartModal } from "../../components/CartModal"
import { Header } from "../../components/Header"
import { ProductsSection } from "../../components/sections/ProductsSection"
import { productsApi } from "../../services/productsApi"
import { toast } from "react-toastify"

export const HomePage = () => {
   const cartSaved = JSON.parse(localStorage.getItem("@hk:cart"))

   const [productList, setProductList] = useState([])
   const [cartList, setCartList] = useState(cartSaved ? cartSaved : [])
   const [loaded, setLoaded] = useState(false)
   const [visible, setVisible] = useState(false)
   const [search, setSearch] = useState("")

   useEffect(() => {
      const productsRequest = async () => {
         try {
            const products = await productsApi.get("products")

            setProductList(products.data)
         } catch (error) {
            console.log(error.message)
         } finally {
            setLoaded(true)
         }
      }

      productsRequest()
   }, [])

   const addProduct = id => {
      const productFiltered = productList.filter(product => {
         return product.id === id
      })

      const addId = productFiltered.map(product => {
         return {
            ...product,
            cartId: cartList.length + 1
         }
      })

      setCartList([...cartList, ...addId])

      toast.success("Produto adicionado ao carrinho")

      return productFiltered
   }

   const showModal = () => {
      visible ? setVisible(false) : setVisible(true)
   }

   return (
      <>
         <Header cartList={cartList} showModal={showModal} setSearch={setSearch} />
         <main>
            <ProductsSection
               productList={productList}
               addProduct={addProduct}
               loaded={loaded}
               search={search}
               setSearch={setSearch} />
         </main>
         {visible ?
            <CartModal
               productList={productList}
               cartList={cartList}
               setCartList={setCartList}
               showModal={showModal} />
            : null
         }
      </>
   )
}