package com.mindtree.hms.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.mindtree.hms.entities.Doctor;
import com.mindtree.hms.entities.Patient;
import com.mindtree.hms.exceptions.PatientNotFoundException;
import com.mindtree.hms.services.DoctorService;
import com.mindtree.hms.services.PatientService;

import java.util.List;

@Controller
public class PatientController {
	
	@Autowired
	private PatientService patientService;
	
	@PostMapping("/patient")
    public ResponseEntity<?> addPatient(@RequestBody Patient patient) {
		Patient savedPatient = patientService.addPatient(patient);
        return ResponseEntity.ok().body(savedPatient);
    }
    
    @GetMapping("/patients")
    public ResponseEntity<?> fetchPatients() {
        List<Patient> patients = patientService.getAllPatients();
        return ResponseEntity.ok().body(patients);
    } 
    @GetMapping("/patient/{id}")
    public ResponseEntity<?> fetchPatient(@PathVariable("id") Long id) throws PatientNotFoundException {
        Patient patient = patientService.getPatient(id);
        //return ResponseEntity.ok().body(patient);
        if(patient == null) {
        	throw new PatientNotFoundException("Invalid ID");
        }
        else {
            return ResponseEntity.ok().body(patient);
        }
    } 
    @PutMapping("/patient/{id}")
    public ResponseEntity<?> updatePatients(@PathVariable("id") Long id,@RequestBody Patient patient) throws PatientNotFoundException {
    	Patient newPatient = this.patientService.updatePatient(id, patient);
        if(newPatient == null) {
        	throw new PatientNotFoundException("Invalid ID");
        }
        else {
            return ResponseEntity.ok().body(newPatient);
        }
    }

}
