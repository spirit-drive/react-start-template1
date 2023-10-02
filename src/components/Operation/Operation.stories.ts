import type { Meta, StoryObj } from '@storybook/react';
import { Operation } from './Operation';

const meta: Meta<typeof Operation> = {
  title: 'Components/Operation',
  component: Operation,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Yandex.Plus',
    category: 'Digital Goods',
    sum: 3,
    desc: 'Monthly subscription',
    date: new Date(),
  },
};
