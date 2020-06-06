import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {FormComponent} from './form/form.component';
import {IntroPageComponent} from './intro-page/intro-page.component';


const routes: Routes = [
  {path: 'intro', component: IntroPageComponent},
  {path: 'application', component: FormComponent},
  {path: '', redirectTo: '/intro', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
