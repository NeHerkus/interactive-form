import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-additional-information',
  templateUrl: './additional-information.component.html',
  styleUrls: ['./additional-information.component.css']
})
export class AdditionalInformationComponent implements OnInit {

  @Input() parentForm: FormGroup;

  additionalInformationForm: FormGroup;

  educations = [{value: 'Aukštasis'}, {value: 'Pagrindinis'}];
  positions = [{value: 'Specialistas, tarnautojas'}];
  fields = [{value: 'Informacinės technologijos'}];
  employmentContractTypes = [];
  maritalStatuses = [];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.additionalInformationForm = this.formBuilder.group({});
    this.initAdditionalInformationControls();
  }

  initAdditionalInformationControls() {
    this.additionalInformationForm.addControl('education', this.formBuilder.control('',
      [Validators.required]));
    this.additionalInformationForm.addControl('position', this.formBuilder.control('',
      [Validators.required]));
    this.additionalInformationForm.addControl('field', this.formBuilder.control('',
      [Validators.required]));
    this.additionalInformationForm.addControl('employmentContractType', this.formBuilder.control('',
      [Validators.required]));
    this.additionalInformationForm.addControl('maritalStatus', this.formBuilder.control('',
      [Validators.required]));
    this.additionalInformationForm.addControl('phone', this.formBuilder.control('',
      [Validators.required]));
  }
}
