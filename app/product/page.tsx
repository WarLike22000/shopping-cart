import React from 'react'
import CardProduct from '../components/CardProduct'
import getProducts from '../actions/getProducts'
import { simplifiedProduct } from '@/interface/interface';

const ProductsPage = async () => {

    const data: simplifiedProduct[] = await getProducts();
    
  return (
    <div className="mx-auto max-w-2xl px-4 py-5 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">

        <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                همه محصولات
            </h2>
        </div>
        
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {data.map((item) => (
                    <CardProduct key={item._id} data={item} />
                ))}
        </div>
    </div>
  )
}

export default ProductsPage
