import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { PatientService } from 'src/app/services/patient.service';

import { PatientInfoComponent } from './patient-info.component';

describe('PatientInfoComponent', () => {
  let component: PatientInfoComponent;
  let fixture: ComponentFixture<PatientInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PatientInfoComponent],
      providers: [FormBuilder, PatientService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientInfoComponent);
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
      id: '',
    });
    expect(component.patientForm.valid).toBeFalsy();
  });
  it('Form to be True', () => {
    component.patientForm.setValue({
      id: 1,
    });
    expect(component.patientForm.valid).toBeTruthy();
  });
});
