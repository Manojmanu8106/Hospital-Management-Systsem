import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { ListDoctorsComponent } from './components/list-doctors/list-doctors.component';

import { ReactiveFormsModule } from '@angular/forms';
import { UpdateDoctorComponent } from './components/update-doctor/update-doctor.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { UpdatePatientComponent } from './components/update-patient/update-patient.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PatientInfoComponent } from './components/patient-info/patient-info.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDoctorComponent,
    ListDoctorsComponent,
    UpdateDoctorComponent,
    AddPatientComponent,
    UpdatePatientComponent,
    PatientInfoComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
