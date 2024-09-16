import ProductCard from '@/components/products/ProductCard'
import { getCollectionDetails } from '@/lib/actions/actions'
import Image from 'next/image'
import React from 'react'

const CollectionDetails = async({params}:{params: {collectionId: string}}) => {
    const collectionDetails = await getCollectionDetails(params.collectionId)

  return (
    <div className='grid gap-10'>
      <div className='flex items-center justify-center'>
          <p className='text-xl font-bold flext items-center gap-2'><span>Title: </span>{collectionDetails?.title}</p>
          
      </div>
      <div className='flex items-center justify-center'>
          <Image src={collectionDetails?.image} alt={collectionDetails?.title} width={1000} height={1000} className='w-96 h-96 object-fill rounded-lg'/>
     </div>
     <div className='grid gap-3'>
      <h3 className='text-lg font-semibold text-gray-900'>Discription:</h3>
      <p>{collectionDetails?.discription}</p>
     </div>
     <div className='text-xl font-bold text-gray-950'>Products</div>
     
     <div className='grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4'>
      {
        collectionDetails?.products?.map((product:ProductType)=>(
          <ProductCard product={product} key={product._id}/>
        ))
      }
     </div>
      
    </div>
  )
}

export const dynamic = "force-dynamic";
export default CollectionDetails;