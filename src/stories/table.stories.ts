import type { Meta, StoryObj } from '@storybook/angular/';

import { ProcessingStatusTableComponent } from './table/table';

const meta: Meta<ProcessingStatusTableComponent> = {
  component: ProcessingStatusTableComponent,
  tags: ['autodocs'],
  argTypes: {

  },
};

export default meta;
type Story = StoryObj<ProcessingStatusTableComponent>;

export const Primary: Story = {
  name: 'table 1',
  args: {
    type : 'table 1'
  },
};
export const Secondry: Story = {
  name: 'table 2',
  args: {
    type : 'table 2'
  },
};
