import { ReactNode } from 'react'
import '../assets/css/global.css'
import { Roboto, League_Gothic } from 'next/font/google'
import { cn } from '@/lib/utils/cn'
import { isEditMode } from './utils/is-edit-mode'

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  variable: '--font-roboto',
  subsets: ['latin', 'latin-ext'],
  display: 'auto',
})

const league_Gothic = League_Gothic({
  weight: ['400'],
  variable: '--font-league-gothic',
  subsets: ['latin', 'latin-ext'],
  display: 'auto',
})

export type RootProps = {
  title: string
  description: string
  keywords: string
  children: ReactNode
}

export const Root = ({ title, children, keywords, description, ...rest }: RootProps) => {
  const editMode = isEditMode(rest)

  return (
    <div className={cn(roboto.variable, roboto.className, league_Gothic.variable)}>{children}</div>
  )
}
