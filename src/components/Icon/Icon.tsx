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
  homeActive: IconHomeActive,
  library: IconLibrary,
  plus: IconPlus,
  libraryActive: IconLibraryActive,
  search: IconSearch,
  searchActive: IconSearchActive,
} as const

export interface IconProps {
  name: keyof typeof SVG
  fill?: string
  size?: number
}

const Icon = ({
  name = 'home',
  fill = 'currentColor',
  size = 24,
}: IconProps) => {
  const IconRenderer = SVG[name]

  return (
    <S.IconWrapper $fill={fill} $size={size}>
      <IconRenderer />
    </S.IconWrapper>
  )
}

export default Icon
