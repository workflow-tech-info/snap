import type { Meta, StoryObj } from '@storybook/react';
import { ServiceBookingModal } from '../components/modals/ServiceBookingModal';
import demoData from '../data/demo-owner-vehicle.json';

const meta = {
  title: 'Dashboard/ServiceBookingModal',
  component: ServiceBookingModal,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ServiceBookingModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {
  args: {
    isOpen: true,
    slots: demoData.service_slots,
    onClose: () => console.log('Modal closed'),
    onSubmit: (e) => { e.preventDefault(); console.log('Form submitted'); },
  },
};
