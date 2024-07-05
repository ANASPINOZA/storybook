import type { Meta, StoryObj } from '@storybook/angular/';

import { ButtonstoryComponent } from './buttonstory.component';

const meta: Meta<ButtonstoryComponent> = {
  component: ButtonstoryComponent,
  tags:['autodocs']
};

export default meta;
type Story = StoryObj<ButtonstoryComponent>;

export const Primary: Story = {
  args: {
      label: 'button',
     
  },
};