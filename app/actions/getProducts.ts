import { client } from "../lib/sanity"

export const dynamic = 'force-dynamic'

const getProducts = async () => {
    const query = `
    *[_type == "product"] | order(_createdAt desc){
        _id,
          name,
          price,
          "slug": slug.current,
          "categoryName": category->name,
          "imageUrl": images[0].asset->url
      }
    `
    const data = await client.fetch(query);

    return data;
};

export default getProducts;