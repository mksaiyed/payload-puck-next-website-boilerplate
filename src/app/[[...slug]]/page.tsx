import { notFound } from 'next/navigation'
import { Data } from '@measured/puck'
import { getSlug } from './utils'
import { PageClient } from './page-client'
import { Metadata, ResolvingMetadata } from 'next/types'
import { findPage } from '@/lib/utils/page'

export async function generateMetadata(
  { params }: { params: { slug: string[] | undefined } },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const slug = getSlug(params.slug)
  const page = await findPage(slug)

  if (page === null) {
    return {}
  }

  const data = page?.data as undefined | Record<string, any>
  const root = data?.root as any
  const title = root?.title || 'Solas'
  const description = root?.description || ''
  const keywords = (root?.keywords || '').split(',')

  return {
    title,
    description,
    keywords,
  }
}

export default async function Page({ params }: { params: { slug: string[] | undefined } }) {
  const slug = getSlug(params.slug)
  const page = await findPage(slug)

  if (page === null) {
    notFound()
  }

  return <PageClient data={page.data as Data} />
}
