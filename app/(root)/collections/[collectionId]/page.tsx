import { getCollectionDetails } from '@/lib/actions'
import React from 'react'

const CollectionDetails = async({params}:{params: {collectionId: string}}) => {
    const collectionDetails = await getCollectionDetails(params.collectionId)
  return (
    <div>CollectionDetails</div>
  )
}

export default CollectionDetails