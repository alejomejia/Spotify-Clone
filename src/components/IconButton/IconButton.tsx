import Icon, { SVG } from 'components/Icon/Icon'

import * as S from './IconButton.styles'

export interface IconButtonProps {
  iconName: keyof typeof SVG
  iconSize?: number
  padding?: number
  buttonColor?: string
  buttonBackground?: string
  buttonRadius?: number
  isDisabled?: boolean
  onClick: () => void
}

const IconButton = ({
  iconName = 'home',
  iconSize,
  padding,
  buttonColor,
  buttonBackground,
  buttonRadius,
  isDisabled,
  onClick,
}: IconButtonProps) => {
  return (
    <S.IconButtonWrapper>
      <S.Button
        $padding={padding}
        $color={buttonColor}
        $background={buttonBackground}
        $radius={buttonRadius}
        disabled={isDisabled}
        onClick={onClick}
      >
        <Icon name={iconName} size={iconSize} />
      </S.Button>
    </S.IconButtonWrapper>
  )
}

export default IconButton
