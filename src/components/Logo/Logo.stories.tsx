import { Story, Meta } from '@storybook/react'

import Logo, { LogoProps } from './Logo'

export default {
  title: 'Components/Logo',
  component: Logo,
  decorators: [(Story) => <Story />],
  argTypes: {
    fill: { control: 'color' },
  },
} as Meta

const Template: Story<LogoProps> = (args) => (
  <div style={{ maxWidth: 240 }}>
    <Logo {...args} />
  </div>
)

export const Default = Template.bind({})

Default.args = {
  fill: '#000',
}
