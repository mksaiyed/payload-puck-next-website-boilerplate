'use client'

import { Puck } from '@measured/puck'
import type { Data } from '@measured/puck'
import config from './puck.config'
// import { createOrUpdatePage } from "../app/(app)/edit/actions";
import '@measured/puck/puck.css'
import { Page } from '@/payload-types'

export const Editor = ({ slug, page }: { slug: string; page: Page | null }) => {
  const data =
    (page?.data as Data) ||
    ({
      root: {},
      content: [],
    } as Data)

  const onPublish = (data: Data) => {
    // createOrUpdatePage({ slug: slug, data: data });
  }

  return (
    <Puck
      // @ts-ignore
      config={config}
      data={data}
      onPublish={onPublish}
      viewports={[
        { label: 'Phone', width: 640, icon: 'Smartphone' },
        { label: 'Tablet', width: 1024, icon: 'Tablet' },
        { label: 'Desktop', width: 1536, icon: 'Monitor' },
        { label: 'Wide Dekstop', width: 1920, icon: 'Monitor' },
      ]}
    />
  )
}
