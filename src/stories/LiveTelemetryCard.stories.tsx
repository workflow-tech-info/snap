import type { Meta, StoryObj } from '@storybook/react';
import { LiveTelemetryCard } from '../components/telemetry/LiveTelemetryCard';
import demoData from '../data/demo-owner-vehicle.json';

const meta = {
  title: 'Dashboard/LiveTelemetryCard',
  component: LiveTelemetryCard,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LiveTelemetryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic state with full data
export const Default: Story = {
  args: {
    data: demoData.telemetry_live,
  },
  decorators: [
    (Story) => (
      <div className="w-[400px] bg-navy p-4">
        <Story />
      </div>
    ),
  ],
};

// Offline state
export const OfflineState: Story = {
  args: {
    data: demoData.telemetry_live,
    isOffline: true,
  },
  decorators: [
    (Story) => (
      <div className="w-[400px] bg-navy p-4">
        <Story />
      </div>
    ),
  ],
};

// Fault storm (simulation based on data mutations)
export const FaultStorm: Story = {
  args: {
    data: {
      ...demoData.telemetry_live,
      coolant_c: 115, // Danger temp
      engine_load_pct: 94,
      misfires_24h: 18,
      fault_codes: [
        { code: "P0300", desc: "Random/Multiple Cylinder Misfire Detected", count: 18, last_seen: "2026-03-06T18:12:00+05:30" },
        { code: "P0302", desc: "Misfire cylinder 2", count: 8, last_seen: "2026-03-06T03:12:00+05:30" }
      ]
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[400px] bg-navy p-4">
        <Story />
      </div>
    ),
  ],
};
