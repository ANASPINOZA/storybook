import { Meta, Story } from '@storybook/angular';
import { DownbarComponent } from './Downbar';

export default {
  title: 'Components/Downbar',
  component: DownbarComponent,
} as Meta<DownbarComponent>;

const Template: Story<DownbarComponent> = (args) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};