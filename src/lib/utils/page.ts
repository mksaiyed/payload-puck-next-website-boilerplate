'use server';

import { getPayloadClient } from "./getPayload";

export async function findPage(slug: string) {

    const payload = await getPayloadClient();

    const { docs: pages } = await payload.find({
        collection: 'pages',
        where: { slug: { equals: slug } },
        limit: 1,
    });

    if (pages.length <= 0) {
        return null;
    }

    return pages[0];
}