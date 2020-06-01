import {Component, OnInit, ViewChild} from '@angular/core';
import {GeneralInformationComponent} from '../general-information/general-information.component';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [FormGroupDirective]
})
export class FormComponent implements OnInit {

  @ViewChild(GeneralInformationComponent) generalInformationComponent: GeneralInformationComponent;

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

  displayFormData() {
    console.log(this.generalInformationComponent.generalInformationForm);
  }
}
