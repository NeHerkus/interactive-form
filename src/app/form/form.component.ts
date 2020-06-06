import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {GeneralInformationComponent} from '../general-information/general-information.component';
import {FormGroupDirective} from '@angular/forms';
import {AdditionalInformationComponent} from '../additional-information/additional-information.component';
import {LoanApplicationComponent} from '../loan-application/loan-application.component';
import {Application} from '../shared/application';

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

  @Output() sendData: EventEmitter<any> = new EventEmitter();

  applicationTO: Application;

  constructor() {
  }

  ngOnInit(): void {
  }

  get generalInformationForm() {
    if (this.generalInformationComponent !== undefined) {
      return this.generalInformationComponent.generalInformationForm;
    }
  }

  get additionalInformationForm() {
    if (this.additionalInformationComponent !== undefined) {
      return this.additionalInformationComponent.additionalInformationForm;
    }
  }

  get loanApplicationForm() {
    if (this.loanApplicationComponent !== undefined) {
      return this.loanApplicationComponent.loanApplicationForm;
    }
  }

  buildApplicationTO() {
    this.applicationTO = Object.assign(this.generalInformationComponent.generalInformationForm.value,
      this.loanApplicationComponent.loanApplicationForm.value,
      this.additionalInformationComponent.additionalInformationForm.value);
    this.sendData.emit(this.applicationTO);
  }
}
