import {Component, OnInit, ViewChild} from '@angular/core';
import {GeneralInformationComponent} from '../general-information/general-information.component';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {AdditionalInformationComponent} from '../additional-information/additional-information.component';
import {LoanApplicationComponent} from '../loan-application/loan-application.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [FormGroupDirective]
})
export class FormComponent implements OnInit {

  @ViewChild(GeneralInformationComponent) generalInformationComponent: GeneralInformationComponent;
  @ViewChild(AdditionalInformationComponent) additionalInformationComponent: AdditionalInformationComponent;
  @ViewChild(LoanApplicationComponent) loanApplicationComponent: LoanApplicationComponent;

  applicationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.applicationForm = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

  async getGeneralInformationForm() {
    return this.generalInformationComponent.generalInformationForm;
  }

  async getAdditionalInformationForm() {
    return this.additionalInformationComponent.additionalInformationForm;
  }

  async getLoanApplicationForm() {
    return this.loanApplicationComponent.loanApplicationForm;
  }

  displayFormData() {
    console.log(this.generalInformationComponent.generalInformationForm);
    console.log(this.additionalInformationComponent.additionalInformationForm);
    console.log(this.loanApplicationComponent.loanApplicationForm);
  }
}
