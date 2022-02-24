import { Story, Meta } from '@storybook/react'

import Logo, { LogoProps } from './Logo'

import theme from 'utils/styled/theme'

export default {
  title: 'Components/Logo',
  component: Logo,
  argTypes: {
    fill: { control: 'color' },
    width: { control: 'text' },
  },
} as Meta

const Template: Story<LogoProps> = (args) => <Logo {...args} />

export const Default = Template.bind({})

Default.args = {
  fill: theme.color.white,
  width: '240px',
}
