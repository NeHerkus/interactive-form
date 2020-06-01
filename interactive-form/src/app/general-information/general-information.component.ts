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

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.generalInformationForm = this.formBuilder.group({});
    this.initGeneralInformationControls();
  }

  initGeneralInformationControls() {
    this.generalInformationForm.addControl('name', this.formBuilder.control('',
      [Validators.maxLength(16), Validators.required]));
    this.generalInformationForm.addControl('lastName', this.formBuilder.control('',
      [Validators.maxLength(16), Validators.required]));
  }

}
