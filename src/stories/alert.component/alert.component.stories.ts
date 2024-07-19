import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { AlertComponent } from './alert.component';
import { FormsModule } from '@angular/forms';

const meta: Meta<AlertComponent> = {
title: 'Example/Date',
component: AlertComponent,
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
type Story = StoryObj<AlertComponent>;

export const Secondary: Story = {
    args: {
  
  }
}