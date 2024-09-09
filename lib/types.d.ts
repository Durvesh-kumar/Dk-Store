import { useUser } from '@clerk/nextjs';

type CollectionType = {
    _id: string,
    title: string,
    discription: string,
    image: string,
    products: ProductType[],
    createdAt: Date,
    updatedAt: Date
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
    createdAt: Date,
    updatedAt: Date
}

type UserType = {
    clerkId: string;
    wishlist: [string];
    orders: [string];
    createdAt: Date,
    updatedAt: Date
}