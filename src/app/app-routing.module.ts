import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SurveyEditComponent } from './survey-edit/survey-edit.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'fill-survey', component: SurveyFormComponent },
  { path: 'view-surveys', component: SurveyListComponent },
  { path: 'edit-survey/:id', component: SurveyEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
