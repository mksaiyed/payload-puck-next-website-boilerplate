'use client'
import { Section } from '@/puck/components/Section/Section'
import { ComponentConfig } from '@measured/puck'
import React from 'react'

export type TextProps = {
  align: 'left' | 'center' | 'right'
  text?: string
  padding?: string
  size?: 's' | 'm'
  color: 'default' | 'muted'
  maxWidth?: string
}

export const Text: ComponentConfig<TextProps> = {
  fields: {
    text: { type: 'textarea' },
    size: {
      type: 'select',
      options: [
        { label: 'S', value: 's' },
        { label: 'M', value: 'm' },
      ],
    },
    align: {
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
    padding: { type: 'text' },
    maxWidth: { type: 'text' },
  },
  defaultProps: {
    align: 'left',
    text: 'Text',
    padding: '24px',
    size: 'm',
    color: 'default',
  },
  render: ({ align, color, text, size, padding, maxWidth }) => {
    const alignmentClasses = {
      left: 'text-left justify-start',
      center: 'text-center justify-center',
      right: 'text-right justify-end',
    }

    const colorClasses = color === 'default' ? 'text-inherit' : 'text-gray-500'

    const sizeClasses = size === 'm' ? 'text-lg' : 'text-base'

    return (
      <Section padding={padding} maxWidth={maxWidth}>
        <span
          className={`flex w-full font-light leading-6 mx-auto ${alignmentClasses[align]} ${colorClasses} ${sizeClasses}`}
          style={{ maxWidth }}
        >
          {text}
        </span>
      </Section>
    )
  },
}
