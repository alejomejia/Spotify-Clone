import styled from 'styled-components'
import { motion } from 'framer-motion'

import fonts from 'utils/styled/fonts'

export const DownloadAppWrapper = styled.div`
  margin-top: auto;
  padding: 0 24px;
`

export const ButtonWrapper = styled.div``

export const Button = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 16px;
  min-height: 40px;
  color: ${({ theme }) => theme.color.nobel};

  ${fonts.nav}
`

export const Label = styled.span``
