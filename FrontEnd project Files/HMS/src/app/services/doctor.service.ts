import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  constructor(private http: HttpClient) {}
  URL: string = 'http://localhost:8080/doctor';
  URL_One: string = 'http://localhost:8080/doctors';

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.URL_One);
  }

  addDoctor(doctor: Doctor): Observable<Doctor> {
    doctor.numberOfPatientsAttended = 0;
    return this.http.post<Doctor>(this.URL, doctor);
  }
}
