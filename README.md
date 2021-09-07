# Employee Manager

 The application is an employee management system.

## Installation (docker)

1. Clone this repository `https://github.com/vidomark/employee-manager.git`
2. In the root of the project run `mvn clean package`
3. In the root of the project run `docker-compose up`
4. In your browser navigate to `localhost:4200` to see the application

## About

The backend is a Spring Boot application that serves employees to the Angular frontend application through a RESTFUL API. On the `/employee` route we can checkout our list of employees. Moreover, we can also add, edit and delete employees in a modal form component and edit the database. The project was intended to be a practice application, thus not made pretty.

## Structure

The application is based upon a layered architecture which implements the MVC design pattern. The endpoints are predefined in the controller(s),
which then communicates the requests to the service layer. The dao implementation then handles the business logic, then the response is sent back vica versa.
The Angular application then displays the content.
