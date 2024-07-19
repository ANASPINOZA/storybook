import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';
const standartbgOptions = {
  LightPurple: '#5C4ABD',
  Purple:'#4F3279',
  DarkPurple:'#472351',
  White: '#FFFFFF',
  Green:'#2DCE98',
  GreenForest:'#22B100',
  Gray:'#C9C9C9',
  Orange:'#F89610',
  Marron:'#7B383C',
  Black:'#1D1D1D',
  Navy:'#004C94',
  Red:'#F4270C',
  Blue:'#2ECCC2',  
  LightBlue:'#3BBEDD', 
 


};
const borderOptions = {
  border: '2px solid',
  none: '0px solid',
};
const labelOptions = {
  white: '#FFFFFF',
  blue: '#5C4ABD',
  green:'#2DCE98',
  gray:'#C9C9C9',
};
const shadowOptions = {
  shadow: '0 3px 3px rgba(0, 0, 0, 0.16)',
  none: ' ',
};
const iconOptions = {
  None: 'none',
  Star: 'star',
  Affecter: 'Affecter',
  Upload: 'Upload',
  Télécharger: 'télécharger',
  AffecterCoursier: 'Affectercoursier',
  Démarrage: 'Démarrage',
  Fin: 'Fin',
  Validation: 'Validation',
  Supprimer: 'Supprimer',
  Afficher: 'Afficher',
  Doctor: 'doctor',
  Trendingup: 'trending-up',
  Trendingdown: 'trending-down',
  DriverLicense: 'driver-license',

};
const iconColorOptions = {
  white: 'white',
  blue: '#5C4ABD',
};
const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'Button/button',
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'select',
      options: Object.keys(standartbgOptions),
      mapping: standartbgOptions,
    },
    border: {
      control: 'select',
      options: Object.keys(borderOptions),
      mapping: borderOptions,
    },
    labelColor: {
      control: 'select',
      options: Object.keys(labelOptions),
      mapping: labelOptions,
    },

    icon: {
      control: 'select',
      options: Object.keys(iconOptions),
      mapping: iconOptions,
    },
    iconColor: {
      control: 'select',
      options: Object.keys(iconColorOptions),
      mapping: iconColorOptions,
    },
  },
};
export default meta;
type Story = StoryObj<ButtonComponent>;
export const Primary: Story = {
  name: 'standard button',
  args: {
    label: 'button label',
    labelColor: '#5C4ABD',
    backgroundColor: '#fff',
    border: '2px solid',
    icon: 'none',
    iconColor: 'white', // Default icon color
  },
};
export const button_icon: Story = {
  name: 'button with icon',
  args: {
    label: 'button label',
    labelColor: '#fff',
    backgroundColor: '#5C4ABD',
    border: '0px solid',
    icon: 'star',
    iconColor: 'white', // Set icon color
  },
};
export const icon: Story = {
  name: 'button icon',
  args: {
    labelColor: '#fff',
    backgroundColor: '#5C4ABD',
    border: '0px solid',
    icon: 'star',
    text: 'none',
    iconColor: 'white', 
    // width: '20px', 
    
  },
};
export const Secondary: Story = {
  name: 'hover button',
  args: {
    label: 'button label',
    labelColor: '#5C4ABD',
    backgroundColor: '#f5f4ff',
    border: '0px solid',
    icon: 'none',
    iconColor: 'white',
  },
};
export const Focus: Story = {
  name: 'focus button',
  args: {
    label: 'button label',
    labelColor: '#fff',
    backgroundColor: '#5C4ABD',
    border: '0px solid',
    isFocus: true,
    icon: 'none',
    iconColor: 'white', // Set icon color
  },
};
