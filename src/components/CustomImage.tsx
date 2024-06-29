import Image, { ImageProps } from 'next/image'
import React from 'react'

const CustomImage: React.FC<ImageProps> = props => {
  const { src, ...rest } = props
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  const modifySrc = (src: string): string => {
    if (src.includes('/api/media/file')) {
      return `${baseUrl}/uploads${src.split('/api/media/file')[1]}`
    } else if (src.includes('/uploads')) {
      return `${baseUrl}/uploads${src.split('/uploads')[1]}`
    }
    return src
  }
  const modifiedSrc = typeof src === 'string' ? modifySrc(src as string) : src
  return <Image src={modifiedSrc} {...rest} />
}

export default CustomImage
