import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DoctorService } from 'src/app/services/doctor.service';
import { PatientService } from 'src/app/services/patient.service';

import { AddPatientComponent } from './add-patient.component';

describe('AddPatientComponent', () => {
  let component: AddPatientComponent;
  let fixture: ComponentFixture<AddPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [AddPatientComponent],
      providers: [FormBuilder, DoctorService, PatientService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('check Labels', () => {
    const { debugElement } = fixture;
    const userElements = debugElement.queryAll(By.css('.label'));
    expect(userElements[0].nativeElement.textContent).toEqual('Name');
  });
  it('Form to be False', () => {
    component.patientForm.setValue({
      name: '',
      doctor: {
        name: 'Dr. Fouzan',
        age: 25,
        gender: 'Male',
        specilaization: 'Surgeon',
      },
      prescription: '',
    });
    expect(component.patientForm.valid).toBeFalsy();
  });
  it('Form to be True', () => {
    component.patientForm.setValue({
      name: 'Ramulu',
      doctor: {
        name: 'Dr. Fouzan',
        age: 25,
        gender: 'Male',
        specilaization: 'Surgeon',
      },
      prescription: 'Drink water',
    });
    expect(component.patientForm.valid).toBeTruthy();
  });
});
