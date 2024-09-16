export const getCollections = async()=>{
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`,{
            method: "GET"
        })
        
        if(res.ok){
            return await res.json();
        }
    } catch (error) {
        console.log('[Collections_GET]', error);
    }
}

export const getCollectionDetails = async(collectionId: string)=>{
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections/${collectionId}`,{
            method: "GET"
        })
        
        if(res.ok){
            return await res.json();
        }
    } catch (error) {
        console.log('[CollectionId_GET]', error);
    }
}

export const getProducts = async()=>{
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
        
        
        if(res.ok){
            return await res.json();
            
        }
    } catch (error) {
        console.log('[Products_GET]', error);
    }
}

export const getProductDetails = async(productId: string)=>{
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`,{
            method: "GET"
        })
        
        if(res.ok){
            return await res.json();
        }
    } catch (error) {
        console.log('[ProductDetails_GET]', error);
    }
}

export const getProductsCategorys = async()=>{
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categorys`,{
            method: "GET"
        })
        
        if(res.ok){
            return await res.json();
        }
    } catch (error) {
        console.log('[categorys_GET]', error);
    }
}

export const getProductsCategory = async(category: string)=>{
    console.log("category",category);
    
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categorys/${category}`,{
            method: "GET"
        })
        
        if(res.ok){
            return await res.json();
        }
    } catch (error) {
        console.log('[category_GET]', error);
    }
}

export const getSearchQuery = async(query:string)=>{
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`,{
            method: "GET"
        })
        
        if(res.ok){
            return await res.json();
        }
    } catch (error) {
        console.log('[categorys_GET]', error);
    }
}

export const getOrders = async(cutomerId:string)=>{
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/customer/${cutomerId}`,{
            method: "GET"
        })
        
        if(res.ok){
            return await res.json();
            // console.log(await res.json());
            
        }
    } catch (error) {
        console.log('[categorys_GET]', error);
    }
}

export const getRelatedProducts = async(productId:string)=>{
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related`,{
            method: "GET"
        })
        
        if(res.ok){
            return await res.json();
            // console.log(await res.json());
            
        }
    } catch (error) {
        console.log('[categorys_GET]', error);
    }
}
