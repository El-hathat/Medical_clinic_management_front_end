import { Component } from '@angular/core';
import {FormBuilder,FormGroup } from '@angular/forms';
import { Medecin } from 'src/app/Models/Medecin';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  listofmedecin :Medecin[];
  medForm :FormGroup;

  constructor(private httpservice: HttpService,private fb: FormBuilder){}
  ngOnInit(): void{
      this.httpservice.fetchAll().subscribe(medecin => this.listofmedecin=medecin);
      this.medForm=this.fb.group({
        cin:[''],
        nom:[''],
        prenom:[''],
        role:['medcin'],
        nom_cabinet:[''],
        etat:1,
        email:[''],
        pwd: [''],
        });
  }
  handelSubmit(){
    this.httpservice.addMedecin(this.medForm.value).subscribe();
    this.ngOnInit();
  }


}
