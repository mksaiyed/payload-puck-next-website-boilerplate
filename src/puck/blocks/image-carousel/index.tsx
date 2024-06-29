import CustomImage from '@/components/CustomImage'
import { ImageField } from '@/puck/fields/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/ui/components/carousel'
import { ComponentConfig } from '@measured/puck'
import React from 'react'

export type ImageCarouselProps = {
  images: { url: string }[]
  aspectRatio: string
}

export const ImageCarousel: ComponentConfig<ImageCarouselProps> = {
  fields: {
    images: {
      label: 'Image',
      type: 'array',
      arrayFields: {
        url: {
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
      },
    },
    aspectRatio: { type: 'text' },
  },
  defaultProps: {
    images: [],
    aspectRatio: '483/345',
  },
  render: ({ puck, images = [], aspectRatio = '483/345' }) => {
    return (
      <div className="py-20">
        <div className="container">
          <div>
            <Carousel>
              <CarouselContent className="gap-5">
                {images.map((image, i) => (
                  <CarouselItem className="flex flex-shrink justify-center md:basis-1/2 lg:basis-1/3">
                    <div style={{ aspectRatio: aspectRatio }} className="relative w-full">
                      <CustomImage fill objectFit="cover" src={image.url} alt="" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    )
  },
}
