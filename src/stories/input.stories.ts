import { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input.component';
import { EmailValidator, NgModel } from '@angular/forms';

export default {
  title: 'Example/CustomInput',
  component: InputComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    style: {
      control: { type: 'select' },
      options: ['primary', 'secondary' , 'custom' , 'evSearchBar'],
    },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    borderWidth: { control: 'text' },
    acceptType: {
        control: { type: 'select' },
        options: ['number', 'string'],
      },

    
  },
//   parameters: { 
//     docs: {
//       description: {
//         component: 'This is a customizable input component with support for different sizes and styles.',
//       },
//       source: {
//         type: 'code',
//       },
//     },
//   }
  
} as Meta;

// const Template: StoryObj<InputComponent> = (args: InputComponent) => ({
//   props: args,
// });
type Story = StoryObj<InputComponent>;

export const SmallPrimary : Story = {
    args :{
        size: 'small',
        style: 'primary',
        placeholder: 'Small Primary',
    },
};

export const MediumSecondary : Story = {
    args :{
        size: 'medium',
        style: 'secondary',
        placeholder: 'Medium Secondary',
    },
};
export const LargePrimary : Story = {
    args :{
        size: 'large',
        style: 'primary',
        placeholder: 'Large Primary',
    },
};
export const customInput : Story = {
    args :{
        size: 'large',
        style: 'custom',
        placeholder: 'custom Input',
    },
};
export const searchEv : Story = {
    args :{
        // size: 'large',
        style: 'evSearchBar',
        placeholder: 'Recherch',
        borferRadius: '40',
    },
};
export const searchEvValidator : Story = {
    args :{
        // size: 'large',
        style: 'evSearchBar',
        placeholder: 'Recherch',
        borferRadius: '40',
        acceptType: 'number',
    },
};


// export const SmallPrimary = Template.bind({});
// SmallPrimary.args = {
//   size: 'small',
//   style: 'primary',
//   placeholder: 'Small Primary',
// };

// export const MediumSecondary = Template.bind({});
// MediumSecondary.args = {
//   size: 'medium',
//   style: 'secondary',
//   placeholder: 'Medium Secondary',
// };

// export const LargePrimary = Template.bind({});
// LargePrimary.args = {
//   size: 'large',
//   style: 'primary',
//   placeholder: 'Large Primary',
// };