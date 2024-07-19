import type { Meta, StoryObj } from '@storybook/angular/';

import { InputsComponent } from './input.component';

const meta: Meta<InputsComponent> = {
  component: InputsComponent,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['normal', 'disabled', 'number'],
      },
    },
    placeholder: {
      control: 'text',
    },
    width: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<InputsComponent>;

export const Primary: Story = {
  name: 'text Input ',

  args: {
    placeholder: 'Enter word to search',
    width: '1700%',
    type: 'normal',
  },
};
export const Secondry: Story = {
  name: 'number Input ',

  args: {
    placeholder: '10',
    width: '100%',
    label: 'Max results',
    type: 'number',
  },
};
export const tertorial: Story = {
  name: 'disabled Input ',

  args: {
    placeholder: 'Enter word to search',
    width: '100%',
    type: 'disabled',
  },
};
