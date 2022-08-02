import { Story, Meta } from '@storybook/react'

import Logo, { LogoProps } from '.'

export default {
  title: 'Logo',
  component: Logo,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Basic: Story<LogoProps> = (args) => <Logo {...args} />
