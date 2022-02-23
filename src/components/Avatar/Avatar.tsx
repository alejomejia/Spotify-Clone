import Image from 'next/image'

import * as S from './Avatar.styles'

export interface AvatarProps {
  src: string | StaticImageData
  alt: string
  size?: number
  variant?: 'circle' | 'square'
}

const Avatar = ({ src, alt, size = 40, variant = 'circle' }: AvatarProps) => (
  <S.AvatarWrapper $variant={variant}>
    <Image src={src} width={size} height={size} alt={alt} unoptimized />
  </S.AvatarWrapper>
)

export default Avatar
