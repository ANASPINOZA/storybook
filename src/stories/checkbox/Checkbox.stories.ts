import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxComponent } from './checkbox.component';

const meta: Meta<CheckboxComponent> = {
    title: 'Components/Checkbox',
//   title: 'Checkbox',
  component: CheckboxComponent,
  decorators: [
    moduleMetadata({
      declarations: [CheckboxComponent],
      imports: [ReactiveFormsModule],
    }),
  ],
  argTypes: {
    checkboxText: { control: 'text' },
    termsLink: { control: 'text' },
    privacyLink: { control: 'text' },
    showError: { control: 'boolean' }
  }
};

export default meta;

type Story = StoryObj<CheckboxComponent>;

export const Default: Story = {
  args: {
    checkboxText: "J'ai lu et j’accepte",
    termsLink: "/terms",
    privacyLink: "/privacy",
    showError: false
  }
};

export const Checked: Story = {
  args: {
    checkboxText: "J'ai lu et j’accepte",
    termsLink: "/terms",
    privacyLink: "/privacy",
    showError: false
  }
};

export const Error: Story = {
  args: {
    checkboxText: "J'ai lu et j’accepte",
    termsLink: "/terms",
    privacyLink: "/privacy",
    showError: true
  }
};
