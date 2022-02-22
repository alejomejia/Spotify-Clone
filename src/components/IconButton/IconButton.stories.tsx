import { Story, Meta } from '@storybook/react'

import IconButton, { IconButtonProps } from './IconButton'

export default {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    iconSize: { control: 'number' },
    padding: { control: 'number' },
    buttonColor: { control: 'color' },
    buttonBackground: { control: 'color' },
    buttonRadius: { control: 'number' },
    isDisabled: { control: 'boolean' },
  },
} as Meta

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />

export const Default = Template.bind({})
export const Disabled = Template.bind({})

Default.args = {
  iconName: 'home',
  iconSize: 16,
  padding: 8,
  buttonColor: '#fff',
  buttonBackground: '#000',
  buttonRadius: 32,
  isDisabled: false,
}

Disabled.args = {
  iconName: 'home',
  iconSize: 16,
  padding: 8,
  buttonColor: '#fff',
  buttonBackground: '#000',
  buttonRadius: 32,
  isDisabled: true,
}
