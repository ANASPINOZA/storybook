import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { DownbarComponent } from './downbar';
import { FormsModule } from '@angular/forms';

const meta: Meta<DownbarComponent> = {
title: 'Example/Downbar',
component: DownbarComponent,
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
type Story = StoryObj<DownbarComponent>;

export const Secondary: Story = {
    args: {
  
  }
}