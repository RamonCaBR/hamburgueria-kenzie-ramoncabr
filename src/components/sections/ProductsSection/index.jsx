import { FilterCard } from "../../FilterCard"
import { ProductsCardSkeleton } from "../../ProductsCardSkeleton"
import { ProductCard } from "./ProductCard"
import styles from "./style.module.scss"

export const ProductsSection = ({ productList, addProduct, loaded, search, setSearch }) => {

   const productsResult = productList.filter(product => {
      return product.name.toLowerCase().includes(search.toLowerCase()) ||
         product.category.toLowerCase().includes(search.toLowerCase())
   })

   const list = search ? productsResult : productList

   return (
      <section className={`container ${styles.productsSection}`}>
         {search ?
            <FilterCard search={search} setSearch={setSearch} />
            : null}
         {loaded ?
            list.length > 0 ?
               <ul>
                  {list.map(product => <ProductCard key={product.id} product={product} addProduct={addProduct}/>)}
               </ul>
               : <div className="container">
                  <h2 className="title two">Produto não encontrado</h2>
               </div>
            : <ul>
               <ProductsCardSkeleton />
               <ProductsCardSkeleton />
               <ProductsCardSkeleton />
               <ProductsCardSkeleton />
               <ProductsCardSkeleton />
               <ProductsCardSkeleton />
               <ProductsCardSkeleton />
               <ProductsCardSkeleton />
            </ul>
         }
      </section>
   )
}