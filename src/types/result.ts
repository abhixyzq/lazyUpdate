export interface SubjectMarks {
  subject: string;
  ese: string;
  cia: string;
  total: string;
  grade: string;
  credit: string;
}

export interface UgResultData {
  marksheetNo: string | null;
  name: string;
  fatherName: string;
  rollNo: string;
  registrationNo: string;
  institute: string;
  programme: string;
  semesterResult: string;
  totalCredit: string;
  sgpa: string | null;
  subjects: SubjectMarks[];
  fetchedAt: string;
}

export interface FetchResultResponse {
  success: boolean;
  data?: UgResultData;
  error?: string;
}
