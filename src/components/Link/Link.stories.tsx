import { Story, Meta } from '@storybook/react'

import Link, { LinkProps } from './Link'

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    href: { control: 'text' },
    label: { control: 'text' },
  },
} as Meta

const Template: Story<LinkProps> = (args) => <Link {...args} />

export const Default = Template.bind({})

Default.args = {
  href: '/',
  label: 'Cookies and privacy',
}
