import type { Meta, StoryObj } from '@storybook/angular/';

import { LangbuttonComponent } from '../langbutton/langbutton.component';

const meta: Meta<LangbuttonComponent> = {
  component: LangbuttonComponent,
  tags:['autodocs'],
  argTypes:{
    width: {
      control: 'text'
    },
    dropdownOpen: {
      table: {
        disable: true,
      },
    },
  toggleDropdown: {
      table: {
        disable: true,
      },
    },
  changeLanguage: {
      table: {
        disable: true,
      },
    },

    languages: {
      table: {
        disable: true,
      },
    },
    selectedLanguage: {
      table: {
        disable: true,
      },
    },
    url: {
      table: {
        disable: true,
      },
    },
  }
};

export default meta;
type Story = StoryObj<LangbuttonComponent>;

export const Primary: Story = {
  name:'language ',
  args: {
    width: '100%'
  },
};

