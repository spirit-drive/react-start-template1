import type { Meta, StoryObj } from '@storybook/react';
import { Auth } from './Auth';

const meta: Meta<typeof Auth> = {
  title: 'Components/Auth',
  component: Auth,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
