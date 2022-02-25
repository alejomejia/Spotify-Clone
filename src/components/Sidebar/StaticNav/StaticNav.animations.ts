import theme from 'utils/styled/theme'

const StaticNavVariants = {
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
