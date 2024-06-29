import { cn } from '@/lib/utils/cn'
import * as React from 'react'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 autofill:bg-transparent',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Textarea.displayName = 'Textarea'

const UnderLineTextarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full border-b border-b-black bg-transparent px-3 py-2 text-sm placeholder:text-black/50 focus-visible:outline-none focus-visible:border-b-2 disabled:cursor-not-allowed disabled:opacity-50 autofill:bg-transparent',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
UnderLineTextarea.displayName = 'UnderLineTextarea'

export { Textarea, UnderLineTextarea }
