import { CollectionConfig } from "payload/types";

export const Media: CollectionConfig = {
    slug: 'media',
    upload: {
        staticDir: 'public/uploads',
        mimeTypes: [
            'image/*',
            'video/*',
            'application/pdf'
        ],
        // Since NextJS will handle image resizing
        // We just create one thumbnail for admin panel
        imageSizes: [
            { name: 'admin_thumbnail', width: 300, position: 'center' },
        ],
        adminThumbnail: 'admin_thumbnail',
    },
    fields: [
        { name: 'alt', type: 'text', required: false },
    ],
    access: {
        read: () => true,
    }
}