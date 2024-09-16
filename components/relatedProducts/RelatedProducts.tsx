import { getRelatedProducts } from "@/lib/actions/actions";
import ProductCard from "../products/ProductCard";

interface RelatedProductsPropes{
  productId:string
}

const RelatedProducts:React.FC<RelatedProductsPropes> = async({productId}) => {
  const relatedProducts = await getRelatedProducts(productId)
  return (
    <div className="flex flex-col items-center gap-10 px-10 py-5 max:md:px-3">
      <p className="text-xl font-bold">Related Products</p>
      <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {
           relatedProducts?.map((product: ProductType)=>(
            <ProductCard key={product._id} product={product}/>
           ))
        }
      </div>
    </div>
  )
}

export default RelatedProducts