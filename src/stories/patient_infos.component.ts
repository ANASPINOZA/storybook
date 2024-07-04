import { CommonModule } from '@angular/common';
import { Component, INJECTOR, Input } from '@angular/core';

@Component({
    selector: 'patient-infos',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './patient_infos.component.html',
    styleUrls: ['./patient_infos.css'],
  })

export class patientInfosComponent {
    @Input()
    name = '';
    @Input()
    namePlaceholder = '';
    @Input()
     familyName = '';
    @Input()
    familyNamePlaceholder = '';
    @Input()
    address = '';
    @Input()
    addressPlaceholder = '';
    @Input()
    phone = '';
    @Input()
    phonePlaceholder = '';
    @Input()
    city = '';
    @Input()
    cityPlaceholder = '';
    @Input()
    Antecedent = '';
    @Input()
    AntecedentPlaceholder = '';
    @Input()
    mutuelle = false;
    @Input()
    remark = '';
    @Input()
    remarkPlaceholder = '';
    @Input()
    backgroundColor?: string;
    @Input()
    size: 'small' | 'medium' | 'large' = 'small';
}