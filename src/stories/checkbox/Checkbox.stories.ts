import { Meta, StoryFn } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';
import { CommonModule } from '@angular/common';

export default {
  title: 'Checkbox/Checkbox',
  component: CheckboxComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [CheckboxComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: StoryFn<CheckboxComponent> = (args: CheckboxComponent) => ({
  props: args,
});

export const Unchecked = Template.bind({});
Unchecked.args = {
   state: 0,
};

export const Checked = Template.bind({});
Checked.args = {
  state: 1,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  state: 2,
};
