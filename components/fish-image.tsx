'use client'

import { useState } from 'react'
import Image, { ImageProps } from 'next/image'

interface FishImageProps extends Omit<ImageProps, 'src'> {
  src: string
}

export function FishImage({ 
  src, 
  alt, 
  className = 'object-cover',
  fill = false,
  priority = false,
  onClick,
  ...props
}: FishImageProps) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill={fill}
      className={className}
      priority={priority}
      onClick={onClick}
      unoptimized
      onError={() => setImgSrc('/images/missing-cichlid.png')}
      {...props}
    />
  )
} 