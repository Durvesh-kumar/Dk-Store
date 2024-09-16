"use client";
import { useUser } from "@clerk/nextjs";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface HeartPropes {
  productId: string;
  updateSignedInUser?: (updateUser:UserType)=> void;
}

const HeartFavorites: React.FC<HeartPropes> = ({ productId, updateSignedInUser }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

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
        setIsLiked(data.wishlist.includes(productId));
      }
    } catch (error) {
      console.log("[getUser]", error);
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
    e.preventDefault();

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

          const updateUser = await res.json();
          setIsLiked(updateUser.wishlist.includes(productId));
          updateSignedInUser && updateSignedInUser(updateUser);
          setLoading(false)
      }
    } catch (error) {
      console.log("[Wishlist_POST", error);
    }
  };
  return (
    <button type="button" onClick={handleLike}>
      <Heart fill={`${ isLiked ? "red" : "white"}`} />
    </button>
  );
};

export default HeartFavorites;
