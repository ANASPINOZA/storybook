import { Meta, StoryObj } from '@storybook/angular';
import { dealsComponent } from './deals_maqam.component';

export default {
    title: 'Example/deals',
    component: dealsComponent,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: {
            control: 'color',
          },
          priceBackgroundColor: {
            control: 'color',
          },
    //   size: {
    //     control: { type: 'select' },
    //     options: ['small', 'medium', 'large'],
    //   },
    //   style: {
    //     control: { type: 'select' },
    //     options: ['primary', 'secondary'],
    //   },
    //   placeholder: { control: 'text' },
    //   value: { control: 'text' },
      
    },
} as Meta;

type Story = StoryObj<dealsComponent>;
export const dealsCard : Story = {
    args :{
        price: '15000',
        title: 'Marin Skyline',
        location: 'Dubai',
        duration: '7 Day 6 Night',
        label: 'BOOK NOW',
        // size: 'small',
        // style: 'primary',
        // placeholder: 'Small Primary',
    },
};