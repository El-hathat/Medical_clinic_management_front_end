import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Dossier } from 'src/app/Models/Dossier';
import { Patient } from 'src/app/Models/Patient';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-dossier',
  templateUrl: './dossier.component.html',
  styleUrls: ['./dossier.component.css']
})
export class DossierComponent {
  options: string[] = ['Masculin', 'Feminin'];
  cin: string;
  pat: Patient = new Patient();
  patt:Patient;
  dossier:Dossier;
medForm :FormGroup;
medForms :FormGroup;
  constructor(private http: HttpService,private route: ActivatedRoute, private router: Router,private fb:FormBuilder,private fbs:FormBuilder) {
      
   }

  ngOnInit(): void {
    this.cin = this.route.snapshot.params['cin'];

    this.http.getPatientByCin(this.cin).subscribe(data => {
      this.pat = data;
      this.http.pt=data;
      console.log(this.http.pt)
      
    }, error => console.log(error));
    this.medForms=this.fbs.group({
    
      
    sang : [''],
    situation_F:[''],
    date_Naissance:[''],
    note:[''],
   
      
      
      });
    this.medForm=this.fb.group({
      




      cin :[''],
      adresse : [''],
      age:[''],
      nom:[''],
      prenom:[''],
      email:[''],
      sexe : [''],
      tel : [''],
      medcin : this.http.md,
      cabinet:this.http.md.nom_cabinet,
      });
  
  } 
  handelSubmit(){
    console.log("salam")
    
    this.dossier=this.medForms.value;
    this.dossier.patient=this.pat
    console.log(this.dossier);
    this.http.addDossier(this.dossier).subscribe(result=>{
console.log("rah daz");
console.log(result);
    });
   // this.http.setpatient(this.cin,this.medForm.value).subscribe();
    console.log("test"+this.cin)
    //console.log("22222"+this.patt)
    
//console.log(this.medForm)
    console.log(this.medForms)
    this.ngOnInit();
   console.log("tttttttttttttt")
  
   history.go(-1);
  }

  versDossier(cin:String){

    this.router.navigate(['Consultation', cin]);
}
}