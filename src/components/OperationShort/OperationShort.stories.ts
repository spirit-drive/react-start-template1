import type { Meta, StoryObj } from '@storybook/react';
import { OperationShort } from './OperationShort';

const meta: Meta<typeof OperationShort> = {
  title: 'Components/OperationShort',
  component: OperationShort,
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
    sum: 3.05,
    desc: 'Monthly subscription',
  },
};

export const DescriptionOverflow: Story = {
  args: {
    name: 'Test Operation',
    category: 'Test Category',
    sum: 100,
    desc: 'Description with very very very long text',
  },
};
