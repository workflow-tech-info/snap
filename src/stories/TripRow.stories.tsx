import type { Meta, StoryObj } from '@storybook/react';
import { TripRow } from '../components/trips/TripRow';
import demoData from '../data/demo-owner-vehicle.json';

const meta = {
  title: 'Dashboard/TripRow',
  component: TripRow,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TripRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trip: demoData.recent_trips[0],
    onClick: (id) => console.log('Trip clicked:', id),
  },
  decorators: [
    (Story) => (
      <div className="w-[500px] bg-navy p-4">
        <Story />
      </div>
    ),
  ],
};
