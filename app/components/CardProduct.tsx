import { simplifiedProduct } from '@/interface/interface'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface CardProductProps {
    data: simplifiedProduct;
}

const CardProduct: React.FC<CardProductProps> = ({
    data
}) => {
  return (
    <Link href={`/product/${data.slug}`} className='relative group'>
        <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80 transition-opacity">
            <Image
                width={300}
                height={300}
                alt='product image'
                src={data.imageUrl}
                className="object-cover object-center w-full h-full"
            />
        </div>

        <div className="mt-4 flex justify-between">
            <div>
                <h3 className="text-sm text-gray-700">
                    {data.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                    {data.categoryName}
                </p>
            </div>

            <p className="flex gap-x-2 text-sm font-medium text-gray-900">
                <span>
                    {data.price.toLocaleString()}
                </span>
                تومان
            </p>
        </div>
    </Link>
  )
}

export default CardProduct
