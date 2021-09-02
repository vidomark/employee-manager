package com.codecool.employeemanager.exception;

import javax.xml.bind.annotation.XmlRootElement;
import java.util.List;

@XmlRootElement(name = "error")
public class ErrorResponse {

    private final List<String> details;

    public ErrorResponse(List<String> details) {
        this.details = details;
    }

    public List<String> getDetails() {
        return details;
    }
}
