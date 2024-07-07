import type { Meta, StoryObj } from '@storybook/angular';

import { IconComponent } from './icon.component';

const meta: Meta<IconComponent> = {
  component: IconComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<IconComponent>;

export const Primary: Story = {
  // 👇 Rename this story
  name: 'primary',
  args: {
    label: 'twitter',
    icon: 'fa-brands fa-x-twitter'
    // primary: true,
  },
};
export const secondary: Story = {
  // 👇 Rename this story
  name: 'I am the primary',
  args: {
    label: 'Facebook',
    icon:'fa-brands fa-facebook-f fa-xl'
    // primary: true,
  },
};
