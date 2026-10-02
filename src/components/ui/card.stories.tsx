import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card'

const meta = {
  component: Card,
  tags: ['ai-generated'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Profile: Story = {
  render: () => (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Profile settings</CardTitle>
        <CardDescription>Update the details shown on your public profile.</CardDescription>
      </CardHeader>
      <CardContent>
        <dl className="grid gap-3 text-sm">
          <div className="flex items-center justify-between gap-4">
            <dt className="text-muted-foreground">Name</dt>
            <dd className="font-medium">Niwat Yah</dd>
          </div>
          <div className="flex items-center justify-between gap-4">
            <dt className="text-muted-foreground">Role</dt>
            <dd className="font-medium">Product designer</dd>
          </div>
        </dl>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Save changes</Button>
      </CardFooter>
    </Card>
  ),
}
