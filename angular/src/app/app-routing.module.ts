import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { CareersComponent } from './pages/careers/careers.component';
import { CompanyComponent } from './pages/company/company.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ManageComponent } from './pages/manage/manage.component';
import { RegisterComponent } from './pages/register/register.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import {UserpageComponent} from './userpage/userpage.component';

const routes: Routes = [
  {path:'',component:UserpageComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'careers',component:CareersComponent},
  {path:'company',component:CompanyComponent},
  {path:'home',component:HomeComponent},
  {path:'manage',component:ManageComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contact',component:ContactusComponent},
  {path:'privacy',component:PrivacyComponent},
  {path:'terms',component:TermsComponent},
  {path: 'employees', component: EmployeeListComponent},
  {path: 'create-employee', component: CreateEmployeeComponent},
  // {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path: 'employee-details/:id', component: EmployeeDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
