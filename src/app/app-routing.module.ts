import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Componenets/login/login.component';
import { RegisterComponent } from './Componenets/register/register.component';
import { AdminComponent } from './Componenets/admin/admin.component';

import { StartedComponent } from './Componenets/started/started.component';
import { ListuserComponent } from './Componenets/users/listuser/listuser.component';
import { DashboardComponent } from './Componenets/dashboard/dashboard.component';
import { AdduserComponent } from './Componenets/users/adduser/adduser.component';
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


const AppRoute: Routes =[
  {path:'',component:StartedComponent},
  {path:'register',component:RegisterComponent},
  {path:'Admin',component:DashboardComponent},
  {path:'login',component:LoginComponent},
  {path:'addsec',component:AdduserComponent},
  {path:'Utilisteur',component:ListuserComponent},
  {path:'profile',component:SettingComponent},
  {path:'patients',component:PatientsComponent},
  {path:'patients/attend',component:SalleComponent},
  {path:'certificat/:num',component:CertificatComponent},
  {path:'Rendez-vous',component:RDVComponent},
  {path:'finance',component:FinanceComponent},
  {path:'updatepwd',component:PwdComponent},
  {path:'addpatient',component:AddpatientComponent},
  {path:'Dossier_Medicale/:cin',component:DossierComponent},
  {path:'Consultation/:cin',component:ConsultationComponent},

 
]

@NgModule({
  imports: [RouterModule.forRoot(AppRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
