export const getCollections = async()=>{
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`)
        
        if(res.ok){
            return await res.json();
        }
    } catch (error) {
        console.log('[Collections_GET]', error);
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
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`)
        
        if(res.ok){
            return await res.json();
        }
    } catch (error) {
        console.log('[ProductDetails_GET]', error);
    }
}