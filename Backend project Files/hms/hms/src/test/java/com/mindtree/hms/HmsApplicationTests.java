package com.mindtree.hms;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mindtree.hms.entities.Doctor;
import com.mindtree.hms.entities.Patient;
import com.mindtree.hms.repositories.DoctorRepository;
import com.mindtree.hms.repositories.PatientRepository;
import com.mindtree.hms.services.DoctorService;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class HmsApplicationTests {
	
	
    @Autowired
    MockMvc mockMvc;
    Doctor doctorOne;
	Doctor doctorTwo;
	Patient patient;
	List<Doctor> doctors;

    @MockBean
    DoctorRepository doctorRepository;
    
    @MockBean
    PatientRepository patientRepository;
	

    @Test
    public void testGetAllFromRepo() throws Exception
    {

    	Mockito.when(doctorRepository.findAll()).thenReturn(doctors);
    	assertEquals(doctorRepository.findAll(),doctors);

        
    }
    @Test
    public void testGetAllFromPatientRepo() throws Exception
    {
    	doctorOne=new Doctor("Dr. Rajinder",29,"Male","Surgeon");
    	patient = new Patient("Ramesh",doctorOne,"Drink water");
    	Mockito.when(patientRepository.findAll()).thenReturn(Arrays.asList(patient));
    	assertEquals(patientRepository.findAll(),Arrays.asList(patient));

        
    }
    
    @Test
    public void testGetAll() throws Exception
    {
    	doctorOne=new Doctor("Dr. Rajinder",29,"Male","Surgeon");
    	doctorTwo=new Doctor("Dr. Ravindar",29,"Male","Surgeon");
    	doctors= Arrays.asList(doctorOne,doctorTwo);

    	Mockito.when(doctorRepository.findAll()).thenReturn(doctors);

        this.mockMvc.perform(get("/doctors")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
        
    }
    
    @Test
    public void testGetAllPatients() throws Exception
    {
    	doctorOne=new Doctor("Dr. Rajinder",29,"Male","Surgeon");
    	patient = new Patient("Ramesh",doctorOne,"Drink water");
    	Mockito.when(patientRepository.findAll()).thenReturn(Arrays.asList(patient));

        this.mockMvc.perform(get("/patients")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
        
    }
    
    @Test
    @DirtiesContext
    public void testGetPatient() throws Exception
    {
    	doctorOne=new Doctor("Dr. Rajinder",29,"Male","Surgeon");
    	patient = new Patient("Ramesh",doctorOne,"Drink water");
    	doctorRepository.save(doctorOne);
    	patientRepository.save(patient);
        this.mockMvc.perform(get("/patient/{id}",10L)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().is(404));
        
    }
    
    @Test
    public void testAdd() throws Exception
    {
    	doctorOne=new Doctor("Dr. Rajinder",29,"Male","Surgeon");
    	
        this.mockMvc.perform(post("/doctor").
                contentType(MediaType.APPLICATION_JSON).
                content(asJsonString(doctorOne))).
                andExpect(status().isOk());
        
    }
    @Test
    public void testAddPatient() throws Exception
    {
    	doctorOne=new Doctor("Dr. Rajinder",29,"Male","Surgeon");
    	patient = new Patient("Ramesh",doctorOne,"Drink water");
    	
        this.mockMvc.perform(post("/patient").
                contentType(MediaType.APPLICATION_JSON).
                content(asJsonString(patient))).
                andExpect(status().isOk());
        
    }

    public static String asJsonString(final Object obj) {
        try {
            final ObjectMapper mapper = new ObjectMapper();
            final String jsonContent = mapper.writeValueAsString(obj);
            return jsonContent;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
    
    
    
	@Test
	void contextLoads() {
	}

}
