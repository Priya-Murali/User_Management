import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component'
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CompanyComponent } from './pages/company/company.component';
import { CareersComponent } from './pages/careers/careers.component';
import { HomeComponent } from './pages/home/home.component';
import { ManageComponent } from './pages/manage/manage.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { UserpageComponent } from './userpage/userpage.component';
// import { ContactComponent } from './contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    CompanyComponent,
    CareersComponent,
    HomeComponent,
    ManageComponent,
    AboutusComponent,
    FooterComponent,
    PrivacyComponent,
    TermsComponent,
    UserpageComponent,
    // ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
