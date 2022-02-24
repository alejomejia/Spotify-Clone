import { Story, Meta } from '@storybook/react'

import Icon, { IconProps } from './Icon'

import theme from 'utils/styled/theme'

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    fill: { control: 'color' },
    size: { control: 'number' },
  },
} as Meta

const Template: Story<IconProps> = (args) => <Icon {...args} />

export const Default = Template.bind({})

Default.args = {
  name: 'home',
  fill: theme.color.white,
  size: 32,
}
