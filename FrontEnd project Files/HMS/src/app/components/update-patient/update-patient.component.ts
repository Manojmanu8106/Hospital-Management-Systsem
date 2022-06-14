import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Doctor } from 'src/app/models/doctor.model';
import { DoctorService } from '../../services/doctor.service';
import { FormGroup, FormControl } from '@angular/forms';
import { PatientService } from 'src/app/services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.scss'],
})
export class UpdatePatientComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private doctorService: DoctorService,
    private patientService: PatientService,
    private router: Router
  ) {}
  loading: boolean;
  doctors: Doctor[];
  enable: boolean;
  error: boolean;
  idForm = this.fb.group({
    id: ['', Validators.required],
  });
  get id() {
    return this.idForm.get('id');
  }
  patientForm = this.fb.group({
    name: ['', Validators.required],
    doctor: [''],
    prescription: [''],
  });
  get name() {
    return this.patientForm.get('name');
  }
  get doctor() {
    return this.patientForm.get('doctor');
  }
  get prescription() {
    return this.patientForm.get('prescription');
  }
  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe((doctors) => {
      this.doctors = doctors;
    });
    this.enable = false;
    this.error = false;
    this.loading = false;
  }
  onSubmit() {
    if (this.idForm.valid) {
      this.patientService.getPatient(this.idForm.controls.id.value).subscribe(
        (data) => {
          this.enable = true;
          this.patientForm.patchValue(data);
        },
        (err) => {
          this.error = true;
        }
      );
    }
  }
  onSubmission() {
    if (this.patientForm.valid) {
      this.loading = true;
      this.patientService
        .updatePatient(this.idForm.controls.id.value, this.patientForm.value)
        .subscribe((data) => {
          this.loading = false;
          this.router.navigate(['/home']);
        });
    }
  }
}
