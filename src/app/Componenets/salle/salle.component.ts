import { Component } from '@angular/core';
import { Medecin } from 'src/app/Models/Medecin';
import { Patient } from 'src/app/Models/Patient';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent {
  ismenuOpened: boolean=true;
  med:Medecin;
  patients=new Array();
  rechnom:String;
  rechcin:String;
  constructor(private http:HttpService){
     
    this.med=http.md;
    if(this.med.role=='secretaire'){
    this.ismenuOpened=false;
    }else{
      this.ismenuOpened=true;
      }
  }

  ngOnInit():void{

    this.getPatientByEtat();

          }



          getPatientByEtat(){
            this.http.getPatientsCabinet(this.http.md.nom_cabinet).subscribe((result: Patient[])=>{
              for(let item of result){
                if(item.etat=="En Attente"){
              this.patients.push(item);
                }
              }
                        });
          }




    patientValider(cin:String){
      this.http.sallePatientValider(cin).subscribe(msg=>{
        this.patients=[];
        this.getPatientByEtat();
        console.log('Patient Valider avec succees');
       });
    }

   
    
    
    
   
      

    
//Recherche
public rechercherCin(){
  if(this.rechcin==""){
    this.patients.length=0;
    this.getPatientByEtat();
    }else{
  this.http.getPatientsBySearch(this.rechcin).subscribe(result=>{
        
    this.patients.length=0;
    for(let item of result){
      if(item.etat=="En Attente"){
    this.patients.push(item);
      }
    }
              });

            }          
}



//recherche2
public rechercherNom(){
  if(this.rechnom==""){
    this.patients.length=0;
    this.getPatientByEtat();
    }else{
  this.http.getPatientsBySearchNom(this.rechnom).subscribe((result: any)=>{
        
    this.patients.length=0;
    for(let item of result){
      if(item.etat=="En Attente"){
    this.patients.push(item);
      }
    }
              });
            }
             
}
 
}















