import type { Meta, StoryObj } from '@storybook/angular/';

import { NotificationbuttonComponent } from '../notificationbutton/notificationbutton.component';

const meta: Meta<NotificationbuttonComponent> = {
  component: NotificationbuttonComponent,
  tags:['autodocs'],
  argTypes:{



  }
};

export default meta;
type Story = StoryObj<NotificationbuttonComponent>;

export const Primary: Story = {
  name:'Notification button',

};

