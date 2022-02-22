import { IconGallery, IconItem } from '@storybook/addon-docs/blocks'

import Icon, { SVG } from '../../components/Icon/Icon'

export default {
  title: 'Core/Icons',
  component: Icon,
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
  },
}

const icons = Object.keys(SVG)

const Template = () => (
  <IconGallery>
    {icons.map((name: any, index) => (
      <IconItem key={index} name={name}>
        <Icon name={name} />
      </IconItem>
    ))}
  </IconGallery>
)

export const Default = Template.bind({})
