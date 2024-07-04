import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { ButtonComponent } from './button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonComponent> = {
  title: 'Example/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    textColor: {
      control: 'color',
    },
    borderColor: {
      control: 'color',
    },
    borderWidth: {
      control: 'text',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
  export const Primary: Story = {
    args: {
      primary: true,
      label: 'Button',
    },
  };

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};


export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const EvButton: Story = {
  args: {
    // size: 'small',
    primary: false,
    label: 'EvButton',
    buttonType: 'EvButton',
    // backgroundColor: '#a300cb',
  },
};

export const PatientInfoButton: Story = {
  args: {
    // size: 'small',
    primary: false,
    label: 'EvButton',
    // buttonType: 'EvButton',
    backgroundColor: '#ffffff',
    textColor: '#5900d6',
    borderColor: '#5900d6',
    borderWidth: '1px',
    // backgroundColor: '#a300cb',
  },
};

