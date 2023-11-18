import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentSurvey } from '../models/student-survey.model';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private apiUrl = 'http://localhost:8080/api/v1/survey';
  

  constructor(private http: HttpClient) { }

  addSurvey(surveyData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/addsurvey', surveyData);
  }
  getSurveys(): Observable<StudentSurvey[]> {
    return this.http.get<StudentSurvey[]>(this.apiUrl + '/getallsurveys');
  }
  deleteSurvey(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete/${id}`);
  }
  editSurvey(id: number, surveyData: StudentSurvey): Observable<StudentSurvey> {
    return this.http.put<StudentSurvey>(`${this.apiUrl}/update/${id}`, surveyData);
  }
  
}
