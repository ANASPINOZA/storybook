import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { DateInputComponent } from './date.input.component';
import { FormsModule } from '@angular/forms';

const meta: Meta<DateInputComponent> = {
title: 'Example/Date',
component: DateInputComponent,
tags: ['autodocs'],
decorators: [
  moduleMetadata({
      imports: [
          FormsModule
      ]
  })
],
argTypes: {
  
},
};
export default meta;
type Story = StoryObj<DateInputComponent>;

export const Secondary: Story = {
    args: {
  
  }
}