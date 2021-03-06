import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ModalModule,
  TooltipModule,
  PopoverModule,
} from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModalFormComponent } from './components/modal-form/modal-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmployeeComponent,
    ModalFormComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    ModalModule,
    TooltipModule,
    PopoverModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
