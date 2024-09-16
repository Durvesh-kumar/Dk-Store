"use client"
import ProductCard from '@/components/products/ProductCard'
import { getCollections, getProducts, getProductsCategorys, } from '@/lib/actions/actions'
import Image from 'next/image'
import React, { useEffect } from 'react'
import Link from 'next/link'

const Home = async() => {
  useEffect(()=>{},[])
  const products = await getProducts()
  const collections = await getCollections();
  const categorysProduct = await getProductsCategorys();
  return (
    <div>

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
    
      <Image src="/banner.jpg" width={2000} height={1000} alt='Homepage-Banner' className='w-screen'/>

      <div>
      <p className="text-3xl font-bold flex items-center justify-center my-10">
        Collections
      </p>
      {!collections || collections?.length == 0 ? (
        <p>Collections not found</p>
      ) : (
        <div className="flex items-center justify-center gap-10 flex-wrap">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
          {collections?.map((collection: CollectionType) => (
            <Link
              href={`/collections/${collection._id}`}
              key={collection._id}
              className="w-[300px] h-[180px] relative"
            >
              <Image
                src={collection.image}
                alt={collection.title}
                width={300}
                height={180}
                className="w-full h-full cursor-pointer rounded-xl border absolute"
              />
              <p className=" opacity-90 text-white text-xl pl-3 mt-2 flex flex-wrap">{collection?.title}</p>
              <p className="bg-transparent border hover:shadow-md hover:border-black hover:bg-slate-400 hover:text-black border-b-slate-500 px-4 py-1 opacity-90 w-fit rounded text-gray-500 absolute bottom-3 left-[80px]">Read more...</p>
            </Link>
          ))}
        </div>
        </div>
      )}
    </div>

      <div className='flex items-center flex-col gap-10 pt-8'>
        <p className='flex items-center justify-center text-3xl font-bold'>Products</p>
        {
            !products || products.length === 0 ? (
                <p>Product not found</p>
            ):(
                <div className='grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4'>
                    {
                        products?.map((product:ProductType)=>(
                            <ProductCard product={product} key={product._id}/>
                        ))
                    }
                </div>
            )
        }
    </div>
    </div>
  )
}

export const dynamic = "force-dynamic";
export default Home;