import { client } from "../lib/sanity"

export const dynamic = 'force-dynamic'

export const getProduct = async (slug: string) => {
    const query = `
    *[_type == "product" && slug.current == "${slug}"][0]{
        _id,
          images,
          price,
          name,
          description,
          "slug": slug.current,
          "categoryName": category->name
      }
    `

    const data = await client.fetch(query);

    return data;
}