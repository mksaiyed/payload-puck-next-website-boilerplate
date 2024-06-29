import { cn } from '@/lib/utils/cn'
import { ComponentConfig } from '@measured/puck'
import React from 'react'

export type ParagraphProps = {
  content: string
  fontSize: number
  textAlign: 'center' | 'left' | 'right'
  color: 'default' | 'muted'
}

export const Paragraph: ComponentConfig<ParagraphProps> = {
  fields: {
    content: { type: 'textarea' },
    fontSize: { type: 'number', min: 0 },
    textAlign: {
      type: 'radio',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' },
      ],
    },
    color: {
      type: 'radio',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Muted', value: 'muted' },
      ],
    },
  },
  defaultProps: {
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eius amet, nesciunt deleniti quisquam qui modi ea voluptate repellat dolore.',
    fontSize: 16,
    textAlign: 'center',
    color: 'default',
  },
  render: ({
    content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eius amet, nesciunt deleniti quisquam qui modi ea voluptate repellat dolore.',
    fontSize = 16,
    textAlign = 'center',
    color = 'default',
  }) => {
    return (
      <p
        style={{ fontSize: `${fontSize}px` }}
        className={cn({
          'text-center': textAlign === 'center',
          'text-left': textAlign === 'left',
          'text-right': textAlign === 'right',
          'text-black/40': color === 'muted',
        })}
      >
        {content}
      </p>
    )
  },
}
