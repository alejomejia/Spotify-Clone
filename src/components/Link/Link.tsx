import NextLink from 'next/link'

import { isExternalLink } from './Link.utils'
import * as S from './Link.styles'

export interface LinkProps {
  href: string
  label: string
  color?: string
  fontSize?: number
  fontWeight?: number
}

const Link = ({
  href = '/',
  label = 'Link',
  color,
  fontSize,
  fontWeight,
}: LinkProps) => {
  const isExternal = isExternalLink(href)

  return (
    <S.LinkWrapper>
      {isExternal ? (
        <S.Link
          href={href}
          target="_blank"
          $color={color}
          $fontSize={fontSize}
          $fontWeight={fontWeight}
        >
          {label}
        </S.Link>
      ) : (
        <NextLink href={href} passHref>
          <S.Link $color={color} $fontSize={fontSize} $fontWeight={fontWeight}>
            {label}
          </S.Link>
        </NextLink>
      )}
    </S.LinkWrapper>
  )
}

export default Link
