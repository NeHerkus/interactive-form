import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
    this.generalInformationForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(this.MAXIMUM_NAME_LENGTH)]],
      lastName: ['', [Validators.required, Validators.maxLength(this.MAXIMUM_LAST_NAME_LENGTH)]],
      pid: ['', [Validators.required, Validators.maxLength(this.PID_LENGTH), Validators.minLength(this.PID_LENGTH)]]
    });
  }

  validateGeneralInformation() {
    if (isNaN(this.generalInformationForm.value.pid)) {
      this.errorMessage = 'Asmesns kodas turi būti skaičius';
    }
  }
}
