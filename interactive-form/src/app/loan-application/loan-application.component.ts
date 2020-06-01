import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatFormFieldControl} from '@angular/material/form-field';

@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.css']
})
export class LoanApplicationComponent implements OnInit {

  @Input() parentForm: FormGroup;

  loanApplicationForm: FormGroup;
  loanAmount = 500;
  loanDuration = 6;
  paymentDays = [1, 2, 3];

  readonly MAX_LOAN_AMOUNT = 20000;
  readonly MIN_LOAN_AMOUNT = 500;
  readonly MAX_LOAN_DURATION = 60;
  readonly MIN_LOAN_DURATION = 6;
  readonly THUMB_LABEL = true;
  readonly MAX_NET_SALARY = 7;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.loanApplicationForm = this.formBuilder.group({});
    this.initLoanApplicationControls();
  }

  initLoanApplicationControls() {
    this.loanApplicationForm.addControl('netSalary', this.formBuilder.control('',
      [Validators.required]));
  }
}
