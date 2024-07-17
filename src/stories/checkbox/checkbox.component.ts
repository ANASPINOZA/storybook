import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  @Input() checkboxText: string = "J'ai lu et j’accepte";
  @Input() termsLink: string = "/terms";
  @Input() privacyLink: string = "/privacy";
  @Input() showError: boolean = false;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      acceptTerms: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void {
    if (this.showError) {
      this.form.controls['acceptTerms'].markAsTouched();
    }
  }
}
