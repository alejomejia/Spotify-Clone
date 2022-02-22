import styled from 'styled-components'
import { motion } from 'framer-motion'

interface ButtonProps {
  $padding?: string
  $fontSize?: number
  $color?: string
  $backgroundColor?: string
}

export const ButtonWrapper = styled.div``

export const Button = styled(motion.button)<ButtonProps>`
  cursor: pointer;
  border: none;
  border-radius: 36px;
  letter-spacing: 1.75px;
  font-weight: 700;
  text-transform: uppercase;
  transform-origin: center center;

  padding: ${({ $padding }) => $padding};
  font-size: ${({ $fontSize }) => $fontSize}px;
  color: ${({ $color, theme }) => $color || theme.color.codGray};
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor || 'transparent'};
`
