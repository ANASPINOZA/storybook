import type { Meta, StoryObj } from '@storybook/angular';
import { IconComponent } from './icon.component';

const meta: Meta<IconComponent> = {
  component: IconComponent,
  tags: ['autodocs'],
  argTypes: {
    iconColor: {
      control: 'color',
    },
    labelColor: {
      control: 'color',
    },
    iconwidth: {
      control: 'text',
    },
    icon: {
      control: 'select',
      options: [
        'fa-brands fa-facebook-f',
        'fa-brands fa-twitter',
        'fa-brands fa-instagram',
        'fa-brands fa-linkedin-in',
        'fa-brands fa-github',
      ],
    },
  },
};

export default meta;
type Story = StoryObj<IconComponent>;

export const Primary: Story = {
  name: 'Social media icons',
  args: {
    label: 'Facebook',
    icon: 'fa-brands fa-facebook-f',
    iconColor: '#000',
    labelColor: '#000',
    iconwidth: '100%',
  },
};

export const Secondary: Story = {
  name: 'social media actions',
  args: {
    label: 'Instagram',
    icon: 'fa-brands fa-instagram',
  },
};
