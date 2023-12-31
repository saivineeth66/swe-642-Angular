import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../services/survey-service';
import { StudentSurvey } from '../models/student-survey.model'; // Adjust the import path as necessary
import { Router } from '@angular/router';



@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {
  surveys: StudentSurvey[] = [];
  aspectLabels: string[] = ['campus', 'atmosphere', 'dormRooms', 'students', 'Location', 'Sports'];

  constructor(private surveyService: SurveyService, private router: Router) {}


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
  editSurvey(id: number): void {
    this.router.navigate(['/edit-survey', id]);
  }
  
 deleteSurvey(id: number) {
    if (confirm('Are you sure you want to delete this survey?')) {
      this.surveyService.deleteSurvey(id).subscribe(() => {
        this.surveys = this.surveys.filter(survey => survey.id !== id);
      }, error => {
        console.error('Error deleting survey', error);
      });
    }
  }
}
