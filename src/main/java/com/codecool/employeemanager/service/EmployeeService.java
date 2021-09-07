package com.codecool.employeemanager.service;

import com.codecool.employeemanager.exception.EmployeeNotFoundException;
import com.codecool.employeemanager.model.Employee;
import com.codecool.employeemanager.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public Employee addEmployee(Employee employee) {
        if (employee == null) {
            throw new RuntimeException("Employee must not be null!");
        }
        return employeeRepository.save(employee);
    }

    public Employee findEmployee(Long id) {
        if (id == null) {
            throw new RuntimeException("Employee ID must not be null");
        }

        return employeeRepository.findById(id)
                .orElseThrow(() -> new EmployeeNotFoundException(String.format("Employee not found with ID %s!", id)));
    }

    public Employee updateEmployee(Employee employee) {
        Long id = employee.getId();
        if (id == null) {
            throw new RuntimeException("Employee ID must not be null!");
        }

        Optional<Employee> optionalEmployee = employeeRepository.findById(id);
        if (optionalEmployee.isEmpty()) {
            throw new EmployeeNotFoundException(String.format("Employee not found with ID %s!", id));
        }

        // Swap details of current employee
        Employee currentEmployee = optionalEmployee.get();
        currentEmployee.setName(employee.getName());
        currentEmployee.setEmail(employee.getEmail());
        currentEmployee.setImageUrl(employee.getImageUrl());
        currentEmployee.setOccupation(employee.getOccupation());
        currentEmployee.setPhoneNumber(employee.getPhoneNumber());

        return employeeRepository.save(currentEmployee);
    }

    public void deleteEmployee(Long id) {
        if (id == null) {
            throw new RuntimeException("Employee ID must not be null");
        }

        employeeRepository.deleteById(id);
    }

    public Set<Employee> getEmployees() {
        return new HashSet<>(employeeRepository.findAll());
    }
}
