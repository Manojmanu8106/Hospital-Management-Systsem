import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor.model';
import { DoctorService } from 'src/app/services/doctor.service';
@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.scss'],
})
export class UpdateDoctorComponent implements OnInit {
  enable: boolean;
  loading: boolean;

  constructor(
    private fb: FormBuilder,
    private doctorService: DoctorService,
    private router: Router
  ) {}

  doctors: Doctor[];
  idForm = this.fb.group({
    doctor: [''],
  });

  doctorForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    age: ['', Validators.required],
    gender: ['', Validators.required],
    specialization: ['', Validators.required],
  });
  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe((doctors) => {
      this.doctors = doctors;
      this.idForm.controls.doctor.setValue(this.doctors[0]);
      this.enable = false;
      this.loading = false;
    });
  }

  onSubmit() {
    if (this.idForm.valid) {
      console.log(this.idForm.value);
      const doc = {
        name: this.idForm.controls.doctor.value.name,
        specialization: this.idForm.controls.doctor.value.specialization,
      };
      this.doctorForm.patchValue(doc);
      this.enable = true;
    }
  }
  onSubmission() {
    if (this.doctorForm.valid) {
      this.loading = true;
      console.log(this.doctorForm.value);
      // this.patientService
      //   .updatePatient(this.idForm.controls.id.value, this.patientForm.value)
      //   .subscribe((data) => {
      //     this.loading = false;
      //     this.router.navigate(['/home']);
      //   });
    }
  }
}
