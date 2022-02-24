import theme from 'utils/styled/theme'

const DownloadAppVariants = {
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

export default DownloadAppVariants
