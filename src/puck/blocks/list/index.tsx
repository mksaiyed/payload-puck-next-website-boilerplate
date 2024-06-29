import { ComponentConfig } from '@measured/puck'
import React from 'react'

export type ListProps = {
  items: { text: string }[]
  type: 'bullet' | 'numbered'
  fontSize: number
}

export const List: ComponentConfig<ListProps> = {
  fields: {
    items: {
      label: 'Items',
      type: 'array',
      arrayFields: {
        text: { type: 'text' },
      },
    },
    type: {
      type: 'radio',
      options: [
        { label: 'Bullet', value: 'bullet' },
        { label: 'Numbered', value: 'numbered' },
      ],
    },
    fontSize: { type: 'number', min: 14 },
  },
  defaultProps: {
    type: 'bullet',
    items: [
      {
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, est.',
      },
      {
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, est.',
      },
      {
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, est.',
      },
      {
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, est.',
      },
      {
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, est.',
      },
      {
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, est.',
      },
    ],
    fontSize: 16,
  },
  render: ({ puck, items, type = 'bullet', fontSize = 16 }) => {
    const elName = {
      bullet: 'ul',
      numbered: 'ol',
    }[type]

    const Tag = elName as keyof JSX.IntrinsicElements

    return (
      <div className="mx-2">
        <Tag style={{ fontSize }}>
          {items.map(({ text }, i) => (
            <li
              key={i}
              className="flex before:flex-shrink-0 before:mt-1 before:content-[''] before:inline-block before:w-4 before:h-4 before:bg-teal-600 before:mr-4 my-2 "
            >
              {text}
            </li>
          ))}
        </Tag>
      </div>
    )
  },
}
