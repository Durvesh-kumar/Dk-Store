"use client"
import { getProductDetails } from '@/lib/actions/actions';
import { ProductType, UserType } from '@/lib/types';
import { useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Loader from '@/components/Loader';
import ProductCard from '@/components/products/ProductCard';

const Wishlists = () => {
    const {user} = useUser()

    const [loading, setLoading] = useState(true);
    const [userSigned, setUserSigned] = useState<UserType | null>(null)
    const [getProducts, setGetProducts] = useState<ProductType[]>([])

    const getUser = async()=>{
       try {
        const res = await fetch("/api/users", {
            method: "GET"
        })
        if(res.ok){
          setUserSigned(await res.json());
            setLoading(false)
        }
       } catch (error) {
        console.log("[wishlists_GET]", error);
        toast.error("Somthig went wrong! please try agian")
       }
    }
   useEffect(()=>{
    getUser()
   }, [user])


   const getWishlistProducts = async()=>{
    setLoading(true)
      if(!userSigned)return

      const wishlistProduct = await Promise.all(userSigned.wishlist.map(async(productId)=>{
        const products = await getProductDetails(productId)
        return products
      }))
      setGetProducts(wishlistProduct)
      setLoading(false)
   }

   useEffect(()=>{
    getWishlistProducts()
   }, [userSigned]);


   const updateSingedInUser = (updateUser: UserType)=>{
    setUserSigned(updateUser)
   }

   
   
  return loading ? <Loader/> : (
    <div className='grid gap-8'>

        <h1 className='text-xl font-bold text-gray-900'>Your WishList</h1>
       
        {
           !getProducts || getProducts.length === 0 ?(
            <p className='text-xl font-bold text-gray-900'>No item your Wishlist</p>
           ):
           <div className='flex gap-10 flex-wrap items-center justify-center'>
            {
              getProducts?.map((product:ProductType)=>(
                <ProductCard key={product?._id} product={product} updateSignedInUser={updateSingedInUser}/>
        ))
            }
           </div>
           

        }
        
    </div>
  )
}

export const dynamic = "force-dynamic";
export default Wishlists;