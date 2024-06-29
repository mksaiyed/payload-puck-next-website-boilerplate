import { ImageField } from '@/puck/fields/image'
import { ComponentConfig } from '@measured/puck'
import React from 'react'

export type ImageProps = {
  image: string
  alt: string
  width?: number
}

export const Image: ComponentConfig<ImageProps> = {
  fields: {
    alt: { type: 'text' },
    image: {
      label: 'Image',
      type: 'custom',
      render(props) {
        const { name, value, onChange, field } = props
        return (
          <div>
            <label>Image</label>
            <ImageField
              value={value}
              onChange={url => {
                // @ts-ignore
                onChange(url || '')
              }}
            />
          </div>
        )
      },
    },
    width: { type: 'number' },
  },
  defaultProps: {
    image: '',
    alt: 'description of image',
    width: undefined,
  },
  render: ({ width, image = '', alt = 'description of image' }) => {
    return (
      <img
        style={{
          width,
        }}
        alt={alt}
        className="max-w-[100%] h-auto"
        src={image}
      />
    )
  },
}
