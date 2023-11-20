export interface StudentSurvey {
  id: number;
  userName: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  email: string;
  phoneNumber: string;
  dateOfSurvey: string;
  url: string; // Corresponds to the 'url' field in the FormGroup
  campus: boolean; // Assuming these are derived from the 'aspects' FormGroup
  atmosphere: boolean;
  dormRooms: boolean;
  students: boolean;
  location: boolean;
  sports: boolean;
  interest: string; // Corresponds to the 'interest' field in the FormGroup
  graduationMonth: string; // Added to match the FormGroup
  graduationYear: string; // Added to match the FormGroup
  likelihoodToRecommend: string;
  comments: string;
}
