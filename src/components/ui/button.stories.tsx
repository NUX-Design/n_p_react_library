import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn } from 'storybook/test'
import { Button } from './button'

const meta = {
  component: Button,
  tags: ['ai-generated'],
  parameters: {
    layout: 'centered',
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
}

function ToggleButton() {
  const [pressed, setPressed] = useState(false)

  return (
    <Button type="button" aria-pressed={pressed} onClick={() => setPressed((value) => !value)}>
      {pressed ? 'Enabled' : 'Enable'}
    </Button>
  )
}

export const Toggle: Story = {
  render: () => <ToggleButton />,
  play: async ({ canvas, userEvent }) => {
    const toggle = canvas.getByRole('button', { name: 'Enable' })

    await expect(toggle).toHaveAttribute('aria-pressed', 'false')
    await userEvent.click(toggle)
    await expect(canvas.getByRole('button', { name: 'Enabled' })).toHaveAttribute('aria-pressed', 'true')
  },
}

export const CssCheck: Story = {
  render: () => <Button>CSS check</Button>,
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: 'CSS check' })

    await expect(getComputedStyle(button).display).toBe('inline-flex')
  },
}
