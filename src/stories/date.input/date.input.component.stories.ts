import type { Meta, StoryObj } from '@storybook/angular';
import { DateInputComponent } from './date.input.component';

const meta: Meta<DateInputComponent> = {
title: 'Example/Date',
component: DateInputComponent,
tags: ['autodocs'],
argTypes: {

},
};
export default meta;
type Story = StoryObj<DateInputComponent>;

export const Secondary: Story = {
    args: {
      
    },
  };
  