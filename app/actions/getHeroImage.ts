import { client } from "../lib/sanity";

export const dynamic = 'force-dynamic'

const getHeroImage = async () => {
    const query = '*[_type == "heroImage"][0]'

    const data = await client.fetch(query);

    return data;
}

export default getHeroImage;