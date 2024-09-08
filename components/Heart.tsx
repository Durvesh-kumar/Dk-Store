'use client'
import { UserType } from '@/lib/types';
import { useUser } from '@clerk/nextjs';
import { Heart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

interface HeartPropes {
    productId: string
}

const HeartFavorites:React.FC<HeartPropes> = ({productId}) => {
    const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [signUser, setSignUser] = useState<UserType | null>(null);
  const [isLike, setIsLike] = useState(false);

  const { user } = useUser();

  const getUser = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/users`, {
        method: "GET",
      });

      if (res.ok) {
        const data = await res.json();
        setLoading(false);
        setSignUser(data);
        setIsLike(data.wishlist.includes(productId));
      }
    } catch (error) {
      console.log("[getUser", error);
    }
  };

  useEffect(() => {
    if (user) {
      getUser();
    }
  }, [user]);

  const handleLike = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();

    try {
      setLoading(true);
      if (!user) {
        router.push("/sign-in");
        return;
      } else {
        const res = await fetch(`/api/users/wishlist`, {
          method: "POST",
          body: JSON.stringify({ productId }),
        });

        if (res.ok) {
          const updatedUser = await res.json();
          setLoading(false);
          setSignUser(updatedUser);
          setIsLike(updatedUser.wishlist.includes(productId));
        }
      }
    } catch (error) {
      console.log("[Wishlist_POST", error);
    }
  };
  return (
    <button type="button" onClick={handleLike}>
          <Heart fill={`${isLike ? "red" : "white"}`} />
    </button>
  )
}

export default HeartFavorites