import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { UpdatePatientComponent } from './update-patient.component';

describe('UpdatePatientComponent', () => {
  let component: UpdatePatientComponent;
  let fixture: ComponentFixture<UpdatePatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [UpdatePatientComponent],
      providers: [FormBuilder],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('check Labels', () => {
    const { debugElement } = fixture;
    const userElements = debugElement.queryAll(By.css('.label'));
    expect(userElements[0].nativeElement.textContent).toEqual('ID');
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

  it('Form to be True', () => {
    component.idForm.setValue({
      id: 1,
    });
    expect(component.idForm.valid).toBeTruthy();
  });
});
