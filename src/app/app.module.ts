import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Componenets/login/login.component';
import { RegisterComponent } from './Componenets/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Componenets/admin/admin.component';

import { StartedComponent } from './Componenets/started/started.component';
import { AdduserComponent } from './Componenets/users/adduser/adduser.component';
import { ListuserComponent } from './Componenets/users/listuser/listuser.component';
import { DashboardComponent } from './Componenets/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SettingComponent } from './Componenets/setting/setting.component';
import { PwdComponent } from './Componenets/pwd/pwd.component';
import { PatientsComponent } from './Componenets/patients/patients.component';
import { SalleComponent } from './Componenets/salle/salle.component';
import { PaiementsComponent } from './Componenets/paiements/paiements.component';
import { RDVComponent } from './Componenets/rdv/rdv.component';
import { FinanceComponent } from './Componenets/finance/finance.component';
import { AddpatientComponent } from './Componenets/addpatient/addpatient.component';
import { DossierComponent } from './Componenets/dossier/dossier.component';
import { ConsultationComponent } from './Componenets/consultation/consultation.component';
import { CertificatComponent } from './Componenets/certificat/certificat.component';
import { HttpService } from './Services/http.service';




const AppRoute: Routes =[
  {path:'',component:StartedComponent},
  {path:'register',component:RegisterComponent},
  {path:'Admin',component:DashboardComponent},
  {path:'login',component:LoginComponent},
  {path:'Utilisteur',component:ListuserComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    StartedComponent,
    AdduserComponent,
    ListuserComponent,
    DashboardComponent,
    SettingComponent,
    PwdComponent,
    PatientsComponent,
    SalleComponent,
    PaiementsComponent,
    RDVComponent,
    FinanceComponent,
    AddpatientComponent,
    DossierComponent,
    ConsultationComponent,
    CertificatComponent
 
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
