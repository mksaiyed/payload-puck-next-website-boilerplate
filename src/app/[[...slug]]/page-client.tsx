'use client'

import puckConfig from '@/puck/puck.config'
import { Data, Render } from '@measured/puck'

export function PageClient({ data }: { data: Data }) {
  return (
    <Render
      // @ts-ignore
      config={puckConfig}
      data={data}
    />
  )
}
