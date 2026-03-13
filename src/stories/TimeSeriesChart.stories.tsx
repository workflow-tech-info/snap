import type { Meta, StoryObj } from '@storybook/react';
import { TimeSeriesChart } from '../components/charts/TimeSeriesChart';
import demoData from '../data/demo-owner-vehicle.json';

const meta = {
  title: 'Dashboard/TimeSeriesChart',
  component: TimeSeriesChart,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TimeSeriesChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: demoData.timeseries_sample,
  },
  decorators: [
    (Story) => (
      <div className="w-[800px] bg-navy p-4">
        <Story />
      </div>
    ),
  ],
};
