import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SurveyService } from '../services/survey-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css'],
})
export class SurveyFormComponent {
  aspectLabels: string[] = [
    'Campus',
    'Atmosphere',
    'DormRooms',
    'Students',
    'Location',
    'Sports',
  ];
  interestOptions: string[] = ['Internet', 'Other', 'Friends', 'Television'];


  surveyForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    streetAddress: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    zipCode: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{5}(-\d{4})?$/),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\(\d{3}\)-\d{3}-\d{4}$/),
    ]),
    dateOfSurvey: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
    aspects: new FormGroup({
      Campus: new FormControl(false),
      Atmosphere: new FormControl(false),
      DormRooms: new FormControl(false),
      Students: new FormControl(false),
      Location: new FormControl(false),
      Sports: new FormControl(false),
    }),
    interest: new FormControl('', Validators.required),
    graduationMonth: new FormControl('', Validators.required),
    graduationYear: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[1-2][0-9]{3}$/),
    ]),
    likelihoodToRecommend: new FormControl('Likely'),
    comments: new FormControl(''),
  });

  constructor(private surveyService: SurveyService, private router: Router) {} // Corrected injection

  onSubmit() {
    console.log('Submitting form data:', this.surveyForm.value);

    this.surveyService.addSurvey(this.surveyForm.value).subscribe({
      next: (response) => {
        console.log('Survey submitted successfully', response);
        this.router.navigate(['/success'])
      },
      error: (error) => {
        console.log('Error status:', error.status); // Check the status code
  console.log('Error response:', error.error); 
        console.error('Error submitting survey', error);
      },
    });
  }
}