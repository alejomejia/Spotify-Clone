import { Story, Meta } from '@storybook/react'

import SignUpBar, { SignUpBarProps } from './SignUpBar'

export default {
  title: 'Components/SignUpBar',
  component: SignUpBar,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    buttonLabel: { control: 'text' },
  },
} as Meta

const Template: Story<SignUpBarProps> = (args) => <SignUpBar {...args} />

export const Default = Template.bind({})

Default.args = {
  title: 'Preview of Spotify',
  description: 'Sign up to get updates on new releases and special offers',
  buttonLabel: 'Sign Up',
}
