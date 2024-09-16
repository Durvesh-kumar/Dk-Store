import { useUser } from '@clerk/nextjs';

type CollectionType = {
    _id: string,
    title: string,
    discription: string,
    image: string,
    products: ProductType[],
    createdAt: string,
    updatedAt: string
}


type ProductType ={
    _id: string
    title: string,
    discription: string,
    media: [string],
    price: number,
    pay: number,
    sizes: [string],
    category: string,
    collections:[string],
    colors: [string],
    tags: [string],
    brand: string,
    createdAt: string,
    updatedAt: string
}

type UserType = {
    clerkId: string;
    wishlist: [string];
    orders: [string];
    createdAt: string,
    updatedAt: string
}

type OrderType = {
    _id: string;
    customerClerkId: string;
    products: [OrderItemType];
    totalAmount: number;
    shippingRate:string;
    shippingAddress: object;
    createdAt: string
}

type OrderItemType ={
    _id: string;
    product: ProductType;
    color: string;
    size: string;
    quantity: number;
}