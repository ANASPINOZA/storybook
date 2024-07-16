import type { Meta, StoryObj } from '@storybook/angular';
import { InputsComponent } from './inputs.component';

const meta: Meta<InputsComponent> = {
  component: InputsComponent,
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
type Story = StoryObj<InputsComponent>;

export const Primary: Story = {
  name: 'Primary',
  args: {
    type: 'text',
    label: 'Text Input',
    placeholder: 'Enter text here',
  },
};

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
