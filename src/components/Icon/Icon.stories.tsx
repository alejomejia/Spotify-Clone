import { Story, Meta } from '@storybook/react'

import Icon, { IconProps } from './Icon'

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
  size: 64,
}
