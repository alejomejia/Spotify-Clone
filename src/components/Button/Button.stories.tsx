import { Story, Meta } from '@storybook/react'

import Button, { ButtonProps } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    padding: { control: 'text' },
    fontSize: { control: 'number' },
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
    children: { control: 'text' },
  },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  color: '#fff',
  padding: '8px 34px',
  fontSize: 14,
  backgroundColor: '#181818',
  children: 'Button',
}
