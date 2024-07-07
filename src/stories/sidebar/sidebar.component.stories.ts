import type { Meta, StoryObj } from '@storybook/angular/';

import { SidebarComponent } from './sidebar.component';

const meta: Meta<SidebarComponent> = {
  component: SidebarComponent,
  tags:['autodocs'],
  argTypes:{
    width: {
      control: 'text'
    }
  }
};

export default meta;
type Story = StoryObj<SidebarComponent>;

export const Primary: Story = {
  name:'Sidebar mini',
  args: {
    width: '78px'
  },
};

