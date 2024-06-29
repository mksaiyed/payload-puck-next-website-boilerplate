export function getSlug(slug: string[] | undefined) {
    return '/' + (slug || []).join('/');
}