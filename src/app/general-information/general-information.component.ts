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
  readonly FORM_INVALID_MSG = 'Neužpildyti visi privalomi laukai';
  readonly PID_NAN_MSG = 'Atlyginimas turi būti skaičius';

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.generalInformationForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(this.MAXIMUM_NAME_LENGTH)]],
      lastName: ['', [Validators.required, Validators.maxLength(this.MAXIMUM_LAST_NAME_LENGTH)]],
      pid: ['', [Validators.required, Validators.maxLength(this.PID_LENGTH), Validators.minLength(this.PID_LENGTH)]]
    });

    this.onChanges();
  }

  onChanges() {
    this.generalInformationForm.valueChanges.subscribe(() => {
      this.errorMessage = '';
    });
  }

  validateGeneralInformation() {
    if (!this.generalInformationForm.valid) {
      this.errorMessage = this.FORM_INVALID_MSG;
    }
    if (isNaN(this.generalInformationForm.value.pid)) {
      this.errorMessage = this.PID_NAN_MSG;
    }
  }
}
