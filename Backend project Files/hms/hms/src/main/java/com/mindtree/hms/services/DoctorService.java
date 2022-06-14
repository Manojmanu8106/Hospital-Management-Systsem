package com.mindtree.hms.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindtree.hms.entities.Doctor;
import com.mindtree.hms.repositories.DoctorRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class DoctorService {
	@Autowired
    private DoctorRepository doctorRepository;
	
	public List<Doctor> getAllDoctors(){
		return this.doctorRepository.findAll();
	}
	
	public Doctor addDoctor(Doctor doctor) {
		return this.doctorRepository.save(doctor);
	}
	
	
	public Doctor updateDoctor(Long id,Doctor doctor) {
		Doctor newDoc=this.doctorRepository.findById(id).get();
		newDoc.setName(doctor.getName());
		newDoc.setGender(doctor.getGender());
		newDoc.setSpecialization(doctor.getSpecialization());
		newDoc.setAge(doctor.getAge());
		return this.doctorRepository.save(newDoc);
		
		
	}


}
