import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {GeneralInformationComponent} from '../general-information/general-information.component';
import {FormGroupDirective} from '@angular/forms';
import {AdditionalInformationComponent} from '../additional-information/additional-information.component';
import {LoanApplicationComponent} from '../loan-application/loan-application.component';
import {Application} from '../shared/application';
import {MatStepper} from '@angular/material/stepper';

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
  private stepper: MatStepper;

  constructor() {
  }

  ngOnInit(): void {
  }

  saveStepper(stepper: MatStepper) {
    this.stepper = stepper;
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

  validateGeneralInformation() {
    this.generalInformationComponent.validateGeneralInformation();
    if (this.generalInformationComponent.errorMessage === ''
      && this.generalInformationComponent.generalInformationForm.valid) {
      this.goForward();
    }
  }

  validateLoanInformation() {
    this.loanApplicationComponent.validateLoanInformation();
    if (this.loanApplicationComponent.errorMessage === ''
      && this.loanApplicationComponent.loanApplicationForm.valid) {
      this.goForward();
    }
  }

  validateAdditionalInformation() {
    this.additionalInformationComponent.validateAdditionalInformation();
    if (this.additionalInformationComponent.errorMessage === ''
    && this.additionalInformationComponent.additionalInformationForm.valid) {
      this.goForward();
    }
  }

  goForward() {
    this.stepper.selected.completed = true;
    this.stepper.next();
  }

  goBack() {
    const stepper = this.stepper;
    const index = stepper.selectedIndex;
    stepper.previous();
    stepper._steps.toArray()[index].interacted = false;
  }
}
