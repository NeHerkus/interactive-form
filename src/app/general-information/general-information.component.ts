import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {angularClassDecoratorKeys} from "codelyzer/util/utils";
import {isNumber} from "util";

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.css']
})
export class GeneralInformationComponent implements OnInit {

  @Input() parentForm: FormGroup;

  generalInformationForm: FormGroup;
  errorMessage = '';

  readonly MAXIMUM_NAME_LENGTH = 32;
  readonly MAXIMUM_LAST_NAME_LENGTH = 32;
  readonly PID_LENGTH = 11;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.generalInformationForm = this.formBuilder.group({});
    this.initGeneralInformationControls();
  }

  initGeneralInformationControls() {
    this.generalInformationForm.addControl('name', this.formBuilder.control('',
      [Validators.maxLength(this.MAXIMUM_NAME_LENGTH), Validators.required]));
    this.generalInformationForm.addControl('lastName', this.formBuilder.control('',
      [Validators.maxLength(this.MAXIMUM_LAST_NAME_LENGTH), Validators.required]));
    this.generalInformationForm.addControl('pid', this.formBuilder.control('',
      [Validators.maxLength(this.PID_LENGTH), Validators.minLength(this.PID_LENGTH), Validators.required]));
  }

  validateGeneralInformation() {
    if (isNaN(this.generalInformationForm.value.pid)) {
      this.errorMessage = 'Asmesns kodas turi būti skaičius';
    }
  }
}
