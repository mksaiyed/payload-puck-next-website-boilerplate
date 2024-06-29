import React from 'react'
import { ComponentConfig } from '@measured/puck'
import { buttonVariants } from '@/ui/components/button'
import { type VariantProps } from 'class-variance-authority'
import Link from 'next/link'

type ButtonProps = VariantProps<typeof buttonVariants>

export type ButtonGroupProps = {
  align?: string
  buttons: {
    label: string
    href: string
    variant: ButtonProps['variant']
    size: ButtonProps['size']
  }[]
}

export const ButtonGroup: ComponentConfig<ButtonGroupProps> = {
  label: 'Button Group',
  fields: {
    buttons: {
      type: 'array',
      getItemSummary: item => item.label || 'Button',
      arrayFields: {
        label: { type: 'text' },
        href: { type: 'text' },
        variant: {
          type: 'radio',
          options: [
            { label: 'default', value: 'default' },
            { label: 'secondary', value: 'secondary' },
            { label: 'beige', value: 'beige' },
            { label: 'beigeContrast', value: 'beigeContrast' },
          ],
        },
        size: {
          type: 'radio',
          options: [
            { label: 'default', value: 'default' },
            { label: 'sm', value: 'sm' },
            { label: 'lg', value: 'lg' },
            { label: 'xl', value: 'xl' },
          ],
        },
      },
      defaultItemProps: {
        label: 'Button',
        href: '#',
        size: 'default',
        variant: 'default',
      },
    },
    align: {
      type: 'radio',
      options: [
        { label: 'left', value: 'left' },
        { label: 'center', value: 'center' },
      ],
    },
  },
  defaultProps: {
    buttons: [
      {
        label: 'Learn more',
        href: '#',
        variant: 'default',
        size: 'default',
      },
    ],
  },
  render: props => {
    const { align, buttons } = props
    const alignmentClass = align === 'center' ? 'justify-center' : 'justify-start'

    return (
      <div className="">
        <div className={`flex gap-6 flex-wrap ${alignmentClass}`}>
          {buttons.map((button, i) => (
            <Link
              key={i}
              href={button.href}
              className={buttonVariants({
                size: button.size,
                variant: button.variant,
              })}
            >
              {button.label}
            </Link>
          ))}
        </div>
      </div>
    )
  },
}
