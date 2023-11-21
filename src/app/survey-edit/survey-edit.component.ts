import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SurveyService } from '../services/survey-service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentSurvey } from '../models/student-survey.model'; 

@Component({
  selector: 'app-survey-edit',
  templateUrl: './survey-edit.component.html',
  styleUrls: ['./survey-edit.component.css']
})
export class SurveyEditComponent implements OnInit {
  surveyForm!: FormGroup; // Non-null assertion operator
  surveyId: number = 0; // Ini

  isDataLoaded: boolean = false;
  aspectLabels: string[] = [
    'Campus',
    'Atmosphere',
    'DormRooms',
    'Students',
    'Location',
    'Sports',
  ];
  interestOptions: string[] = ['Internet', 'Other', 'Friends', 'Television'];
  submissionMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private surveyService: SurveyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.surveyId = +this.route.snapshot.params['id'];
    this.surveyService.getSurvey(this.surveyId).subscribe((surveyData) => {
      console.log("SurveyData", surveyData )
      this.initializeForm(surveyData);
      this.isDataLoaded = true;
    });
  }

  initializeForm(surveyData: StudentSurvey): void {
    this.surveyForm = new FormGroup({
      userName: new FormControl(surveyData.userName, Validators.required),
      streetAddress: new FormControl(surveyData.streetAddress, Validators.required),
      city: new FormControl(surveyData.city, Validators.required),
      state: new FormControl(surveyData.state, Validators.required),
      zipCode: new FormControl(surveyData.zipCode, [
        Validators.required,
        Validators.pattern(/^\d{5}(-\d{4})?$/)
      ]),
      email: new FormControl(surveyData.email, [Validators.required, Validators.email]),
      phoneNumber: new FormControl(surveyData.phoneNumber, [
        Validators.required,
        Validators.pattern(/^\(\d{3}\)-\d{3}-\d{4}$/)
      ]),
      dateOfSurvey: new FormControl(surveyData.dateOfSurvey, Validators.required),
      url: new FormControl(surveyData.url, Validators.required),
      Campus: new FormControl(surveyData.campus),
    Atmosphere: new FormControl(surveyData.atmosphere),
    DormRooms: new FormControl(surveyData.dormRooms),
    Students: new FormControl(surveyData.students),
    Location: new FormControl(surveyData.location),
    Sports: new FormControl(surveyData.sports),
    interest: new FormControl(surveyData.interest, Validators.required),
    graduationMonth: new FormControl(surveyData.graduationMonth, Validators.required),
    graduationYear: new FormControl(surveyData.graduationYear, [
      Validators.required,
      Validators.pattern(/^[1-2][0-9]{3}$/)
    ]),
    likelihoodToRecommend: new FormControl(surveyData.likelihoodToRecommend, Validators.required),
    comments: new FormControl(surveyData.comments),
    });
  }

  onSubmit(): void {
      this.surveyService.updateSurvey(this.surveyId, this.surveyForm.value).subscribe({
        next: (response) => {
          console.log('Survey updated successfully', response);
          this.submissionMessage = 'Survey Updated successfully!';
          
          setTimeout(() => {
            this.router.navigate(['/view-surveys']);
          }, 5000); //
        },
        error: (error) => {
          console.error('Error updating survey', error);
        }
      });
  }
}
