import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient.model';
@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private http: HttpClient) {}
  URL: string = 'http://localhost:8080/patient';

  addPatients(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.URL, patient);
  }
  getPatient(id: number): Observable<Patient> {
    return this.http.get<Patient>(this.URL + '/' + id);
  }
  updatePatient(id: number, patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(this.URL + '/' + id, patient);
  }
}
