import styled from 'styled-components'
import { motion } from 'framer-motion'

import fonts from 'utils/styled/fonts'

export const DownloadAppWrapper = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.color.black};
`

export const ButtonWrapper = styled.div``

export const Button = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  min-height: 40px;
  color: ${({ theme }) => theme.color.nobel};

  ${fonts.nav}
`

export const Label = styled.span``
