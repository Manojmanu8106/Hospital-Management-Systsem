package com.mindtree.hms.entities;

import javax.persistence.*;

import org.hibernate.annotations.CreationTimestamp;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class Patient {
	
	@Id
    @GeneratedValue
    private Long id;

    private String name;
    
    @CreationTimestamp
    private Date dateOfAppointment;
    
    @ManyToOne
    @JoinColumn(name = "doctor_id")
    private Doctor doctor;
    
    private String prescription;

	public Patient(String name, Date dateOfAppointment, Doctor doctor, String prescription) {
		super();
		
		this.name = name;
		this.dateOfAppointment = dateOfAppointment;
		this.doctor = doctor;
		this.prescription = prescription;
	}
	public Patient(String name,Doctor doctor, String prescription) {
		super();
		
		this.name = name;
		
		this.doctor = doctor;
		this.prescription = prescription;
	}
	
	public Patient() {
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getDateOfAppointment() {
		return dateOfAppointment;
	}

	public void setDateOfAppointment(Date dateOfAppointment) {
		this.dateOfAppointment = dateOfAppointment;
	}

	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}

	public String getPrescription() {
		return prescription;
	}

	public void setPrescription(String prescription) {
		this.prescription = prescription;
	}
    
    


}
