import { client } from "../lib/sanity"

export const dynamic = 'force-dynamic'

export const getCategory = async (category: string) => {
    const query = `
    *[_type == "product" && category->englishName == "${category}"]{
        _id,
          "imageUrl": images[0].asset->url,
          price,
          name,
          "slug": slug.current,
          "categoryName": category->name
      }
    `

    const data = await client.fetch(query);

    return data;
}