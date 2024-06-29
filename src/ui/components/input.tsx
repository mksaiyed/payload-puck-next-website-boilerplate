import * as React from 'react'

import { cn } from '@/lib/utils/cn'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

const UnderLineInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full text-lg text-black border-b border-b-black bg-transparent px-3 py-2 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:border-b-2 disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-black/50 placeholder:text-sm autofill:bg-transparent',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
UnderLineInput.displayName = 'UnderLineInput'

const UnderLineInputWhite = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full text-lg text-white border-b border-b-white bg-transparent px-3 py-2 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:border-b-2 disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-white/50 placeholder:text-sm autofill:bg-transparent',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)

UnderLineInputWhite.displayName = 'UnderLineInputWhite'

export { Input, UnderLineInput, UnderLineInputWhite }
