import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../services/survey-service';
import { StudentSurvey } from '../models/student-survey.model'; // Adjust the import path as necessary


@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {
  surveys: StudentSurvey[] = [];

  constructor(private surveyService: SurveyService) {}

  ngOnInit() {
    this.surveyService.getSurveys().subscribe(
      (data) => {
        this.surveys = data;
      },
      (error) => {
        console.error('Error fetching surveys', error);
      }
    );
  }
  editSurvey(survey: StudentSurvey) {
    this.surveyService.editSurvey(survey.id, survey).subscribe({
      next: (updatedSurvey) => {
        console.log('Survey updated successfully', updatedSurvey);
        // Update the local survey list or re-fetch the surveys
      },
      error: (error) => {
        console.error('Error updating survey', error);
      }
    });
  }
  
 deleteSurvey(id: number) {
    if (confirm('Are you sure you want to delete this survey?')) {
      this.surveyService.deleteSurvey(id).subscribe(() => {
        // Remove the deleted survey from the list or reload the list
        this.surveyService.getSurveys()
      }, error => {
        console.error('Error deleting survey', error);
      });
    }
  }
}
