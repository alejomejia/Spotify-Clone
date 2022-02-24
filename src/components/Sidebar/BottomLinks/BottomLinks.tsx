import Link from 'components/Link/Link'

import * as S from './BottomLinks.styles'

const BottomLinks = () => (
  <S.BottomLinksWrapper>
    <Link
      href="https://www.spotify.com/co/legal/cookies-policy/"
      label="Cookies"
    />
    <Link
      href="https://www.spotify.com/co/legal/privacy-policy/"
      label="Privacy"
    />
  </S.BottomLinksWrapper>
)

export default BottomLinks
