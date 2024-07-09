import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonsComponent } from './buttons.component';

const colorOptions = {
  Yellow: '#fa830b',
  Pink: '#DA0621',
  White: '#fff',
};
const labelOptions = {
  facebook: 'facebook',
  instagram: 'instagram',
  twitter: 'twitter',
};

const iconsOptions = {
  Facebook: 'fa-brands fa-facebook-f',
  'X-Twitter': 'fa-brands fa-x-twitter',
  YouTube: 'fa-sharp fa-solid fa-play',
};

const meta: Meta<ButtonsComponent> = {
  component: ButtonsComponent,
  tags: ['autodocs'],
  argTypes: {
    IconColor: {
      control: 'select',
      options: Object.keys(colorOptions),
      mapping: colorOptions,
    },
    LabelColor: {
      control: 'select',
      options: Object.keys(colorOptions),
      mapping: colorOptions,
    },
    label: {
      control: 'select',
      options: Object.keys(labelOptions),
      mapping: labelOptions,
    },
    Icon: {
      control: 'select',
      options: Object.keys(iconsOptions),
      mapping: iconsOptions,
    },
    backgroundColor: {
      control: 'select',
      options: Object.keys(colorOptions),
      mapping: colorOptions,
    },
    Color: {
      control: 'text',
    },
    borderColor: {
      control: 'select',
      options: Object.keys(colorOptions),
      mapping: colorOptions,
    },
  },
};

export default meta;

type Story = StoryObj<ButtonsComponent>;

export const Primary: Story = {
  name: 'standard button',
  args: {
    backgroundColor: colorOptions.Yellow,
    Color: colorOptions.White,
    LabelColor: colorOptions.White,
    IconColor: colorOptions.White,
    Icon: iconsOptions.Facebook,
    borderColor: colorOptions.Yellow,
    label: labelOptions.facebook,
  },
};
