import type { Meta, StoryObj } from '@storybook/angular/';

import { ProfilbuttonComponent } from '../profilbutton/profilbutton.component';

const meta: Meta<ProfilbuttonComponent> = {
  component: ProfilbuttonComponent,
  tags:['autodocs'],
  argTypes:{



  }
};

export default meta;
type Story = StoryObj<ProfilbuttonComponent>;

export const Primary: Story = {
  name:'profilbutton',

};

