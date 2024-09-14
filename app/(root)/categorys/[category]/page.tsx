import ProductCard from '@/components/products/ProductCard';
import { getProductsCategory } from '@/lib/actions'
import { ProductType } from '@/lib/types';
import React from 'react'

const Category = async({params}:{params:{category:string}}) => {
    
    const produducts = await getProductsCategory(params.category);
    
  return (
    <div>
      {
        produducts?.map((product:ProductType)=>(
          <ProductCard key={product._id} product={product}/>
        ))
      }
    </div>
  )
}

export default Category