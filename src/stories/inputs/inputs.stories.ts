import type { Meta, StoryObj } from '@storybook/angular';
import { InputsComponent } from './inputs.component';

const meta: Meta<InputsComponent> = {
  component: InputsComponent,
  title: 'Inputs/inputs',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['text', 'number'],
      },
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
  name: 'Text',
  args: {
    type: 'text',
    label: 'Text Input',
    placeholder: 'ex. Text',
    fontSize: '15px',
  },
};

export const Message: Story = {
  name: 'Message',
  args: {
    type: 'text',
    label: 'Text Input',
    placeholder: 'type message',
    borderRadius: '10px',
    height: '30px',
    fontSize: '13px',
  },
};
export const PhoneNumberInput: Story = {
  name: 'Phone number',
  args: {
    type: 'number',
    label: 'Phone Number',
    placeholder: '(+212) 608-657-9007',
    fontSize: '15px',
  },
};
