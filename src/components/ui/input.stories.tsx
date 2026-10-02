import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Input } from './input'

const meta = {
  component: Input,
  tags: ['ai-generated'],
  parameters: {
    layout: 'centered',
  },
  args: {
    type: 'email',
    placeholder: 'you@example.com',
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Email: Story = {
  render: (args) => (
    <div className="grid w-80 gap-2">
      <label className="text-sm font-medium" htmlFor="storybook-email">Email address</label>
      <Input {...args} id="storybook-email" autoComplete="email" />
    </div>
  ),
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByLabelText('Email address')

    await userEvent.type(input, 'hello@example.com')
    await expect(input).toHaveValue('hello@example.com')
  },
}
