import { Meta, StoryObj } from '@storybook/angular';
import { patientInfosComponent } from './patient_infos.component';
// import { style } from '@angular/animations';


export default {
    title: 'Example/patient_infos',
    component: patientInfosComponent,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: {
            control: 'color',
          },

      
    },
} as Meta;

type Story = StoryObj<patientInfosComponent>;
export const patient_infos : Story = {
    args :{
        namePlaceholder: 'Name',
        familyNamePlaceholder: 'Family Name',
        addressPlaceholder: 'Address',
        phonePlaceholder: 'Phone',
        cityPlaceholder: 'City',
        AntecedentPlaceholder: 'Antecedent',
        remarkPlaceholder: 'Remark',

        // size: 'small',
        // style: 'primary',
        // placeholder: 'Small Primary',
    },
};