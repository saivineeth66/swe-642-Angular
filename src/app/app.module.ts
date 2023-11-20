import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing.module';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { SurveyService } from './services/survey-service';
import { SurveyEditComponent } from './survey-edit/survey-edit.component';
// Import other components and services here

@NgModule({
  declarations: [
    AppComponent,
    SurveyFormComponent,
    LandingPageComponent,
    SurveyListComponent,
    SurveyEditComponent
    // Declare other components here
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    // Import other modules here
  ],
  providers: [SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
