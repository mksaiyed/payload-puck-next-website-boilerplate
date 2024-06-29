import { webpackBundler } from '@payloadcms/bundler-webpack'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { defaultEditorConfig, defaultEditorFeatures, lexicalEditor } from '@payloadcms/richtext-lexical'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

import { buildConfig } from 'payload/config'

import { Pages } from './payload/collections/Pages'
import BeforeLogin from './components/BeforeLogin'
import { Users } from './payload/collections/Users'
import { Media } from './payload/collections/Media'

export const serverEditorConfig = defaultEditorConfig;
serverEditorConfig.features = [
  ...defaultEditorFeatures,
]

const config = {
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || '',
  collections: [Users, Pages, Media],
  admin: {
    bundler: webpackBundler(),
    components: {
      beforeLogin: [BeforeLogin],
    },
  },
  editor: lexicalEditor({}),
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
}

export default buildConfig(config)
