import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormComponent} from './form/form.component';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatStepperModule} from '@angular/material/stepper';
import {GeneralInformationComponent} from './general-information/general-information.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdditionalInformationComponent} from './additional-information/additional-information.component';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {LoanApplicationComponent} from './loan-application/loan-application.component';
import {IntroPageComponent} from './intro-page/intro-page.component';
import {SummaryComponent} from './summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    GeneralInformationComponent,
    AdditionalInformationComponent,
    LoanApplicationComponent,
    IntroPageComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSliderModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
