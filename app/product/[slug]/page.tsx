import { getProduct } from '@/app/actions/getProduct'
import AddButton from '@/app/components/AddButton'
import ImageGallery from '@/app/components/ImageGallery'
import { Button } from '@/components/ui/button'
import { fullProduct } from '@/interface/interface'
import { Star, Truck } from 'lucide-react'
import React from 'react'

interface ProductPageProps {
  params: {
    slug: string
  }
}

export const dynamic = 'force-dynamic'

const ProductPage: React.FC<ProductPageProps> = async ({
  params
}) => {

  const data: fullProduct = await getProduct(params.slug);
  
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">

        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={data.images}/>

          <div className="md:py-8">
            
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 text-gray-500 inline-block">
                {data.categoryName}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {data.name}
              </h2>
            </div>

            <div className="mb-6 flex items-center gap-3 md:mb-10">
              <Button className="rounded-full gap-x-2">
                <span className="text-sm pt-1">4.2</span>
                <Star size={15} />
              </Button>

              <span className="text-sm text-gray-500 transition duration-100">
                56 امتیاز
              </span>
            </div>

            <div className="mb-4">
              <div className="flex items-end gap-2">
                <div className="flex gap-x-2 text-xl text-gray-800 md:text-2xl font-bold">
                  <span>
                    {data.price.toLocaleString()}
                  </span>
                  تومان
                </div>
              </div>
            </div>

            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <Truck size={30} />
              <span className="text-sm">2-4 حمل و نقل روزانه</span>
            </div>

            <div className="flex gap-2.5">
              <AddButton data={data} />
            </div>

            <p className="mt-12 text-base text-gray-500 tracking-wide">
              {data.description}
            </p>

          </div>
        </div>
        
      </div>
    </div>
  )
}

export default ProductPage
