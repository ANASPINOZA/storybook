import type { Meta, StoryObj } from '@storybook/angular/';

import { InputsComponent } from './inputs.component';

const meta: Meta<InputsComponent> = {
  component: InputsComponent,
  tags:['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['select', 'text'],
      },
    },
    options: {
      control: 'object',
    },
    placeholder: {
      control: 'text',
    },
    width: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<InputsComponent>;

export const Primary: Story = {
  name:'input ',

  args: {
    options: [
      { value: 'video', label: 'Video' },
      { value: 'channel', label: 'Channel' },
      { value: 'playlist', label: 'Playlist' },
      { value: 'film', label: 'Film' },],
   type : 'select',
    placeholder: 'Enter text...',
    width: '50%',
  },
};

