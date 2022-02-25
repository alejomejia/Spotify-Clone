import theme from 'utils/styled/theme'

export const LinkVariant = {
  initial: {
    color: theme.color.nobel,
  },
  hover: {
    color: theme.color.white,
  },
  active: {
    color: theme.color.white,
    transition: {
      duration: 0,
    },
  },
}
