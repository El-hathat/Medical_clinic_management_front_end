import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medecin } from 'src/app/Models/Medecin';
import { Patient } from 'src/app/Models/Patient';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit{
patients:Patient[];
allPatients:Patient[];
test:Boolean;
rechcin:String;
  rechNom:String;
  med:Medecin;
  
  constructor(private http:HttpService,private router:Router){
    this.med=http.md;
    if(this.med.role=='secretaire'){
    this.test=false;
    }else{
      this.test=true;
      }
    
    
  }

  ngOnInit():void{
   this.getAllPatient();

          }

    
  getAllPatient(){
    this.http.getPatientsCabinet(this.http.md.nom_cabinet).subscribe((result: Patient[])=>{
        
      this.allPatients=result;
                });
  }

  versDossier(cin:String){

      this.router.navigate(['Dossier_Medicale', cin]);
  }
  //Recherche
public rechercherCin(){
  if(this.rechcin==""){
    this.getAllPatient();
    }
  this.http.getPatientsBySearch(this.rechcin).subscribe(result=>{
        
    this.patients.length=0;
    this.patients=result;
              });

                    
}



//recherche2
public rechercherNom(){
  if(this.rechNom==""){
    this.getAllPatient();
    }else{
  this.http.getPatientsBySearchNom(this.rechNom).subscribe((result: any)=>{
        
    this.patients.length=0;
    this.patients=result;
              });
            }
             
}

  versCertificat(cin:String){

    this.router.navigate(['certificat', cin]);
}
addToSalle(cin:String){
  this.http.setEtatPatient(cin).subscribe(msg=>{
   console.log('Modifier avec succees');
   this.router.navigate(['patients/attend']);
  });

  
}


  supprimer(cin:String){
this.http.supprimerpatient(cin).subscribe(msg=>{
  this.getAllPatient();
})


}

}