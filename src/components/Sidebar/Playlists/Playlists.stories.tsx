import { Story, Meta } from '@storybook/react'

import Playlists, { PlaylistsProps } from './Playlists'

export default {
  title: 'Components/Playlists',
  component: Playlists,
  argTypes: {
    // demo: { control: 'text' },
  },
} as Meta

const Template: Story<PlaylistsProps> = (args) => (
  < Playlists {...args} />
)

export const Default = Template.bind({})

Default.args = {}


