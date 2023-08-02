import type { Meta } from '@storybook/react';

import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  tags: ['autodocs'],
};

export default meta;

export const LogoStandard = {
  args: {},
};
