import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Medecin } from 'src/app/Models/Medecin';
import { Patient } from 'src/app/Models/Patient';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent {
  listofpat :Patient[];
  patForm :FormGroup;


  constructor(private httpservice: HttpService,private fb: FormBuilder){}
  ngOnInit(): void{
      this.httpservice.getPatients().subscribe(patient => this.listofpat=patient);
      this.patForm=this.fb.group({
        cin : [''],
        adresse : [''],
        age:[''],
        nom:[''],
        prenom:[''],
        email: [''],
        sexe : [''],
        etat : ['En Attente'],
        tel : [''],
        medcin : this.httpservice.md,
        cabinet:this.httpservice.md.nom_cabinet,
        });
  }
  handelSubmit(){
    this.httpservice.addPatient(this.patForm.value).subscribe();
    //console.log(this.patForm.value);
    this.ngOnInit();
  }

}
