import { getRelatedProducts } from "@/lib/actions/actions";
import { ProductType } from "@/lib/types";
import ProductCard from "../products/ProductCard";

interface RelatedProductsPropes{
  productId:string
}

const RelatedProducts:React.FC<RelatedProductsPropes> = async({productId}) => {
  const relatedProducts = await getRelatedProducts(productId)
  return (
    <div className="flex flex-col items-center px-10 py-5 max:md:px-3">
      <p className="text-xl font-bold">Related Products</p>
      <div className="flex flex-wrap items-center justify-center gap-10 ">
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