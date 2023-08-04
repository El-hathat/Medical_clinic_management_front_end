import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Patient } from 'src/app/Models/Patient';
import { RDV } from 'src/app/Models/RDV';

import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css']
})
export class RDVComponent {
rdvForm: FormGroup;
rechCin:String
rechDate:Date
pat:Patient;
cin:any
rendez:RDV
rdv:RDV[];
  constructor(private httpservice: HttpService,private fb: FormBuilder){
    
    
  }

getAllRDV(){
  this.httpservice.getAllRDV(this.httpservice.md.nom_cabinet).subscribe(res=>{
this.rdv=res;
console.log(this.rdv);

  })
}


delRdvByNum(num:Number){
this.httpservice.delRDV(num).subscribe(res=>{
  this.ngOnInit();
})

}

  ngOnInit(){
    this.getAllRDV();
    this.rdvForm=this.fb.group({
      
      dateRDV:[''],
      heureRDV:[''],
      note:[''],
      etat:['en attente'],
      medcin:this.httpservice.md,
      patient:this.pat,
      
      });
}
public rechercherCin(){
  if(this.rechCin==""){
    this.getAllRDV();
    }else{
  this.httpservice.getrdvBySearch(this.rechCin).subscribe(result=>{
        
    this.rdv.length=0;
    this.rdv=result;
              });

            }          
}


public rechercherDate(){
  if(this.rechDate==null){
    this.getAllRDV();
    }else{
  this.httpservice.getrdvByDate(this.rechDate).subscribe(result=>{
        
    this.rdv.length=0;
    this.rdv=result;
              });

            }          
}




handelSubmit(){
  
  
  
  this.httpservice.getPatientByCin(this.cin).subscribe((result: Patient)=>{
        
    this.pat=result;

  

    this.rendez=this.rdvForm.value;
    this.rendez.patient=this.pat;
    this.rendez.medcin=this.httpservice.md;
   
     this.httpservice.addRDV(this.rendez).subscribe(res=>{
      this.ngOnInit();
     }
      
     );
              });


 
 // console.log(this.rdvForm.get('patient')!.value)
}
}