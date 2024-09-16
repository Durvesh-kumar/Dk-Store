import CategorysProduct from '@/components/categorys/CategorysProduct'
import Collections from '@/components/collections/Collections'
import Products from '@/components/products/Products'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div>
      <CategorysProduct/>
      <Image src="/banner.jpg" width={2000} height={1000} alt='Homepage-Banner' className='w-screen'/>
      <Collections/>
      <Products/>
    </div>
  )
}

export const dynamic = "force-dynamic";
export default Home;