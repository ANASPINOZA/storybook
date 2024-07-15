import type { Meta, StoryObj } from '@storybook/angular/';

import { MainbuttonComponent } from './mainbutton.component';

const bgoptions = {
  pink: '#D80C5C',
  white: '#F5F4F1',
  green: '#24D115',
  yellow: '#FA830B'
};

const labeloptions = {
  black: '#030303',
  white: '#FFFFFF',
};

const meta: Meta<MainbuttonComponent> = {
  component: MainbuttonComponent,
  tags: ['autodocs'],
  argTypes: {
    label: { controls: Text },
    width: { controls: Text },
    backgroundColor: {
      control: 'select',
      options: Object.keys(bgoptions),
      mapping: bgoptions,
    },
    labelColor: {
      control: 'select',
      options: Object.keys(labeloptions),
      mapping: labeloptions,
    },
  },
};

export default meta;
type Story = StoryObj<MainbuttonComponent>;

export const Primary: Story = {
  name: 'Search button ',

  args: {
    label: 'Search',
    width: '100%',
    backgroundColor: bgoptions.pink,
    labelColor: labeloptions.white,
  },
};

export const Secondary: Story = {
  name: 'cancel button ',

  args: {
    label: 'Cancel',
    width: '100%',
    backgroundColor: bgoptions.white,
    labelColor: labeloptions.black,

  },
};
