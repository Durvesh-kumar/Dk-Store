import { getProductsCategorys } from '@/lib/actions/actions'
import { ProductType } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const CategorysProduct = async() => {
    const categorysProduct = await getProductsCategorys();
    
  return (
    <div className=' overflow-x-scroll scrollbar-hide mb-5 flex items-center gap-4 p-2'>
      {
        categorysProduct?.map((product:ProductType)=>(
          <Link href={`/categorys/${product?.category}`} key={product._id} className='grid gap-1 items-center justify-center'>
              <div className='w-20 h-20 duration-500 hover:scale-105 hover:shadow-lg shadow-md border flex items-center justify-around rounded-full'>
              <Image src={product?.media[0]} alt={product.category} width={400} height={400} className=' w-full h-full object-scale-down rounded-full'/>
              </div>
              
              <p className='flex items-center justify-around'>{product?.category}</p>
          </Link>
        ))
      }
    </div>
  )
}

export default CategorysProduct