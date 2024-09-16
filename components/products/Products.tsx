import { getProducts } from '@/lib/actions/actions'
import React from 'react'
import ProductCard from './ProductCard'
import { ProductType } from '@/lib/types'

const Products = async() => {

    const products = await getProducts()
  return (
    <div className='flex items-center flex-col gap-10 pt-8'>
        <p className='flex items-center justify-center text-3xl font-bold'>Products</p>
        {
            !products || products.length === 0 ? (
                <p>Product not found</p>
            ):(
                <div className='flex flex-wrap mx-auto gap-16'>
                    {
                        products?.map((product:ProductType)=>(
                            <ProductCard product={product} key={product._id}/>
                        ))
                    }
                </div>
            )
        }
    </div>
  )
}

export default Products