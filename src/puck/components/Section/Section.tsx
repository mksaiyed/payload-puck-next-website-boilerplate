import { cn } from '@/lib/utils/cn'
import { CSSProperties, ReactNode } from 'react'
export type SectionProps = {
  className?: string
  children: ReactNode
  padding?: string
  maxWidth?: string
  style?: CSSProperties
}

export const Section = ({
  children,
  className,
  padding = '0px',
  maxWidth = '1280px',
  style = {},
}: SectionProps) => {
  return (
    <div
      className={cn(`px-4 md:px-6`, className)}
      style={{
        ...style,
        paddingTop: padding,
        paddingBottom: padding,
      }}
    >
      <div className="mx-auto w-full" style={{ maxWidth }}>
        {children}
      </div>
    </div>
  )
}
