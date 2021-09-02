package com.codecool.employeemanager.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.ArrayList;
import java.util.List;

@ControllerAdvice
public class CustomExceptionHandler {

    @ExceptionHandler(EmployeeNotFoundException.class)
    public ResponseEntity<ErrorResponse> employeeNotFoundException(Exception exception) {
        List<String> details = new ArrayList<>();
        details.add(exception.getLocalizedMessage());

        ErrorResponse errorResponse = new ErrorResponse(details);
        return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
    }
}
