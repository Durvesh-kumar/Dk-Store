import Gallery from '@/components/products/Gallery';
import ProductInfo from '@/components/products/ProductInfo';
import { getProductDetails } from '@/lib/actions'
import React from 'react'

const ProductDetails = async({params}: {params: {productId:string}}) => {
    // console.log(params.productId);
    
    const productDetails = await getProductDetails(params.productId)
    // console.log("productDetails",productDetails);
    
  return (
    <div className='flex items-start gap-10 justify-center py-10 max-md:flex-col max-md:items-center'>
        <Gallery media={productDetails?.media} />
        <ProductInfo productDetails={productDetails}/>
    </div>
  )
}

export default ProductDetails