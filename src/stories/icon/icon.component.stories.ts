import type { Meta, StoryObj } from '@storybook/angular';

import { IconComponent } from './icon.component';

const meta: Meta<IconComponent> = {
  component: IconComponent,
};

export default meta;
type Story = StoryObj<IconComponent>;

export const Primary: Story = {
  // 👇 Rename this story
  name: 'primary',
  args: {
    label: 'Facebook',
    primary: true,
  },
};
export const secondary: Story = {
  // 👇 Rename this story
  name: 'I am the primary',
  args: {
    label: 'Facebook',
    primary: true,
  },
};
