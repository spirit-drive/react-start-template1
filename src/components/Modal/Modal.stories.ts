import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Hidden: Story = {
  args: {
    visible: false,
    title: 'Modal Title',
    children: 'Modal Content',
  },
};

export const Visible: Story = {
  args: {
    visible: true,
    title: 'Modal Title',
    children: 'Modal Content',
  },
};
