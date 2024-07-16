import type { Meta, StoryObj } from '@storybook/angular/';

import { NavbarComponent } from './navbar.component';

const meta: Meta<NavbarComponent> = {
  component: NavbarComponent,
  tags:['autodocs'],
  argTypes:{
    width: {
      control: 'text'
    }
  }
};

export default meta;
type Story = StoryObj<NavbarComponent>;

export const Primary: Story = {
  name:'navbar',
  args: {
    width: '100%'
  },
};

