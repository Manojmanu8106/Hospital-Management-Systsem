import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { UpdateDoctorComponent } from './components/update-doctor/update-doctor.component';
import { ListDoctorsComponent } from './components/list-doctors/list-doctors.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { UpdatePatientComponent } from './components/update-patient/update-patient.component';
import { HomeComponent } from './components/home/home.component';
import { PatientInfoComponent } from './components/patient-info/patient-info.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'doctors',
    component: ListDoctorsComponent,
  },
  {
    path: 'doctor/add',
    component: AddDoctorComponent,
  },
  {
    path: 'doctor/update',
    component: UpdateDoctorComponent,
  },
  {
    path: 'patient/add',
    component: AddPatientComponent,
  },
  {
    path: 'patient/update',
    component: UpdatePatientComponent,
  },
  {
    path: 'patient/info',
    component: PatientInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
