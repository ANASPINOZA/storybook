import type { Meta, StoryObj } from '@storybook/angular/';

import { InputsComponent } from './inputs.component';

const meta: Meta<InputsComponent> = {
  component: InputsComponent,
  tags: ['autodocs'],
  argTypes: {
    inputmode: {
      control: {
        type: 'select',
        options: ['number', 'text'],
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['normal', 'disabled'],
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
    width: '50%',
    inputmode:'text',
    type:'normal'
  },
};
export const Secondry: Story = {
  name: 'number Input ',

  args: {
    placeholder: 'Enter word to search',
    width: '50%',
    inputmode:'numeric',
    type:'disabled'

  },
};
export const tertorial: Story = {
  name: 'disabled Input ',

  args: {
    placeholder: 'Enter word to search',
    width: '50%',
    inputmode:'text',
    type:'disabled'

  },
};
