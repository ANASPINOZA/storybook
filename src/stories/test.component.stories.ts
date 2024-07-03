import type { Meta, StoryObj } from '@storybook/angular';
import {TestComponent} from './test.component'


const meta: Meta<TestComponent>={

    title: 'Example/Button',
    component: TestComponent,
    tags: ['autodocs'],
    argTypes: {
       color:{
        control: 'color',
       },
       width:{
        control: 'text',
       }
      },
};
export default meta;
type Story = StoryObj<TestComponent>;

export const test: Story = {
    args: {
        color : "blue",
        width: "700px"
    },
  };