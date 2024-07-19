import type { Meta, StoryObj } from '@storybook/angular';
import { dropdownComponent } from './dropdown.component';

const meta: Meta<dropdownComponent> = {
  component: dropdownComponent,
  title: 'Dropdown/dropdown',

  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['select', 'text'],
      },
    },
    options: {
      control: 'object',
    },
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<dropdownComponent>;

export const Dropdown: Story = {
  name: 'Dropdown',

  args: {
    type: 'select',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
    ],
    label: 'Dropdown Input',
    placeholder: 'Select an option',

  },
};
