import type { Meta, StoryObj } from '@storybook/react';
import { Auth } from './Auth';
import { AuthType } from './types';

const meta: Meta<typeof Auth> = {
  title: 'Forms/Auth',
  component: Auth,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SignUp: Story = {
  args: {
    type: AuthType.signUp,
  },
};

export const SignIn: Story = {
  args: {
    type: AuthType.signIn,
  },
};
