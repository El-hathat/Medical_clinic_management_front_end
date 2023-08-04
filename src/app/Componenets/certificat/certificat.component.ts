import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/Models/Patient';
import { Consultation } from 'src/app/Models/Consultation';
import { HttpService } from 'src/app/Services/http.service';
import {FormBuilder,FormGroup } from '@angular/forms';
import { Certificat } from 'src/app/Models/Certificat';
@Component({
  selector: 'app-certificat',
  templateUrl: './certificat.component.html',
  styleUrls: ['./certificat.component.css']
})
export class CertificatComponent {
  cin: string;
  patient: Patient = new Patient();
  dateN:any;
  num:number;
  a:number;
  b:string;
  medForm:FormGroup;
  consult:Consultation;
  cert: Certificat;
  constructor(private http: HttpService,
    private route: ActivatedRoute,
    private router: Router,private fb: FormBuilder) { }
    
 
  ngOnInit(): void {
    this.num = this.route.snapshot.params['num'];
    this.http.getconsByNum(this.num).subscribe(res => {
      this.patient = res.patient;
      console.log(this.patient)
     
    });
    this.medForm=this.fb.group({
      nbjours:[''],
      type:['']

    });
   
 

    
   /* this.http.getPatientByCin(this.consult.patient).subscribe(data => {
      this.patient = data;
       
    }, error => console.log(error));

    this.http.getDtnPatient(this.cin).subscribe(date=>{
      this.dateN=date;
      
    })*/
   

  }
  
  handelSubmit(){
    
    console.log(this.medForm);
    
    console.log(this.cert);
    this.http.addcert(this.num,this.medForm.value).subscribe();
    this.ngOnInit();
    console.log('dazt ssss')
    history.go(-3);
  }

}