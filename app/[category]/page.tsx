import { simplifiedProduct } from "@/interface/interface";
import { getCategory } from "../actions/getCategory"
import CardProduct from "../components/CardProduct";

interface CategoryPageProps {
    params: {
        category: string;
    }
}

export const dynamic = 'force-dynamic'

const CategoryPage: React.FC<CategoryPageProps> = async ({
    params
}) => {

    const data: simplifiedProduct[] = await getCategory(params.category);
    
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">

        <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                {data[0]?.categoryName}
            </h2>
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

export default CategoryPage
