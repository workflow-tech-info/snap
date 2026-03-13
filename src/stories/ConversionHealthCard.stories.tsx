import type { Meta, StoryObj } from '@storybook/react';
import { ConversionHealthCard } from '../components/health/ConversionHealthCard';
import demoData from '../data/demo-owner-vehicle.json';

const meta = {
  title: 'Dashboard/ConversionHealthCard',
  component: ConversionHealthCard,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ConversionHealthCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default state
export const Default: Story = {
  args: {
    health: demoData.conversion_health,
  },
  decorators: [
    (Story) => (
      <div className="w-[500px] bg-navy p-4">
        <Story />
      </div>
    ),
  ],
};

// Critical state mock
export const CriticalState: Story = {
  args: {
    health: {
      ...demoData.conversion_health,
      combustion_efficiency_pct: 62,
      injector_balance_score: 55,
      misfire_30d: 24,
      calibration_drift_pct: 3.2,
      qa_last_check: { date: "2024-01-10", installer: "Unknown", result: "Warning" }
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[500px] bg-navy p-4">
        <Story />
      </div>
    ),
  ],
};
