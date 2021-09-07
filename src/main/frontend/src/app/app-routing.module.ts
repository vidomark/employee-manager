import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeContainerComponent } from './components/employee-container/employee-container.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeContainerComponent },
  { path: '', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [EmployeeContainerComponent, IndexComponent];
