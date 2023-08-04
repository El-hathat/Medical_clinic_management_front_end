import { Component } from '@angular/core';
import { Medecin } from 'src/app/Models/Medecin';
import { HttpService } from 'src/app/Services/http.service';
import { Patient } from 'src/app/Models/Patient';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
 
ismenuOpened: boolean=true;
med:Medecin;
nbSalle:number;
constructor(private httpservice: HttpService){



  this.med=httpservice.md;
  if(this.med.role=='secretaire'){
  this.ismenuOpened=false;
  }else{
    this.ismenuOpened=true;
    }
  

}
ngOnInit(){
  this.getNbPatientByEtat();
}

getNbPatientByEtat(){
  this.httpservice.getPatientsCabinet(this.med.nom_cabinet).subscribe((result: Patient[])=>{
    this.nbSalle=0
    for(let item of result){
      if(item.etat=="En Attente"){
    this.nbSalle=this.nbSalle+1;
      }
    }
              });
}

}
