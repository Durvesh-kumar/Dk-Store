import { create } from "zustand";
import { toast } from "react-hot-toast";
import { createJSONStorage, persist } from "zustand/middleware";

export interface CartItem {
  item: ProductType; // product
  quantity: number;
  color?: string;
  size?: string;
}

export interface CartStore {
  cartItems: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (_id: string) => void;
  increaseQuantity: (_id: string) => void;
  decresaeQuantity: (_id: string) => void;
  clearCart: ()=> void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      cartItems: [],
      addItem: (data: CartItem) => {
        const { item, quantity, size, color } = data;
        const currentItem = get().cartItems;
        const existItem = currentItem.find(
          (cartItem) => cartItem.item._id === item._id
        );

        if (existItem) {
          return toast("Product already in cart");
        }

        set({ cartItems: [...currentItem, { item, quantity, color, size }] });
        toast.success("Item add to cart");
      },
      removeItem: (idToRemove: string) => {
        const newCartItems = get().cartItems.filter(
          (cartItem) => cartItem.item._id !== idToRemove
        );
        set({ cartItems: newCartItems });
        toast.success("Item remove from cart");
      },

      increaseQuantity: (idToIncrease: string) => {
        const newCartItems = get().cartItems.map((cartItem) =>
          cartItem.item._id === idToIncrease
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        set({ cartItems: newCartItems });
        toast.success('Item quantity increased')
      },

      decresaeQuantity: (idToDecrease: string) => {
        const newCartItems = get().cartItems.map((cartItem) =>
          cartItem.item._id === idToDecrease 
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
        set({cartItems: newCartItems})
        toast.success('Item quantity decreased')
      },

      clearCart: ()=> set({cartItems: []})
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);


export default useCart;