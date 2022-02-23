import { Story, Meta } from '@storybook/react'

import Avatar, { AvatarProps } from './Avatar'

import avatar from '@assets/avatar.jpeg'

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    size: { control: 'number' },
    variant: { control: { type: 'select', options: ['circle', 'square'] } },
  },
} as Meta

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />

export const Default = Template.bind({})

Default.args = {
  src: avatar,
  alt: 'example avatar',
  size: 160,
}
