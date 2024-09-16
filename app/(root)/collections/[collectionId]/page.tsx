import { getCollectionDetails } from '@/lib/actions/actions'
import React from 'react'

const CollectionDetails = async({params}:{params: {collectionId: string}}) => {
    const collectionDetails = await getCollectionDetails(params.collectionId)
  return (
    <div>CollectionDetails</div>
  )
}

export const dynamic = "force-dynamic";
export default CollectionDetails;