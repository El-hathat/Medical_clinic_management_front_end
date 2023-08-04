import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Consultation } from 'src/app/Models/Consultation';
import { Patient } from 'src/app/Models/Patient';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent {
  consForm :FormGroup;
  pat: Patient = new Patient();
  cin:String;
  lesConsult:Consultation[];
  consultation:Consultation
  constructor(private httpservice: HttpService,private route: ActivatedRoute,private fb: FormBuilder,private router: Router){
    this.cin = this.route.snapshot.params['cin'];
    
    

    }
  
 
    
  ngOnInit(): void{
    console.log(this.cin)
    this.httpservice.getAllConsult(this.cin).subscribe(res=>{
      this.lesConsult=res;
    
    })
    this.consForm=this.fb.group({
       
      
      designation : [''],
      frq_card : [''],
      poids : [''],
      prix:[''],
      taille:[''],
      tempr : [''],
     
      });
}
versCertificat(num:Number){

  this.router.navigate(['certificat', num]);
}
handelSubmit(){
  console.log(this.cin);
this.consultation=this.consForm.value
this.httpservice.getPatientByCin(this.cin).subscribe(data => {
this.consultation.patient=data; 
console.log(data);
});
console.log(this.consultation);
    this.httpservice.adddCONS(this.cin,this.consultation).subscribe(res=>{
      this.ngOnInit();
    });
    console.log("ajouter avec");
    
  this.ngOnInit();
}
}