import type { Meta, StoryObj } from '@storybook/angular';
import { IconComponent } from './icon.component';

const colorOptions = {
  Black: '#000',
  Orange: '#FA830B',
};

const iconOptions = {
  Facebook: 'fa-brands fa-facebook-f',
  'X-Twitter': 'fa-brands fa-x-twitter',
  YouTube: 'fa-sharp fa-solid fa-play',
  'Get Facebook comments': 'fa-sharp fa-solid fa-share-nodes',
  'Get Facebook Page': 'fa-solid fa-comment',
  'Get Facebook Posts': 'fa-solid fa-flag',
};

const meta: Meta<IconComponent> = {
  component: IconComponent,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'select',
      options: Object.keys(iconOptions),
      mapping: iconOptions,
    },
    iconColor: {
      control: 'select',
      options: Object.keys(colorOptions),
      mapping: colorOptions,
    },
    icon: {
      control: 'select',
      options: Object.keys(iconOptions),
      mapping: iconOptions,
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
  },
};

export const Secondary: Story = {
  name: 'social media actions',
  args: {
    label: 'Get Facebook comments',
    icon: 'fa-sharp fa-solid fa-share-nodes',
    iconColor: '#FA830B',
  },
};
