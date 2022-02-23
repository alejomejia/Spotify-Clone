import { Story, Meta } from '@storybook/react'

import Avatar, { AvatarProps } from './Avatar'

import avatar from '@assets/avatar.jpeg'

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    // isUserAuth: { control: 'boolean' },
  },
} as Meta

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />

export const Default = Template.bind({})

Default.args = {
  src: avatar,
  alt: 'example avatar',
  size: 160,
}
