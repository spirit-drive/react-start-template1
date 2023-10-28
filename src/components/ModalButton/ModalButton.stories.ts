import type { Meta, StoryObj } from '@storybook/react';
import { ModalButton } from './ModalButton';

const meta: Meta<typeof ModalButton> = {
  title: 'Components/ModalButton',
  component: ModalButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
