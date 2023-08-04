import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Medecin } from 'src/app/Models/Medecin';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  listofmedecin :Medecin[];
  medForm :FormGroup;
data:String;
  constructor(private httpservice: HttpService,private fb: FormBuilder){
    this.data=this.httpservice.md.nom_cabinet;
  }
  
  ngOnInit(): void{
      this.httpservice.fetchAll().subscribe(medecin => this.listofmedecin=medecin);
      this.medForm=this.fb.group({
        cin:[''],
        nom:[''],
        prenom:[''],
        role:['secretaire'],
        nom_cabinet:this.httpservice.md.nom_cabinet,
        email:[''],
        etat:0,
        pwd: [''],
        });
  }
  handelSubmit(){
    this.httpservice.addMedecin(this.medForm.value).subscribe();
    this.ngOnInit();
  }


}
