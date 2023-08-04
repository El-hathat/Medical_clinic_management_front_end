import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { signinrequest } from 'src/app/Models/signinrequest';
import {FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/Services/http.service';
import { Token } from '@angular/compiler';
import { UserAuthServiceService } from 'src/app/Services/user-auth-service.service';
import { Medecin } from 'src/app/Models/Medecin';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formGroup: FormGroup;
  med:Medecin;
  test:String;
  constructor(private httpservice: HttpService,private router:Router , private userAuth:UserAuthServiceService){}
  ngOnInit(): void {
    this.initForm()
  }
  initForm(){
    this.formGroup=new FormGroup({
      username:new FormControl("",[Validators.required]),
      password:new FormControl("",[Validators.required]),
    });
  }
  loginProcess(){
    if(this.formGroup.valid){
      this.httpservice.getToken(this.formGroup.value).subscribe((result: any)=>{
        
/*console.log(result);
          this.userAuth.setRoles(result.user.role);

          const role = result.user.role[0].rolename;
        if (role === 'Admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/user']);

        }*/
        this.httpservice.md=result.med;
        
console.log(this.httpservice.md.prenom);
console.log(this.httpservice.md.prenom);

console.log('____________tt___________');
//console.log(result.user.username);
//console.log(this.httpservice.login(result.token));
//console.log(this.httpservice.getCurrentUser);
alert(this.httpservice.md.role);
       if(this.httpservice.md.role=='medcin'){
        this.router.navigate(['Admin']);
       }
       else if(this.httpservice.md.role=='secretaire' && this.httpservice.md.etat){
   
        this.router.navigate(['patients']);
       }else{
        alert("votre compte est desactiver,consulter l'administration'");
       }

        
        },
        (error)=>{ //this.router.navigate(["/Admin"]);
          alert("pwd or email is incorrect");
          
        }
      );
    }
  }
}