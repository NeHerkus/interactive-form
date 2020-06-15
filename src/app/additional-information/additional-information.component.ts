import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {
  ApplicantEducation,
  ApplicantEmploymentContractType,
  ApplicantEmploymentDuration,
  ApplicantField,
  ApplicantMaritalStatus,
  ApplicantPosition
} from '../shared/application';

@Component({
  selector: 'app-additional-information',
  templateUrl: './additional-information.component.html',
  styleUrls: ['./additional-information.component.css']
})
export class AdditionalInformationComponent implements OnInit {

  @Input() parentForm: FormGroup;

  additionalInformationForm: FormGroup;

  educations = Object.keys(ApplicantEducation).map(key => ApplicantEducation[key as any]);
  positions = Object.keys(ApplicantPosition).map(key => ApplicantPosition[key as any]);
  fields = Object.keys(ApplicantField).map(key => ApplicantField[key as any]);
  employmentContractTypes = Object.keys(ApplicantEmploymentContractType)
    .map(key => ApplicantEmploymentContractType[key as any]);
  employmentDurations = Object.keys(ApplicantEmploymentDuration).map(key => ApplicantEmploymentDuration[key as any]);
  maritalStatuses = Object.keys(ApplicantMaritalStatus).map(key => ApplicantMaritalStatus[key as any]);

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.additionalInformationForm = this.formBuilder.group({
      education: ['', Validators.required],
      position: ['', Validators.required],
      field: ['', Validators.required],
      employmentDuration: ['', Validators.required],
      employmentContractType: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }
}
