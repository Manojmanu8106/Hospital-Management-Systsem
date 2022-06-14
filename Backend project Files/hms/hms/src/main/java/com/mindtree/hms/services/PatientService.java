package com.mindtree.hms.services;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindtree.hms.entities.Doctor;
import com.mindtree.hms.entities.Patient;
import com.mindtree.hms.repositories.DoctorRepository;
import com.mindtree.hms.repositories.PatientRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PatientService {
	@Autowired
    private PatientRepository patientRepository;
	
	public List<Patient> getAllPatients(){
		return this.patientRepository.findAll();
	}
	
	public Patient addPatient(Patient patient) {
		return this.patientRepository.save(patient);
	}
	public Patient getPatient(Long id) {
		Patient newPatient=this.patientRepository.findById(id).orElse(null);
		if(newPatient==null)
		{
			return null;
			
		}
		return newPatient;
	}
	
	public Patient updatePatient(Long id,Patient patient) {
		Patient newPatient=this.patientRepository.findById(id).orElseGet(null);
		if(newPatient==null)
		{
			return null;
			
		}
		else {
			Patient patientCurrent = newPatient;
			patientCurrent.setName(patient.getName());
			patientCurrent.setDoctor(patient.getDoctor());
			patientCurrent.setPrescription(patient.getPrescription());
		return this.patientRepository.save(patientCurrent);
		}
	}

}
