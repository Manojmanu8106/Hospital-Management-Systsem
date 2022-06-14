import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DoctorService } from 'src/app/services/doctor.service';

import { AddDoctorComponent } from './add-doctor.component';

describe('AddDoctorComponent', () => {
  let component: AddDoctorComponent;
  let fixture: ComponentFixture<AddDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [AddDoctorComponent],
      providers: [FormBuilder, DoctorService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDoctorComponent);
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
    expect(userElements[1].nativeElement.textContent).toEqual('Age');
  });
  it('Form to be False', () => {
    component.doctorForm.setValue({
      name: '',
      age: 25,
      gender: '',
      specialization: '',
    });
    expect(component.doctorForm.valid).toBeFalsy();
  });
  it('Form to be True', () => {
    component.doctorForm.setValue({
      name: 'Dr. Fouzan',
      age: 25,
      gender: 'Male',
      specialization: 'Surgeon',
    });
    expect(component.doctorForm.valid).toBeTruthy();
  });
});
