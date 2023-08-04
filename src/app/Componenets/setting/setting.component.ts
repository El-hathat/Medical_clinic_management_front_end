import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Medecin } from 'src/app/Models/Medecin';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
 listofmedecin :Medecin[];
  medForm :FormGroup;
  data:Medecin;
  med:Medecin;
  a:String;
  b:String;
  c:String;

  constructor(private httpservice: HttpService,private fb: FormBuilder){
this.data=httpservice.md;
  }
  ngOnInit(): void{
      this.httpservice.fetchAll().subscribe(medecin => this.listofmedecin=medecin);
      this.medForm=this.fb.group({
        cin:this.httpservice.md.cin,
        nom:[''],
        prenom:[''],
        role:this.httpservice.md.role,
        nom_cabinet:this.httpservice.md.nom_cabinet,
        etat:1,
        email:[''],
        pwd:this.httpservice.md.pwd,
       
      });
      
      
  }
  handelSubmit(){
    this.httpservice.setmedcin(this.data.cin,this.medForm.value).subscribe();
    this.ngOnInit();
    console.log(this.medForm)
  }


}