import IconHeart from './svgs/heart'
import IconHome from './svgs/home'
import IconHomeActive from './svgs/home-active'
import IconLibrary from './svgs/library'
import IconLibraryActive from './svgs/library-active'
import IconPlus from './svgs/plus'
import IconSearch from './svgs/search'
import IconSearchActive from './svgs/search-active'

import * as S from './Icon.styles'

export const SVG = {
  heart: IconHeart,
  home: IconHome,
  'home-active': IconHomeActive,
  library: IconLibrary,
  plus: IconPlus,
  'library-active': IconLibraryActive,
  search: IconSearch,
  'search-active': IconSearchActive,
} as const

export interface IconProps {
  name: keyof typeof SVG
  fill?: string
  size?: number
}

const Icon = ({ name, fill = '#000', size = 24, ...rest }: IconProps) => {
  const IconRenderer = SVG[name]

  return (
    <S.IconWrapper $fill={fill} $size={size}>
      <IconRenderer {...rest} />
    </S.IconWrapper>
  )
}

export default Icon
