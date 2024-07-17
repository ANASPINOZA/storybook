import { moduleMetadata, Meta, StoryFn } from '@storybook/angular';
import { SideBarComponent } from './side-bar.component';

export default {
  title: 'sidebar/SideBar',
  component: SideBarComponent,
  decorators: [
    moduleMetadata({
      declarations: [SideBarComponent],
      imports: [],
    }),
  ],
} as Meta;

const Template: StoryFn<SideBarComponent> = (args: SideBarComponent) => ({
    tags:['autodocs'],
  props: args,
  argTypes:{
    width: {
      control: 'text'
    }
}});

export const Default = Template.bind({});
Default.args = {
    name:'Sidebar mini',
    args: {
      width: '70px'
    },
};
