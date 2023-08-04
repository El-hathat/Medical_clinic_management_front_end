import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/Services/http.service';
import { Medecin } from 'src/app/Models/Medecin';

@Component({
  selector: 'app-pwd',
  templateUrl: './pwd.component.html',
  styleUrls: ['./pwd.component.css']
})
export class PwdComponent implements OnInit {
  a:String;
  b:String;
  c:String;
  cin:String;
 
  ngOnInit():void{
    
 
           }

  constructor(private http:HttpService,private router:Router){
this.cin=http.md.cin;
  }

  modpwd(cin:String){
   
    if((this.b==this.c)){
     // console.log(this.c);
    
      
      this.http.checkPwd(cin,this.a).subscribe(res=>{
        console.log('mdaz pwd');
        console.log(res);
        if(res){
      this.http.setmodpat(cin,this.c).subscribe(msg=>{
        alert('Modifier avec succees');
      });
    }else{
      alert('mot de passe incorrect');
    }
       });
    }else{
      alert('s\'ilvous plait confirmer votr mot de passe');
    //  console.log(cin);
    }
    

    }
  

}



