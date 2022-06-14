package com.mindtree.hms.entities;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
@Embeddable
public class Doctor {
	
	@Id
    @GeneratedValue
    private Long id;

    private String name;
    private int age;
    private String gender;
    private String specialization;
    
//    @OneToMany(cascade = CascadeType.ALL)
//    private Set<Patient> patients;
//    
//    public Doctor(Long id, String name, int age, String gender, String specialization, Set<Patient> patients) {
//		super();
//		this.id = id;
//		this.name = name;
//		this.age = age;
//		this.gender = gender;
//		this.specialization = specialization;
//		this.patients = patients;
//	}
//
//	public Set<Patient> getPatients() {
//		return patients;
//	}
//
//	public void setPatients(Set<Patient> patients) {
//		this.patients = patients;
//	}

	public Doctor(String name, int age, String gender, String specialization) {
		super();
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.specialization = specialization;
	}
    
    public Doctor() {
    	
    }
    
    @Override
	public String toString() {
		return "Doctor [id=" + id + ", name=" + name + ", age=" + age + ", gender=" + gender + ", specialization="
				+ specialization + "]";
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
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getSpecialization() {
		return specialization;
	}
	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age=age;
	}

}
