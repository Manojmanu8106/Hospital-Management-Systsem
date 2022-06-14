import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor.model';
import { DoctorService } from '../../services/doctor.service';
@Component({
  selector: 'app-list-doctors',
  templateUrl: './list-doctors.component.html',
  styleUrls: ['./list-doctors.component.scss'],
})
export class ListDoctorsComponent implements OnInit {
  constructor(private doctorService: DoctorService) {}
  doctors: Doctor[];
  loading: boolean;
  selectedDoctor: Doctor;
  ngOnInit(): void {
    this.loading = true;
    this.doctorService.getDoctors().subscribe((doctors) => {
      this.doctors = doctors;
      this.loading = false;
      if (this.doctors.length > 0) {
        this.selectedDoctor = this.doctors[0];
      }

      console.log(this.doctors);
    });
  }
}
