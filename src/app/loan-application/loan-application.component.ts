import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApplicantLoanPayoutDates} from '../shared/application';

@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.css']
})
export class LoanApplicationComponent implements OnInit {

  loanApplicationForm: FormGroup;
  paymentDays = Object.keys(ApplicantLoanPayoutDates).map(key => ApplicantLoanPayoutDates[key as any]);

  readonly MAX_LOAN_AMOUNT = 20000;
  readonly MIN_LOAN_AMOUNT = 500;
  readonly MAX_LOAN_DURATION = 60;
  readonly MIN_LOAN_DURATION = 6;
  readonly THUMB_LABEL = true;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.loanApplicationForm = this.formBuilder.group({
      loanAmount: [500, [Validators.required]],
      loanDuration: [6, [Validators.required]],
      paymentDay: ['', [Validators.required]]
    });
    this.initLoanApplicationControls();
  }

  initLoanApplicationControls() {
    this.loanApplicationForm.addControl('netSalary', this.formBuilder.control('',
      [Validators.required]));
  }
}
