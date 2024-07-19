import type { Meta, StoryObj } from '@storybook/angular';
import { MainbuttonComponent } from './mainbutton.component';

const bgoptions = {
  pink: '#D80C5C',
  white: '#F5F4F1',
  green: '#24D115',
  yellow: '#FA830B',
};

const labeloptions = {
  black: '#030303',
  white: '#FFFFFF',
};
const positionoptions = {
  left: 'left',
  right: 'right',
};
const iconsOptions = {
  Facebook: 'fa-brands fa-facebook-f',
  'X-Twitter': 'fa-brands fa-x-twitter',
  YouTube: 'fa-sharp fa-solid fa-play',
  copie: 'fa-solid fa-copy',
  supprimer: `fa-solid fa-magnifying-glass`,
};
const meta: Meta<MainbuttonComponent> = {
  component: MainbuttonComponent,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    width: { control: 'text' },
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
    icon: {
      control: 'select',
      options: Object.keys(iconsOptions),
      mapping: iconsOptions,
    },
    iconColor: {
      control: 'select',
      options: Object.keys(labeloptions),
      mapping: labeloptions,
    },
    iconPosition: {
      control: 'select',
      options: Object.keys(positionoptions),
      mapping: positionoptions,
    },
  },
};

export default meta;
type Story = StoryObj<MainbuttonComponent>;

export const Primary: Story = {
  name: 'button with text',
  args: {
    label: 'Search',
    width: '100%',
    backgroundColor: bgoptions.pink,
    labelColor: labeloptions.white,
    icon: null,
  },
};

export const Secondary: Story = {
  name: 'button With left Icon',
  args: {
    label: 'copy value',
    width: '100%',
    backgroundColor: bgoptions.pink,
    labelColor: labeloptions.white,
    icon: iconsOptions.copie,
    iconColor: '#fff',
    iconPosition: 'left',
    flex: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

export const tertorial: Story = {
  name: 'button With right Icon',
  args: {
    label: 'facebook',
    width: '13%',
    backgroundColor: bgoptions.yellow,
    labelColor: labeloptions.white,
    icon: iconsOptions.Facebook,
    iconColor: labeloptions.white,
    iconPosition: 'right',
    flex: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};
