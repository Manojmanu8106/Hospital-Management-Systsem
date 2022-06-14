import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Patient } from 'src/app/models/patient.model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.scss'],
})
export class PatientInfoComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private patientService: PatientService
  ) {}
  patientForm = this.fb.group({
    id: ['', Validators.required],
  });
  get id() {
    return this.patientForm.get('id');
  }
  patient: Patient;
  error: boolean;
  ngOnInit(): void {
    this.error = false;
  }
  onSubmit() {
    if (this.patientForm.valid) {
      this.patientService
        .getPatient(this.patientForm.controls.id.value)
        .subscribe(
          (data) => {
            this.patient = data;
            console.log(data);
          },
          (err) => {
            console.log(err);
            this.error = true;
          }
        );
    }
  }
}
