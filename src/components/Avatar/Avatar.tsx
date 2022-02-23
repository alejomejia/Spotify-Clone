import Image from 'next/image'

import * as S from './Avatar.styles'

export interface AvatarProps {
  src: string | StaticImageData
  alt: string
  size?: number
}

const Avatar = ({ src, alt, size = 40 }: AvatarProps) => (
  <S.AvatarWrapper>
    <Image src={src} width={size} height={size} alt={alt} unoptimized />
  </S.AvatarWrapper>
)

export default Avatar
