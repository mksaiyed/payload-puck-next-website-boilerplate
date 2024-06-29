import type { CollectionConfig } from 'payload/types'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'slug',
  },
  access: {
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
    read: () => true,
  },
  auth: false,
  fields: [
    { 
        name: 'slug',
        type: 'text',
        unique: true,
        required: true,
    },
    {
        name: 'data',
        type: 'json',
        required: true,
    },
  ],
}
