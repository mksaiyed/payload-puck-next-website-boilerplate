'use client'

import { Puck } from '@measured/puck'
import config from '@/puck/puck.config'
import '@measured/puck/puck.css'

const initialData = {}

// Save the data to your database
const save = data => {}

// Render Puck editor
export function Editor() {
  return (
    <Puck
      // @ts-ignore
      config={config}
      data={initialData}
      onPublish={save}
    />
  )
}
