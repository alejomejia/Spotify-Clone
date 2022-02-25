import { useRouter } from 'next/router'

import Icon from 'components/Icon/Icon'

import { LinkVariant } from 'utils/animations'

import * as S from './DownloadApp.styles'

const DownloadApp = ({}) => {
  const router = useRouter()
  const downloadPath = '/download'
  const isPathActive = router.pathname === downloadPath

  const handleClick = (event: any) => {
    event.preventDefault()
    router.push(downloadPath)
  }

  return (
    <S.DownloadAppWrapper>
      <S.ButtonWrapper>
        <S.Button
          variants={LinkVariant}
          initial="initial"
          animate={isPathActive ? 'active' : 'initial'}
          whileHover="hover"
          onClick={(event) => handleClick(event)}
        >
          <Icon name="download" size={20} />
          <S.Label>Install App</S.Label>
        </S.Button>
      </S.ButtonWrapper>
    </S.DownloadAppWrapper>
  )
}

export default DownloadApp
