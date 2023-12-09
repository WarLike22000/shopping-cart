import React from 'react'
import getNewest from '../actions/getNewest'
import { simplifiedProduct } from '@/interface/interface';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import CardProduct from './CardProduct';

const Newest = async () => {
    
    const data: simplifiedProduct[] = await getNewest();
    
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

        <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                جدیدترین محصولات
            </h2>

            <Link href="/product" className="text-primary flex items-center gap-x-1">
                بیشتر
                <span>
                    <ArrowLeft />
                </span>
            </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data.map((item) => (
                <CardProduct key={item._id} data={item} />
            ))}
        </div>
        
      </div>
    </div>
  )
}

export default Newest
