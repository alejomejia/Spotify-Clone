import { Story, Meta } from '@storybook/react'

import Header, { HeaderProps } from './Header'

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    isUserAuth: { control: 'boolean' },
  },
} as Meta

const Template: Story<HeaderProps> = (args) => <Header {...args} />

export const Default = Template.bind({})

Default.args = {
  isUserAuth: true,
}
