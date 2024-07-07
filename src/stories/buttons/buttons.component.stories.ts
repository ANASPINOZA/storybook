import type { Meta, StoryObj } from '@storybook/angular/';
import { ButtonsComponent } from './buttons.component';

const colorOptions = {
  Yellow: '#fa830b',
  Pink: '#DA0621',
  White: '#fff',
};

const meta: Meta<ButtonsComponent> = {
  component: ButtonsComponent,
  tags: ['autodocs'],
  argTypes: {
    IconColor: {
      control: 'select',
      options: Object.keys(colorOptions),
      mapping: colorOptions,
    },
    LabelColor: {
      control: 'select',
      options: Object.keys(colorOptions),
      mapping: colorOptions,
    },
    backgroundColor: {
      control: 'select',
      options: Object.keys(colorOptions),
      mapping: colorOptions,
    },
    Color: {
      control: 'text',
    },
    borderColor: {
      control: 'select',
      options: Object.keys(colorOptions),
      mapping: colorOptions,
    },
  },
};

export default meta;
type Story = StoryObj<ButtonsComponent>;

export const Primary: Story = {
  name: 'standard button',
  args: {
    backgroundColor: '#fa830b',
    Color: '#fff',
    LabelColor: '#fff',
    IconColor: '#fff',
    borderColor: '#fa830b',
  },
};
