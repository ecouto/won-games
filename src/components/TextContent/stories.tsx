import { Story, Meta } from '@storybook/react'

import TextContent from '.'

export default {
  title: 'TextContent',
  component: TextContent
} as Meta

export const Basic: Story = () => <TextContent />
