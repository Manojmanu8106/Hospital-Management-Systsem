package com.mindtree.hms.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.mindtree.hms.entities.Doctor;
import com.mindtree.hms.services.DoctorService;


import java.util.List;

@RestController
public class DoctorController {
	@Autowired
	private DoctorService doctorService;
	
	@CrossOrigin(origins="http://localhost:8080")
	@PostMapping("/doctor")
    public ResponseEntity<?> addDoctor(@RequestBody Doctor doctor) {
		Doctor savedDoctor = doctorService.addDoctor(doctor);
        return ResponseEntity.ok().body(savedDoctor);
    }
    
    @GetMapping("/doctors")
    public ResponseEntity<List<Doctor>> fetchDoctors() {
        List<Doctor> doctors = doctorService.getAllDoctors();
        return ResponseEntity.ok().body(doctors);
    } 
    @PutMapping("/doctor/{id}")
    public ResponseEntity<?> updateMobilePrice(@PathVariable("id") Long id,@RequestBody Doctor doctor) {
        Doctor newdoctor = this.doctorService.updateDoctor(id, doctor);
        if(newdoctor == null) {
            return ResponseEntity.notFound().build();
        }
        else {
            return ResponseEntity.ok().body(newdoctor);
        }
    }
    
//    @DeleteMapping("/doctor/{id}")
//    public ResponseEntity<?> deleteDoctor(@PathVariable("id") Long id) {
//        return ResponseEntity.ok().body("Successfully Deleted");
//    } 
    

}
