import { Meta, StoryObj } from '@storybook/angular';
import { TextAreaComponent } from './textArea.component';

export default {
  title: 'Example/CustomInput',
  component: TextAreaComponent,
  tags: ['autodocs'],
  argTypes: {
    resize:{
      control: { type: 'select' },
      options: ['none', 'both', 'horizontal', 'vertical'],
    },
  },
} as Meta;

type Story = StoryObj<TextAreaComponent>;

export const evTextArea : Story = {
    args :{
    },
};