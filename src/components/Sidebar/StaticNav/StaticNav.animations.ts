import theme from 'utils/styled/theme'

const StaticNavVariants = {
  topNav: {
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
  },
  bottomNav: {
    initial: {
      opacity: 0.7,
    },
    hover: {
      opacity: 1,
    },
    active: {
      opacity: 1,
      transition: {
        duration: 0,
      },
    },
  },
}

export default StaticNavVariants
