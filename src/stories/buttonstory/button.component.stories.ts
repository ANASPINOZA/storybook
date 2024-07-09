import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const standartbgOptions = {
  blue: '#5C4ABD',
  white: '#FFFFFF',
};
const borderOptions = {
  border: '2px solid',
  none: '0px solid',
};
const labelOptions = {
  white: '#FFFFFF',
  blue: '#5C4ABD',
};
const shadowOptions = {
  shadow: '0 3px 3px rgba(0, 0, 0, 0.16)',
  none: ' ',
};
const iconOptions = {
  none: 'none',
  star: 'star',
};
const iconColorOptions = {
  white: 'white',
  blue: '#5C4ABD',
};

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'select',
      options: Object.keys(standartbgOptions),
      mapping: standartbgOptions,
    },
    border: {
      control: 'select',
      options: Object.keys(borderOptions),
      mapping: borderOptions,
    },
    labelColor: {
      control: 'select',
      options: Object.keys(labelOptions),
      mapping: labelOptions,
    },

    icon: {
      control: 'select',
      options: Object.keys(iconOptions),
      mapping: iconOptions,
    },
    iconColor: {
      control: 'select',
      options: Object.keys(iconColorOptions),
      mapping: iconColorOptions,
    },
  },
};

export default meta;

type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  name: 'standard button',
  args: {
    label: 'button label',
    labelColor: '#5C4ABD',
    backgroundColor: '#fff',
    border: '2px solid',
    icon: 'none',
    iconColor: 'white', // Default icon color
  },
};
export const button_icon: Story = {
  name: 'button with icon',
  args: {
    label: 'button label',
    labelColor: '#fff',
    backgroundColor: '#5C4ABD',
    border: '0px solid',
    icon: 'star',
    iconColor: 'white', // Set icon color
  },
};

export const Secondary: Story = {
  name: 'hover button',
  args: {
    label: 'button label',
    labelColor: '#5C4ABD',
    backgroundColor: '#f5f4ff',
    border: '0px solid',
    icon: 'none',
    iconColor: 'white',
  },
};

export const Focus: Story = {
  name: 'focus button',
  args: {
    label: 'button label',
    labelColor: '#fff',
    backgroundColor: '#5C4ABD',
    border: '0px solid',
    isFocus: true,
    icon: 'none',
    iconColor: 'white', // Set icon color
  },
};
