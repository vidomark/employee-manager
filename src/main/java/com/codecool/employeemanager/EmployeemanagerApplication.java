package com.codecool.employeemanager;

import com.codecool.employeemanager.model.Employee;
import com.codecool.employeemanager.model.Occupation;
import com.codecool.employeemanager.repository.EmployeeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
public class EmployeemanagerApplication {

	private final EmployeeRepository employeeRepository;

	public EmployeemanagerApplication(EmployeeRepository employeeRepository) {
		this.employeeRepository = employeeRepository;
	}

	public static void main(String[] args) {
		SpringApplication.run(EmployeemanagerApplication.class, args);
	}

	@Bean
	CommandLineRunner commandLineRunner() {
		return args -> {
			Employee john = Employee.builder()
					.email("john.doe@gmail.com")
					.name("John Doe")
					.phoneNumber("06706686097")
					.occupation(Occupation.CASHIER)
					.imageUrl("https://bootdey.com/img/Content/avatar/avatar1.png")
					.build();

			Employee markus = Employee.builder()
					.email("markus.schumacher@gmail.com")
					.name("Markus Schumacher")
					.phoneNumber("06708766037")
					.occupation(Occupation.MANAGER)
					.imageUrl("https://bootdey.com/img/Content/avatar/avatar2.png")
					.build();

			Employee christine = Employee.builder()
					.email("lewis.christine@gmail.com")
					.name("Lewis Christine")
					.phoneNumber("06708426137")
					.occupation(Occupation.SUPERVISOR)
					.imageUrl("https://bootdey.com/img/Content/avatar/avatar3.png")
					.build();

			employeeRepository.saveAll(List.of(john, markus, christine));
		};
	}

}
